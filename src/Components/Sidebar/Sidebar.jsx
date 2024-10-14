
import { useState } from "react";
import styles from "./Sidebar.module.css"
import { NavLink } from 'react-router-dom';

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";


export default function Sidebar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  // let toggleMenu = () => {

  //   setIsOpen(! isOpen);
  //   console.log(isOpen)
  // }
  return (
    <div>
      <Button
        onClick={handleShow}
        className={`btn btn-light border-secondary text-start fixed-top  my-1 d-md-none ${styles.menu_btn}`}
        style={{ right:'80%' }}
      >
        <i className="fa-solid fa-bars fa-xl"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className={`px-2 ${styles.sidebar_container} `}>
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
        </Offcanvas.Body>
      </Offcanvas>
      <div className={` ${styles.sidebar} vh-100 d-md-block d-none`}>
        <div className="text-center ">
          <div>
            <div className={`px-2 ${styles.sidebar_container} `}>
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
    </div>
  );
}
