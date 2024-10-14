import styles from './Home.module.css'
import carouselImg1 from "../../assets/images/img_bg_1-PzvG2r05.jpg"
import carouselImg2 from"../../assets/images/img_bg_2-DzCs5o-0.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



export default function Home() {
 var settings = {
   dots: false,
   infinite: true,
   speed: 4000,
   fade: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   initialSlide: 0,
   autoplay: true,
   autoplaySpeed: 4000,
   useTransform: false,

   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 0,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };
  return (
    <Slider {...settings}>
      <div>
        <div className={`${styles.carousel_overlay} position-relative`}>
          <img
            src={carouselImg2}
            alt="img"
            className={`w-100 ${styles.carousel_img}`}
          />
          <div className={`${styles.carousel_caption}`}>
            <h1 className="fw-bold">
              Hi!
              <br /> Im Jackson
            </h1>

            <p className="text-lg-start text-center fs-4 fw-light">
              100% html5 bootstrap templates Made <br /> By{" "}
              <a href="https://colorlib.com/">Colorlib.com</a>
            </p>
            <button className={`text-uppercase py-3 px-4 ${styles.carousel_btn}`}>
              view portfolio
              <i className="fa-solid fa-briefcase mx-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.carousel_overlay} position-relative`}>
          <img
            src={carouselImg1}
            alt="img"
            className={`${styles.carousel_img}`}
          />
          <div className={`${styles.carousel_caption}`}>
            <h1 className="fw-bold">
              Hi!
              <br /> Im Jackson
            </h1>

            <p className="text-lg-start text-center fs-4 fw-light">
              100% html5 bootstrap templates Made <br /> By{" "}
              <a href="https://colorlib.com/">Colorlib.com</a>
            </p>
            <button className={`text-uppercase py-3 px-4 ${styles.carousel_btn}`}>
              download cv
              <i className="fa-solid fa-download mx-2"></i>
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
}
