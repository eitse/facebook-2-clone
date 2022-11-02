import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { db, storage } from "./firebase";
import "firebase/storage";
import firebase from "firebase/compat/app";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

function InputBox() {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const [imageToPost, setImageToPost] = useState(null);

  //Continue from here, imageToPost was successfully console logged out
  const { data: session } = useSession();

  async function sendPost(e) {
    e.preventDefault();

    //To block off any empty Post
    if (!inputRef.current?.value) return;
    console.log(inputRef.current?.value);

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        //set User Timezone time for post
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })

      /*visit this site to get upload insight
     https://www.anycodings.com/questions/how-to-upload-images-to-firebase-web-v9-using-reactjs
      https://blog.logrocket.com/firebase-cloud-storage-firebase-v9-react/
      */
      .then(async (doc) => {
        if (imageToPost) {
          const storageRef = ref(storage, `posts/${doc.id}`);

          removeImage();

          uploadString(storageRef, imageToPost, "data_url").then((snapshot) => {
            //When the upload Completes
            getDownloadURL(snapshot.ref).then((url) => {
              db.collection("posts").doc(doc.id).set(
                {
                  postImage: url,
                },
                { merge: true }
              );
            });
          });
        }
      });

    inputRef.current.value = "";
  }

  const addImageToPost = (e) => {
    //Create a file reader as a Data Url
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    //
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="mt-5 p-5 shadow-md  bg-white rounded-xl flex flex-col">
      <div className="flex items-center">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={40}
          height={40}
          layout="fixed"
        />

        <form className=" ml-2 flex flex-1">
          <input
            className=" p-3 rounded-2xl flex bg-gray-100 flex-1 outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user?.name}?`}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>

        {/* If we have an Image file uploaded to Firebase Storage then render Image */}
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition 
        duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <hr className="mt-3" />

      <div className=" flex mt-2 justify-between text-gray-500">
        <div className="feedOptions">
          <VideoCameraIcon className="h-8 text-red-500" />
          <p>Live Video</p>
        </div>

        {/* Set a ref that will click the hidden input file with ref={filePickerRef} */}
        <div
          onClick={() => filePickerRef.current.click()}
          className="feedOptions"
        >
          <CameraIcon className="h-8 text-green-500" />
          <p>Photo/Video</p>

          {/* //File Input is set to hidden */}

          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="feedOptions">
          <FaceSmileIcon className="h-8 text-yellow-500" />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
