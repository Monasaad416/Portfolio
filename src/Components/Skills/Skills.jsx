import React from 'react'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12">
          <div className={`${styles.skills_section}`}>
            <p className={`mt-5 text-uppercase ${styles.title}`}>
              my speciality
            </p>
            <h2 className={`text-uppercase ${styles.my_skills}`}> my skills</h2>
            <p className={`mb-1 fw-normal pe-5 mt-4 ${styles.skills_text}`}>
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </p>

            <div className="row d-flex mt-4">
              <div className="col-md-6">
                <div className="progress_container">
                  <div
                    className={`text-nowrap ${styles.photoshop_title_percentage} d-flex justify-content-between`}
                  >
                    <h5
                      className={`fw-lighter text-capitalize ${styles.progress_title}`}
                    >
                      photoshop
                    </h5>
                    <h6>75%</h6>
                  </div>
                  <div
                    className={`${styles.progress_base_layer} position-relative`}
                  >
                    <div
                      className={`${styles.progress_photoshop_layer} position-absolute`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="progress_container">
                  <div
                    className={`text-nowrap ${styles.jquery_title_percentage} d-flex justify-content-between`}
                  >
                    <h5
                      className={`fw-lighter text-capitalize ${styles.progress_title}`}
                    >
                      jQuery
                    </h5>
                    <h6>60%</h6>
                  </div>
                  <div
                    className={`${styles.progress_base_layer} position-relative`}
                  >
                    <div
                      className={`${styles.progress_jqury_layer} position-absolute`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="progress_container mt-4">
                  <div
                    className={`text-nowrap ${styles.html_title_percentage} d-flex justify-content-between`}
                  >
                    <h5
                      className={`fw-lighter text-capitalize ${styles.progress_title}`}
                    >
                      html
                    </h5>
                    <h6>85%</h6>
                  </div>
                  <div
                    className={`${styles.progress_base_layer} position-relative`}
                  >
                    <div
                      className={`${styles.progress_html_layer} position-absolute`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="progress_container mt-4">
                  <div
                    className={`text-nowrap ${styles.css_title_percentage} d-flex justify-content-between`}
                  >
                    <h5
                      className={`fw-lighter text-capitalize ${styles.progress_title}`}
                    >
                      css
                    </h5>
                    <h6>90%</h6>
                  </div>
                  <div
                    className={`${styles.progress_base_layer} position-relative`}
                  >
                    <div
                      className={`${styles.progress_css_layer} position-absolute`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="progress_container mt-4">
                  <div
                    className={`text-nowrap ${styles.wordpress_title_percentage} d-flex justify-content-between`}
                  >
                    <h5
                      className={`fw-lighter text-capitalize ${styles.progress_title}`}
                    >
                      wordpress
                    </h5>
                    <h6>70%</h6>
                  </div>
                  <div
                    className={`${styles.progress_base_layer} position-relative`}
                  >
                    <div
                      className={`${styles.progress_wordpress_layer} position-absolute`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress_container mt-4">
                  <div
                    className={`text-nowrap ${styles.seo_title_percentage} d-flex justify-content-between`}
                  >
                    <h5
                      className={`fw-lighter text-uppercase ${styles.progress_title}`}
                    >
                      seo
                    </h5>
                    <h6>80%</h6>
                  </div>
                  <div
                    className={`${styles.progress_base_layer} position-relative`}
                  >
                    <div
                      className={`${styles.progress_seo_layer} position-absolute`}
                    ></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
