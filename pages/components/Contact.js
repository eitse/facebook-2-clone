import Image from "next/image";
import React from "react";

function Contact({ src, name }) {
  return (
    <div
      className="flex items-center space-x-3 mb-2
    relative hover:bg-gray-200 rounded-xl cursor-pointer p-2"
    >
      <Image
        className="rounded-full"
        layout="fixed"
        objectFit="cover"
        src={src}
        height={50}
        width={50}
      />
      <p>{name}</p>
      <div
        className="absolute bottom-2 left-7 bg-green-400 
        h-3 w-3 rounded-full animate-bounce"
      />
    </div>
  );
}

export default Contact;
