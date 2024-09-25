'use client'

import React from "react";
import { useRouter, usePathname } from 'next/navigation';
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Tooltip } from 'antd';


function Sidebar() {
  const currentPath = usePathname();
  const router = useRouter();

  const isHomePage = currentPath.includes("/home");
  const isAdoptionPage = currentPath.includes("/adoption") || currentPath.includes("/animals");
  const isUsersPage = currentPath.includes("/users");
  const isDocumentsPage = currentPath.includes("/documents");
  const isHelpPage = currentPath.includes("/help");
  const isReportPage = currentPath.includes("/report");

  return (
    <div className="bg-sgb fixed h-full flex justify-center w-20">
      <div className="flex flex-col items-center gap-12 h-1/2 pt-8">
        <div>
          <Tooltip title="Tela inicial" placement="topRight">
            <IoHome
                onClick={() => {
                  router.push("/home")
                }}
                className={`w-6 h-6 text-white cursor-pointer ${isHomePage ? 'fill-pgreen' : ''}`}
            />
          </Tooltip>
        </div>

        <div>
          <Tooltip title="Detalhes do usuário" placement="topRight">
            <IoPersonSharp
                onClick={() => {
                  router.push("/users")
                }}
                className={`w-6 h-6 text-white cursor-pointer ${isUsersPage ? 'fill-pgreen' : ''}`}
            />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Documentos" placement="topRight">
            <FaFileAlt
                onClick={() => {
                  router.push("/documents")
                }}
                className={`w-6 h-6 text-white cursor-pointer ${isDocumentsPage ? 'fill-pgreen' : ''}`}
            />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Denúncias" placement="topRight">
            <GoAlertFill
                onClick={() => {
                  router.push("/reports")
                }}
                className={`w-6 h-6 text-white cursor-pointer ${isReportPage ? 'fill-pgreen' : ''}`}
            />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Adoções" placement="topRight">
            <MdOutlinePets
                onClick={() => {
                  router.push("/adoption")
                }}
                className={`w-6 h-6 text-white cursor-pointer ${isAdoptionPage ? 'fill-pgreen' : ''}`}
            />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Ajuda" placement="topRight">
            <BsFillQuestionCircleFill
                onClick={() => {
                  router.push("/help")
                }}
                className={`w-6 h-6 text-white cursor-pointer ${isHelpPage ? 'fill-pgreen' : ''}`}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
