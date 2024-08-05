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

  const isHomePage = currentPath === "/home";
  const isAdoptionPage = currentPath === "/adoption";
  const isUsersPage = currentPath === "/user";
  const isConfigPage = currentPath === '/config';
  const isHelpPage = currentPath === '/help';
  const isReportPage = currentPath === '/report';
  
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content-container">

          <a onClick={() => {router.push("/home")}}>
            <IoHome className={`sidebar-icon ${ isHomePage ? 'active' : '' }`} />
          </a>

          <a onClick={() => {router.push("/users")}}>
            <IoPersonSharp className={`sidebar-icon ${ isUsersPage ? 'active' : '' }`}/>
          </a>

          <a onClick={() => {router.push("/documents")}}>
            <FaFileAlt className={`sidebar-icon`}/>
          </a>

          <a onClick={() => {router.push("/reports")}}>
            <GoAlertFill className={`sidebar-icon ${ isReportPage ? 'active' : '' }`}/>
          </a>

          <a onClick={() => {router.push("/adoption")}}>
            <MdOutlinePets className={`sidebar-icon ${ isAdoptionPage ? 'active' : '' }`}/>
          </a>

          <a onClick={() => {router.push("/help")}}>
            <BsFillQuestionCircleFill className={`sidebar-icon ${ isHelpPage ? 'active' : '' }`}/>
          </a>

          <a onClick={() => {router.push("/config")}}>
            <FaGear className={`sidebar-icon ${ isConfigPage ? 'active' : '' }`}/>
          </a>
          
        </div>
      </div>
    </>
  );
}

export default Sidebar;