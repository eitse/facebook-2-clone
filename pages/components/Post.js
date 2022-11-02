import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon, ShareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

function Post({ name, message, email, timestamp, image, postImage }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            layout="fixed"
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">{email}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {/* Convert a firebase date to a formarted locale String */}
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>
        <p className="pt-4 text-xl">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectfit="cover" layout="fill" />
        </div>
      )}

      {/* {Continue From Footer Like Comment Share} */}

      <div
        className="flex justify-between item-center rounded-b-2xl
      bg-white shadow-md text-gray-500 border-t border-t-gray-200"
      >
        <div className="feedOptions mt-2">
          <HandThumbUpIcon className="h-4 " />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="feedOptions mt-2">
          <ChatBubbleOvalLeftIcon className="h-4 " />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="feedOptions mt-2">
          <ShareIcon className="h-4 " />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
