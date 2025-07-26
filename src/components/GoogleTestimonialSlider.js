import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Assuming you are using react-slick

// This is a helper function to generate the star icons based on the rating
const RenderStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<li key={i}><i className="fas fa-star" style={{ color: i <= rating ? '#F4B73A' : '#D3D3D3' }} /></li>);
  }
  return <ul className="ratings">{stars}</ul>;
};


const GoogleTestimonialSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // react-slick slider settings. You would import your 'testimonialSliderOne' settings here.
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // This function will fetch reviews from your backend.
    // For now, it uses mock data that matches the Google Reviews format.
    const fetchReviews = () => {
      // IN A REAL APP:
      // fetch('/api/google-reviews')
      //   .then(res => res.json())
      //   .then(data => {
      //     setReviews(data);
      //     setLoading(false);
      //   });

      // USING MOCK DATA FOR DEMONSTRATION:
      const mockDataFromGoogle = [
        {
          author_name: 'Priya Sharma',
          rating: 5,
          text: 'An absolutely unforgettable trip through Kerala! The planning was meticulous and the team was professional. Everything exceeded our expectations. Highly recommended for a hassle-free vacation.',
          profile_photo_url: 'assets/images/testimonial/author-1.jpg', // Use your local paths
          relative_time_description: 'a week ago',
        },
        {
          author_name: 'Rohan Mehta',
          rating: 5,
          text: 'We booked a tour for Goa and it was one of the best decisions ever. The guides were knowledgeable and friendly. The entire process was seamless. Will definitely book with them again!',
          profile_photo_url: 'assets/images/testimonial/author-2.jpg', // Use your local paths
          relative_time_description: '3 weeks ago',
        },
        {
          author_name: 'Anjali Desai',
          rating: 4,
          text: 'A very well-organized hiking trip in Maharashtra. The scenery was breathtaking. There was a slight delay on the first day, but the team handled it very well. Overall, a great experience.',
          profile_photo_url: 'assets/images/testimonial/author-3.jpg', // Use your local paths
          relative_time_description: 'a month ago',
        },
      ];
      
      setTimeout(() => {
        setReviews(mockDataFromGoogle);
        setLoading(false);
      }, 1000); // Simulate loading
    };

    fetchReviews();
  }, []);


  return (
    <section className="testimonial-section pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">Testimonials</span>
              <h2>What Our Travelers Say About Our Tour Services</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-xl-center">
          <div className="col-xl-5 col-lg-12 order-2 order-xl-1">
            <div className="testimonial-one_image-box mb-40 wow fadeInLeft">
              <img
                src="assets/images/testimonial/testimonial-1.jpg"
                alt="Testimonial Image"
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 order-1 order-xl-2">
            {/* Show a loading message while fetching reviews */}
            {loading && <div className="pl-lg-55 mb-40"><p>Loading reviews...</p></div>}
            
            {/* Once loaded, render the slider */}
            {!loading && (
              <Slider
                {...sliderSettings} // Use your slider settings
                className="testimonial-slider-one pl-lg-55 mb-40 wow fadeInRight"
              >
                {/* We map over the reviews state to create a slide for each one */}
                {reviews.map((review, index) => (
                  <div className="gw-testimonial-item" key={index}>
                    <div className="testimonial-inner-content">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h4>Authentic Review</h4>
                          <RenderStars rating={review.rating} />
                        </div>
                      </div>
                      <p>{review.text}</p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src={review.profile_photo_url}
                            alt={review.author_name}
                          />
                        </div>
                        <div className="author-title">
                          <h3 className="title">{review.author_name}</h3>
                          {/* We use the time description from Google here */}
                          <p className="position">{review.relative_time_description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleTestimonialSlider;