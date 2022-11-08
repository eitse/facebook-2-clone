import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatBubbleBottomCenterIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/solid";

import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";


import { signOut, useSession } from "next-auth/react";
import HeadIcons from "./HeadIcons";

function Header() {
  const { data: session, status } = useSession();

  return (
    <div
      className="sticky top-0 z-50 bg-white md:p-1 shadow shadow-gray-400 flex 
      justify-between space-x-2 mx-1 py-1"
    >
      {/* Header left */}
      <div className="flex  ">
        <div className="flex items-center mx-2  ">
          <Image
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
          />
        </div>
        <div className="flex flex-1 items-center justify-center ">
          <div
            className="flex items-center space-x-1 border 
          bg-gray-100 p-1 rounded-2xl"
          >
            <MagnifyingGlassIcon className="h-6 text-gray-500" />
            <input
              className="outline-none bg-transparent md:inline-flex hidden"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>
      </div>

      {/* Header Center */}
      <div className=" w-80 justify-between md:mt-0 lg:w-96 flex">
        <HeadIcons Icon={HomeIcon} active />
        <HeadIcons Icon={FlagIcon} active = {false} />
        <HeadIcons Icon={PlayIcon} active = {false} />
        <HeadIcons Icon={ShoppingCartIcon}  active = {false} />
        <HeadIcons Icon={UserGroupIcon}  active = {false}/>
      </div>

      {/* Header Right */}
      <div className="flex first-letter:flex md:w-fit justify-end items-center ">
        <Image
          src={`${session?.user?.image}`}
          className="rounded-full cursor-pointer"
          onClick={() => signOut()}
          width={40}
          height={40}
          layout="fixed"
        />

        <p className="hidden lg:flex m-1 truncate font-bold text-md">
          {session?.user?.name}
        </p>
        <div className="hidden space-x-1 lg:inline-flex flex-grow justify-between">
          <ViewColumnsIcon className="headerRightIcon" />
          <ChatBubbleBottomCenterIcon className="headerRightIcon" />
          <BellIcon className="headerRightIcon" />
          <ChevronDownIcon className="headerRightIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
