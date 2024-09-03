'use client'

import React from "react";
import { useRouter, usePathname } from 'next/navigation';
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { FaGear } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";

function Sidebar() {
  const currentPath = usePathname();
  const router = useRouter();

  const isHomePage = currentPath.includes("/home");
  const isAdoptionPage = currentPath.includes("/adoption") || currentPath.includes("/animals");
  const isUsersPage = currentPath.includes("/users");
  const isDocumentsPage = currentPath.includes("/documents");
  const isConfigPage = currentPath.includes("/config");
  const isHelpPage = currentPath.includes("/help");
  const isReportPage = currentPath.includes("/report");

  return (
    <div className="bg-[#25252D] h-full top-16 left-0 w-20">
      <div className="flex flex-col items-center gap-12 h-1/2 pt-12">
        <div>
          <IoHome
            onClick={() => { router.push("/home") }}
            className={`w-8 h-8 text-white cursor-pointer ${isHomePage ? 'text-[#269996]' : ''}`}
          />
        </div>
        <div>
          <IoPersonSharp
            onClick={() => { router.push("/users") }}
            className={`w-8 h-8 text-white cursor-pointer ${isUsersPage ? 'text-[#269996]' : ''}`}
          />
        </div>
        <div>
          <FaFileAlt
            onClick={() => { router.push("/documents") }}
            className={`w-8 h-8 text-white cursor-pointer ${isDocumentsPage ? 'text-[#269996]' : ''}`}
          />
        </div>
        <div>
          <GoAlertFill
            onClick={() => { router.push("/reports") }}
            className={`w-8 h-8 text-white cursor-pointer ${isReportPage ? 'text-[#269996]' : ''}`}
          />
        </div>
        <div>
          <MdOutlinePets
            onClick={() => { router.push("/adoption") }}
            className={`w-8 h-8 text-white cursor-pointer ${isAdoptionPage ? 'text-[#269996]' : ''}`}
          />
        </div>
        <div>
          <BsFillQuestionCircleFill
            onClick={() => { router.push("/help") }}
            className={`w-8 h-8 text-white cursor-pointer ${isHelpPage ? 'text-[#269996]' : ''}`}
          />
        </div>
        <div>
          <FaGear
            onClick={() => { router.push("/config") }}
            className={`w-8 h-8 text-white cursor-pointer ${isConfigPage ? 'text-[#269996]' : ''}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
