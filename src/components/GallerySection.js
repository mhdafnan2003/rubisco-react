import Slider from "react-slick";
import { sliderActive5Item } from "../sliderProps";
const GallerySection = () => {
  return (
    <section className="gallery-section mbm-150">
      <div className="container-fluid">
        <Slider
          {...sliderActive5Item}
          className="slider-active-5-item wow fadeInUp"
        >
          {/*=== Single Gallery Item ===*/}
          <div className="single-gallery-item">
            <div className="gallery-img">
              <img src="assets/images/gallery/R1.jpg" alt="Gallery Image" />
              <div className="hover-overlay">
                <a
                  href="https://www.instagram.com/rubisco_tour_planners/"
                  className="icon-btn "
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
          {/*=== Single Gallery Item ===*/}
          <div className="single-gallery-item">
            <div className="gallery-img">
              <img src="assets/images/gallery/R2.jpg" alt="Gallery Image" />
              <div className="hover-overlay">
                <a
                  href="https://www.instagram.com/rubisco_tour_planners/"
                  className="icon-btn "
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
          {/*=== Single Gallery Item ===*/}
          <div className="single-gallery-item">
            <div className="gallery-img">
              <img src="assets/images/gallery/R3.webp" alt="Gallery Image" />
              <div className="hover-overlay">
                <a
                  href="https://www.instagram.com/rubisco_tour_planners/"
                  className="icon-btn "
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
          {/*=== Single Gallery Item ===*/}
          <div className="single-gallery-item">
            <div className="gallery-img">
              <img src="assets/images/gallery/R4.webp" alt="Gallery Image" />
              <div className="hover-overlay">
                <a
                  href="https://www.instagram.com/rubisco_tour_planners/"
                  className="icon-btn "
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
          {/*=== Single Gallery Item ===*/}
          <div className="single-gallery-item">
            <div className="gallery-img">
              <img src="assets/images/gallery/R5.jpg" alt="Gallery Image" />
              <div className="hover-overlay">
                <a
                  href="https://www.instagram.com/rubisco_tour_planners/"
                  className="icon-btn "
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
          
        </Slider>
      </div>
    </section>
  );
};
export default GallerySection;