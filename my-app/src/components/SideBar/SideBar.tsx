'use client'

import React from "react";

import { useRouter, usePathname } from 'next/navigation'
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { FaGear } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import "./style.css"

function Sidebar () {
  const currentPath = usePathname();
  const router = useRouter();

  const isHomePage = currentPath.includes("/home");
  const isAdoptionPage = currentPath.includes("/adoption") || currentPath.includes("/animals");
  const isUsersPage = currentPath.includes("/user");
  const isConfigPage = currentPath.includes("/config");
  const isHelpPage = currentPath.includes("/help");
  const isReportPage = currentPath.includes("/report");
  
  return (
      <div className="sidebar-container">
        <div className="sidebar-content-container">
          <div>
            <IoHome onClick={() => {router.push("/home")}} className={`sidebar-icon ${ isHomePage ? 'active' : '' }`} />
          </div>
          <div>
            <IoPersonSharp onClick={() => {router.push("/users")}} className={`sidebar-icon ${ isUsersPage ? 'active' : '' }`}/>
          </div>
          <div>
            <FaFileAlt onClick={() => {router.push("/documents")}} className={`sidebar-icon`}/>
          </div>
          <div>
            <GoAlertFill onClick={() => {router.push("/reports")}}  className={`sidebar-icon ${ isReportPage ? 'active' : '' }`}/>
          </div>
          <div>
            <MdOutlinePets onClick={() => {router.push("/adoption")}} className={`sidebar-icon ${ isAdoptionPage ? 'active' : '' }`}/>
          </div>
          <div>
            <BsFillQuestionCircleFill onClick={() => {router.push("/help")}} className={`sidebar-icon ${ isHelpPage ? 'active' : '' }`}/>
          </div>
          <div>
            <FaGear onClick={() => {router.push("/config")}} className={`sidebar-icon ${ isConfigPage ? 'active' : '' }`}/>
          </div>
        </div>
      </div>
  );
}

export default Sidebar;