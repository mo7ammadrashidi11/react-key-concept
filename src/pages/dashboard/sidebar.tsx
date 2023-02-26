import React, { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    { title: "Dashboard", icon: <RiDashboardFill /> },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", icon: <BsFillImageFill /> },
    {
      title: "Projects",
      icon: <BsReverseLayoutSidebarReverse />,
      submenue: true,
      subMenuItems: [
        { title: "submenu1" },
        { title: "submenu2" },
        { title: "submenu3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];
  return (
    <div className="flex border">
      <div
        className={`bg-slate-800 h-screen p-5 pt-8 relative duration-300 ${
          open ? "w-72" : "w-20"
        } `}>
        <BsArrowLeftShort
          className={`bg-white text-red-700 rounded-full text-3xl absolute -right-3 top-9 cursor-pointer border border-black ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl mr-2 rounded cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white font-medium text-2xl origin-top ${
              !open && "scale-0"
            }`}>
            Tailwind
          </h1>
        </div>
        <div
          className={`flex content-center rounded-md bg-slate-400 mt-6 ${
            open ? "px-4" : "px-2.5"
          } py-2`}>
          <BsSearch
            className={`text-white text-lg cursor-pointer ${open && "mr-2"}`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent focus:outline-none w-full ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {menus.map((item, index) => (
            <li
              key={index}
              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-zinc-900 rounded-md mt-2">
              <span className="text-2xl">{item.icon}</span>
              <span
                className={`text-base font-meduim flex-1 duration-500 ${
                  !open && "hidden"
                }`}>
                {item.title}
              </span>
              <span>{item.submenue && open && <BsChevronDown />}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>homepage</div>
    </div>
  );
};

export default Dashboard;
