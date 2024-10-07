import React, { useState } from 'react'
import styles from './Work.module.css'
import { Link } from 'react-router-dom'

import img1 from "../../assets/images/img-1-C4nS0eD8.jpg";
import img2 from "../../assets/images/img-2-D-4H1m4L.jpg";
import img3 from "../../assets/images/img-3-pR2ZEVY9.jpg";
import img4 from "../../assets/images/img-4-tHccITd-.jpg";
import img5 from "../../assets/images/img-5-lAucr__a.jpg";
import img6 from "../../assets/images/img-6-DFW03AZ3.jpg";


export default function Work() {
    const [isVisible, setIsVisible] = useState(false);

    let showMore = () => {
      setIsVisible(true);
    };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12">
          <div className={`${styles.work_section}`}>
            <p className={`mt-5 text-uppercase ${styles.title}`}>my work</p>
            <h2 className={`text-uppercase ${styles.my_skills}`}>
              {" "}
              recent work
            </h2>

            <div className="row d-flex my-4">
              <div className="col-md-12">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Graphic Design
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Apps
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Software
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`row ${styles.work_section}`}>
        <div className={`col-md-6 ${styles.work_item}`}>
          <div className={`position-relative ${styles.overlay_container}`}>
            <img src={img1} className={"w-100"} alt="work-1" />
            <div className={`${styles.overlay}`}>
              <h3 className={`${styles.overlay_title} fw-bolder my-2`}>
                <a href="work.html">Work 02</a>
              </h3>
              <span className="text-white pt-1">Animation</span>
              <p className={`${styles.icons}`}>
                <span className="d-inline">
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-solid fa-share-nodes"></i>
                  </a>
                </span>
                <span>
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-regular fa-eye"></i> 100
                  </a>
                </span>
                <span>
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-regular fa-heart"></i> 49
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={`col-md-6 ${styles.work_item}`}>
          <div className={`position-relative ${styles.overlay_container}`}>
            <img src={img2} className={"w-100"} alt="work-2" />
            <div className={`${styles.overlay}`}>
              <h3 className={`${styles.overlay_title} fw-bolder my-2`}>
                <a href="work.html">Work 02</a>
              </h3>
              <span className="text-white pt-1">Animation</span>
              <p className={`${styles.icons}`}>
                <span className="d-inline">
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-solid fa-share-nodes"></i>
                  </a>
                </span>
                <span>
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-regular fa-eye"></i> 100
                  </a>
                </span>
                <span>
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-regular fa-heart"></i> 49
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className={`row ${styles.sec_section}`}>
        <div className={`col-md-6 ${styles.work_item}`}>
          <div
            className={`position-relative w-100 ${styles.overlay_container}`}
          >
            <img src={img3} className={"w-100"} alt="work-3" />
            <div className={`${styles.overlay}`}>
              <h3 className={`${styles.overlay_title} fw-bolder my-2`}>
                <a href="work.html">Work 02</a>
              </h3>
              <span className="text-white pt-1">Animation</span>
              <p className={`${styles.icons}`}>
                <span className="d-inline">
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-solid fa-share-nodes"></i>
                  </a>
                </span>
                <span>
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-regular fa-eye"></i> 100
                  </a>
                </span>
                <span>
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-regular fa-heart"></i> 49
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className={`col-md-6 ${styles.work_item}`}>
          <div
            className={`position-relative w-100 ${styles.overlay_container}`}
          >
            <img src={img4} className={"w-100"} alt="work-4" />
            <div className={`${styles.overlay}`}>
              <h3 className={`${styles.overlay_title} fw-bolder my-2`}>
                <a href="work.html">Work 02</a>
              </h3>
              <span className="text-white pt-1">Animation</span>
              <p className={`${styles.icons}`}>
                <span className="d-inline">
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-solid fa-share-nodes"></i>
                  </a>
                </span>
                <span>
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-regular fa-eye"></i> 100
                  </a>
                </span>
                <span>
                  <a className={`${styles.anchor_bg}`} href="#">
                    <i className="fa-regular fa-heart"></i> 49
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {!isVisible && (
          <div className="col-md-12">
            <div className="my-lg-1">
              <button
                className={`btn btn-primary mt-5 px-2 py-1 fs-5 fw-light text-capitalize`}
                onClick={showMore}
              >
                show more
              </button>
            </div>
          </div>
        )}
      </div>

      {isVisible && (
        <div className="row mt-0">
          <div className="col-md-12">
            <div className={`${styles.work_section}`}>
              <div className="row mt-0">
                <div className={`col-md-6 ${styles.work_item}`}>
                  <div
                    className={`position-relative w-100 ${styles.overlay_container} ${styles.first_container}`}
                  >
                    <img src={img5} className={"w-100"} alt="work-3" />
                    <div className={`${styles.overlay}`}>
                      <h3 className={`${styles.overlay_title} fw-bolder my-2`}>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span className="text-white pt-1">Animation</span>
                      <p className={`${styles.icons}`}>
                        <span className="d-inline">
                          <a className={`${styles.anchor_bg}`} href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a className={`${styles.anchor_bg}`} href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a className={`${styles.anchor_bg}`} href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`col-md-6 ${styles.work_item}`}>
                  <div
                    className={`position-relative w-100 ${styles.overlay_container} ${styles.first_container}`}
                  >
                    <img src={img6} className={"w-100"} alt="work-4" />
                    <div className={`${styles.overlay}`}>
                      <h3 className={`${styles.overlay_title} fw-bolder my-2`}>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span className="text-white pt-1">Animation</span>
                      <p className={`${styles.icons}`}>
                        <span className="d-inline">
                          <a className={`${styles.anchor_bg}`} href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a className={`${styles.anchor_bg}`} href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a className={`${styles.anchor_bg}`} href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
