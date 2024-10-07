
import { useState } from "react";
import styles from "./Sidebar.module.css"
import { NavLink } from 'react-router-dom';


export default function Sidebar() {
  const[isOpen,setIsOpen] = useState(false);
  
  let openMenu = () => {

    setIsOpen(true);
  }
  return (
    <div className={` ${styles.sidebar}`}>
      <div
        className={`px-2 ${styles.mobile_sidebar_overlay} ${
          isOpen ? "d-block" : "d-none"
        }`}
      ></div>

      <div onClick={openMenu} className={`${styles.menu_btn}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="text-center ">
        <div>
          <div className={`px-2 ${styles.sidebar_container}`}>
            <div className={`m-auto ${styles.sidebar_img}`}></div>
            <h1 className={`text-capitalize mt-5 ${styles.name}`}>
              jackson ford
            </h1>
            <p className={`text-uppercase  ${styles.info}`}>
              <a
                href="#"
                className={`text-decoration-none ${styles.info_link}`}
              >
                UI/UX/Designer{" "}
              </a>
              in Philippines
            </p>
            <div className="w-100 ">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase fw-light nav-link ${styles.nav_link}`}
                    to="/home"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase  fw-light nav-link ${styles.nav_link}`}
                    to="/about"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase  fw-light nav-link ${styles.nav_link}`}
                    to="/experience"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    Experience
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase  fw-light nav-link ${styles.nav_link}`}
                    to="/skills"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase  fw-light nav-link ${styles.nav_link}`}
                    to="/work"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    Work
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`${styles.menu_btn} ${isOpen ? "d-block" : "d-none"}`}
          >
            <div className={`m-auto ${styles.sidebar_img}`}></div>
            <h1 className={`text-capitalize mt-5 ${styles.name}`}>
              jackson ford
            </h1>
            <p className={`text-uppercase  ${styles.info}`}>
              <a
                href="#"
                className={`text-decoration-none ${styles.info_link}`}
              >
                UI/UX/Designer{" "}
              </a>
              in Philippines
            </p>
            <div className="w-100 ">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase fw-light nav-link ${styles.nav_link}`}
                    to="/home"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase  fw-light nav-link ${styles.nav_link}`}
                    to="/about"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase  fw-light nav-link ${styles.nav_link}`}
                    to="/experience"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    Experience
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase  fw-light nav-link ${styles.nav_link}`}
                    to="/skills"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`text-uppercase  fw-light nav-link ${styles.nav_link}`}
                    to="/work"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? `var(--blue)` : "black",
                      };
                    }}
                  >
                    Work
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
