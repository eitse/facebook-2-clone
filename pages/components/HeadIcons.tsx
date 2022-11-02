import React from "react";

type Props = {
  Icon: any
  active : boolean
}

function HeadIcons({ Icon, active }: Props) {
  return (
    <div
      className="cursor-pointer  items-center flex mr-2 h-10
     rounded-xl justify-center hover:bg-gray-100 w-10 
      lg:w-20  active:border-b-2
    active:border-blue-500 group "
    >
      <Icon
        className={`h-8 text-gray-500 group-hover:text-blue-600 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeadIcons;
