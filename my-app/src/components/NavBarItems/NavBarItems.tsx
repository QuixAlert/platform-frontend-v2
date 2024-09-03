import React from "react";

import { MessageFilled, BellFilled, ClockCircleFilled } from "@ant-design/icons";

export default function NavBarItems() {
  return (
    <div className="flex">
      <a className="w-[65px] flex justify-center border-l border-r border-gray-700 text-white text-xl">
        <BellFilled />
      </a>
      <a className="w-[65px] flex justify-center border-r border-gray-700 text-white text-xl">
        <MessageFilled />
      </a>
      <a className="w-[64px] flex justify-center text-white text-xl">
        <ClockCircleFilled />
      </a>
    </div>
  );
}