import React, { useState } from "react";
import {
  ChevronLeftIcon,
  DeviceTabletIcon,
  UserCircleIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={`${
          open ? "md:w-56" : "md:w-24"
        } bg-white h-screen w-20 sticky top-0 bottom-0 left-0 duration-300 shadow-xl border-r-2`}
      >
        <div className="relative">
          <ChevronLeftIcon
            className={`absolute ${
              open ? "rotate-0" : "rotate-180"
            } hidden md:flex cursor-pointer -right-3 rounded-full bg-white top-3 w-7 border-2 border-dark-purple `}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="flex flex-col p-3">
          <Link href="/">
            <div
              className={` flex items-center duration-300  md:mt-12 rounded-md p-2 relative hover:cursor-pointer hover:bg-sky-500 group`}
            >
              <HomeIcon className="h-8 text-gray-700 group-hover:text-white " />
              <p
                className={`${
                  open ? "" : "hidden "
                } absolute left-12 text-gray-600 group-hover:text-white font-semibold`}
              >
                Dashboard
              </p>
            </div>
          </Link>

          <Link href="/about">
            <div
              className={` flex items-center duration-300  md:mt-6 rounded-md p-2 relative hover:cursor-pointer hover:bg-sky-500 group`}
            >
              <UserCircleIcon className="h-8 text-gray-700 group-hover:text-white " />
              <p
                className={`${
                  open ? "" : "hidden "
                } absolute left-12 text-gray-600 group-hover:text-white font-semibold`}
              >
                Dashboard
              </p>
            </div>
          </Link>

          <Link href="/phones">
            <div
              className={` flex items-center duration-300  md:mt-6 rounded-md p-2 relative hover:cursor-pointer hover:bg-sky-500 group`}
            >
              <DeviceTabletIcon className="h-8 text-gray-700 group-hover:text-white " />
              <p
                className={`${
                  open ? "" : "hidden "
                } absolute left-12 text-gray-600 group-hover:text-white font-semibold`}
              >
                Phone Store
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
