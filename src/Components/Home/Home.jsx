import React from 'react'
import styles from './Home.module.css'
import carouserImg1 from "../../assets/images/img_bg_1-PzvG2r05.jpg"
import carouserImg2 from"../../assets/images/img_bg_2-DzCs5o-0.jpg"

export default function Home() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carouserImg2}
            className="d-block w-100"
            alt="first background"
          />
          <div className={`${styles.carousel_caption} position-absolute d-none d-md-block`}>
            <h1 className='fw-bold'>
              I am <br />a Designer
            </h1>

            <p className="text-lg-start text-center">100% html5 bootstrap templates Made <br/> By <a href="https://colorlib.com/">Colorlib.com</a></p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={carouserImg1}
            className="d-block w-100"
            alt="sec background"
          />
          <div className={`${styles.carousel_caption} d-none d-md-block`}>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
