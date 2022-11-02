import { useSession } from "next-auth/react";
import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon  
} from "@heroicons/react/24/outline";

import {
  CalendarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  UserIcon
} from "@heroicons/react/24/solid";

function Sidebar() {
  const { data: session, status: loading } = useSession();

  return(
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] ">
      <SidebarRow Icon={null}  title={session?.user?.name} src = {session?.user?.image} />
      <SidebarRow Icon={UserIcon} title="Friends" src = {null} />
      <SidebarRow Icon={UserGroupIcon} title="Group" src = {null} />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" src = {null} />
      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" src = {null} />
      <SidebarRow Icon={CalendarIcon} title="Event" src = {null} />
      <SidebarRow Icon={ClockIcon} title="Memories" src = {null} />
      <SidebarRow Icon={ChevronDownIcon} title="See More" src = {null} />
     </div>)
}

export default Sidebar;



