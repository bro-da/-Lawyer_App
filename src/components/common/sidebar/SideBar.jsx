import React from "react";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineTeam, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import lowyersIcon from "../../../assets/icons/lowyersIcon.svg";
import bookingsIcon from "../../../assets/icons/bookings.svg";
import notificationsIcon from "../../../assets/icons/notifcation.svg";
import meetingsIcon from "../../../assets/icons/meetings.svg";
import dashboardIcon from "../../../assets/icons/dashboard.svg";
import usersIcon from "../../../assets/icons/users.svg";
import servicesIcon from "../../../assets/icons/services.svg";
import messagesIcon from "../../../assets/icons/1.svg";
import permissionsIcon from "../../../assets/icons/2.svg";
import toDoIcon from "../../../assets/icons/3.svg";
import allFilesIcon from "../../../assets/icons/4.svg";
import bannersIcon from "../../../assets/icons/5.svg";
import departmentsIcon from "../../../assets/icons/departments.svg";
import casesIcon from "../../../assets/icons/cases.svg";

const SideBar = () => {
  const loction = useLocation();
  let pathName = loction.pathname;
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <div className="header-left">
              <Link to="/" className="">
                Admin
              </Link>
            </div>
            <ul>
              <li className={`${"/dashboard" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={dashboardIcon} alt="" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className={`${"/lawyers" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={lowyersIcon} alt="" />
                  <span>Lawyers</span>
                </Link>
              </li>
              <li className={`${"/users" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={usersIcon} alt="" />
                  <span>Total Users</span>
                </Link>
              </li>
              <li className={`${"/" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={casesIcon} alt="" />
                  <span>cases</span>
                </Link>
              </li>
              <li className={`${"/departments" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={departmentsIcon} alt="" />
                  <span>Departments</span>
                </Link>
              </li>
              <li
                className={`${"/notifications" === pathName ? "active" : ""}`}
              >
                <Link to="/">
                  <img src={notificationsIcon} alt="" />
                  <span>Notfications</span>
                </Link>
              </li>
              <li className={`${"/meetings" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={meetingsIcon} alt="" />
                  <span>Meeting</span>
                </Link>
              </li>
              <li className={`${"/bookings" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={bookingsIcon} alt="" />
                  <span>Bookings</span>
                </Link>
              </li>
              <li className={`${"/services" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={servicesIcon} alt="" />
                  <span>Services</span>
                </Link>
              </li>
              <li className={`${"/banners" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={bannersIcon} alt="" />
                  <span>Banners</span>
                </Link>
              </li>
              <li className={`${"/allFiles" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={allFilesIcon} alt="" />
                  <span>All Files</span>
                </Link>
              </li>
              <li className={`${"/todo" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={toDoIcon} alt="" />
                  <span>To-Do List</span>
                </Link>
              </li>
              <li className={`${"/permission" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={permissionsIcon} alt="" />
                  <span>Permissions</span>
                </Link>
              </li>
              <li className={`${"/messages" === pathName ? "active" : ""}`}>
                <Link to="/">
                  <img src={messagesIcon} alt="" />
                  <span>Messages</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
