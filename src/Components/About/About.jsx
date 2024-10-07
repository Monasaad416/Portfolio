import React from 'react'
import styles from'./About.module.css'

export default function About() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12">
          <div className={`${styles.about_section}`}>
            <p className={`mt-3 text-uppercase ${styles.title}`}>
              about us
            </p>
            <h2 className={`text-uppercase ${styles.who_am_i}`}> who am i?</h2>
            <p className={`mb-1 fw-normal pe-5 mt-4 ${styles.about_text}`}>
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </p>

            <div className="row mt-4">
              <div
                className={`col-md-3 pb-0 bg-white ${styles.service_container} ${styles.blue_border}`}
              >
                <div className={`px-3 mt-5 ${styles.service}`}>
                  <span className={`mb-3 ${styles.lightbulb_icon}`}>
                    <i className="fa-regular fa-lightbulb fa-2xl"></i>
                  </span>
                  <h3
                    className={`mt-4 mb-5 text-capitalize ${styles.service_name}`}
                  >
                    graphic design
                  </h3>
                </div>
              </div>
              <div
                className={`col-md-3 pb-0 px-4 bg-white ${styles.service_container} ${styles.red_border}`}
              >
                <div className={`px-3 mt-5 ${styles.service}`}>
                  <span className={`mb-3 ${styles.earth_africa_icon}`}>
                    <i className="fa-solid fa-earth-africa fa-2xl"></i>
                  </span>
                  <h3
                    className={`mt-4 mb-5 text-capitalize ${styles.service_name}`}
                  >
                    web design
                  </h3>
                </div>
              </div>

              <div
                className={`col-md-3 pb-0 px-4 bg-white ${styles.service_container} ${styles.yellow_border}`}
              >
                <div className={`px-3 mt-5 ${styles.service}`}>
                  <span className={`mb-3 ${styles.database_icon}`}>
                    <i className="fa-solid fa-database fa-2xl"></i>
                  </span>
                  <h3
                    className={`mt-4 mb-5 text-capitalize ${styles.service_name}`}
                  >
                    software
                  </h3>
                </div>
              </div>

              <div
                className={`col-md-3 pb-0 px-4 bg-white ${styles.service_container} ${styles.purbel_border}`}
              >
                <div className={`px-3 mt-5 ${styles.service}`}>
                  <span className={`mb-3 ${styles.mobile_icon}`}>
                    <i className="fa-solid fa-mobile-screen-button fa-2xl"></i>
                  </span>
                  <h3
                    className={`mt-4 mb-5 text-capitalize ${styles.service_name}`}
                  >
                    application
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
