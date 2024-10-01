import React from 'react'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 mt-0">
          <div className={`${styles.experience_section}`}>
            <p className={`mt-5 text-uppercase ${styles.title}`}>experience</p>
            <h2 className={`text-uppercase ${styles.experience}`}>
              work experience
            </h2>
            <div className="py-1">
              <ul className={`${styles.timeline}`}>
                <li className={`${styles.timeline_item} mb-5`}>
                  <h5 className="fw-bold d-inline">Full Stack Developer </h5>
                  
                  <span className="text-muted mx-3 mb-2 fw-bold">
                    2017-2018
                  </span>
                  <p className="text-muted">
                    Tolerably earnestly middleton extremely distrusts she boy
                    now not. Add and offered prepare how cordial two promise.
                    Greatly who affixed suppose but enquire compact prepare all
                    put. Added forth chief trees but rooms think may.
                  </p>
                </li>

                <li className={`${styles.timeline_item} mb-5`}>
                  <h5 className="fw-bold d-inline">
                    Front End Developer at Google Company
                  </h5>
                  <span className="text-muted mx-3 mb-2 fw-bold">
                    2017-2018
                  </span>
                  <p className="text-muted">
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the na
                  </p>
                </li>

                <li className={`${styles.timeline_item} mb-5`}>
                  <h5 className="fw-bold d-inline">System Analyst</h5>
                  <span className="text-muted mx-3 mb-2 fw-bold">
                    2017-2018
                  </span>
                  <p className="text-muted">
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
