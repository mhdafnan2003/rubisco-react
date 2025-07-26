"use client";
import React from 'react';
import GallerySection from "@/src/components/GallerySection";
import EventCard from '../src/components/EventCard';
import Layout from "@/src/layout/Layout";
import {
  home2Slider,
  sliderActive3Item,
  sliderActive4Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index = () => {
  const [events, setEvents] = React.useState([]);

React.useEffect(() => {
  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/events');
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error('Error fetching events:', err);
    }
  };

  fetchEvents();
}, []);
  return (
    <Layout header={1} noFooter>
      {/*====== Start Hero Section ======*/}
       <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-two">
          {/*=== Hero Slider ===*/}
          <Slider {...home2Slider} className="hero-slider-two">
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-1.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Tour Travel &amp; Adventure Camping
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-2.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Tour Travel &amp; Adventure Camping
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-3.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Tour Travel &amp; Adventure Camping
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-4.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Tour Travel &amp; Adventure Camping
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
        
      {/*====== Start About Section ======*/}
      <section className="about-section pt-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              {/*=== About Content Box ===*/}
              <div className="about-content-box text-center mb-55 wow fadeInDown">
                <div className="section-title mb-30">
                  <span className="sub-title">About Company</span>
                  <h2>We Are Most Funning Company About Travel &amp; Tours</h2>
                </div>
                <p>
                  Sit amet consectetur. Velit integer eu tincidunt scelerisque.
                  Sodales volutpat neque fermentum malesuada scelerisque massa
                  lacus. Ultrices eget leo cras odio blandit rhoncus eu. At
                  feugiat condimentum massa integer iaculis sit sit. Sagittis
                  vitae quis sed vitae congue
                </p>
              </div>
            </div>
          </div>
          <Slider
            {...sliderActive4Item}
            className="slider-active-4-item wow fadeInUp"
          >
       

            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-1.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Tent Camping Services</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
             
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-2.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Trailers and RV Spots</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-3.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Adventure and Climbing</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-4.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Couple Camping or Cabin</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-1.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Tent Camping Services</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-2.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Trailers and RV Spots</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-3.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Adventure and Climbing</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-4.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Couple Camping or Cabin</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Booking Section ======*/}
      
      {/*====== End Hero Section ======*/}
      {/*====== Start Activity Section ======*/}
      <section className="services-section black-bg pt-100 pb-100">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-xl-7">
        {/*=== Section Title ===*/}
        <div className="section-title text-center text-white mb-50 wow fadeInDown">
          <span className="sub-title">Popular Services</span>
          <h2>What we are going to offer for you is?</h2>
        </div>
      </div>
    </div>
    {/*=== Service Slider One ===*/}
    <Slider
      {...sliderActive4Item}
      className="slider-active-4-item wow fadeInUp"
    >
      {/*=== STRANGERS TRIP ===*/}
      <div className="single-service-item-two">
        <div
          className="hover-bg bg_cover"
          style={{
            backgroundImage: "url(assets/images/service/hover-bg.jpg)",
          }}
        />
        <div className="content">
          <div className="icon">
            <i className="flaticon-camping" />
          </div>
          <h3 className="title">
            <a href="https://wa.me/918590812248">STRANGERS TRIP</a>
          </h3>
          <p>
            Join a fun-filled trip with like-minded travelers, explore new
            places, make friends, and create unforgettable memories.
          </p>
          <a href="https://wa.me/918590812248" className="btn-link">
            For More Details <i className="far fa-long-arrow-right" />
          </a>
        </div>
      </div>

      {/*=== RESORT BOOKING (icon unchanged as per your request) ===*/}
      <div className="single-service-item-two">
        <div
          className="hover-bg bg_cover"
          style={{
            backgroundImage: "url(assets/images/service/hover-bg.jpg)",
          }}
        />
        <div className="content">
          <div className="icon">
            <i className="flaticon-cable-car" />
          </div>
          <h3 className="title">
            <a href="https://wa.me/918590812248">RESORT BOOKING</a>
          </h3>
          <p>
            Book premium resorts at the best prices. Perfect for family
            vacations, romantic getaways, or corporate retreats.
          </p>
          <a href="https://wa.me/918590812248" className="btn-link">
            For More Details <i className="far fa-long-arrow-right" />
          </a>
        </div>
      </div>

      {/*=== COLLEGE TRIP ===*/}
      <div className="single-service-item-two">
        <div
          className="hover-bg bg_cover"
          style={{
            backgroundImage: "url(assets/images/service/hover-bg.jpg)",
          }}
        />
        <div className="content">
          <div className="icon">
            <i className="flaticon-trailer" />
          </div>
          <h3 className="title">
            <a href="https://wa.me/918590812248">COLLEGE TRIP</a>
          </h3>
          <p>
            Fun, safe, and budget-friendly college tours designed for students—
            adventure, learning, and bonding all in one trip.
          </p>
          <a href="https://wa.me/918590812248" className="btn-link">
            For More Details <i className="far fa-long-arrow-right" />
          </a>
        </div>
      </div>

      {/*=== SCHOOL TOUR ===*/}
      <div className="single-service-item-two">
        <div
          className="hover-bg bg_cover"
          style={{
            backgroundImage: "url(assets/images/service/hover-bg.jpg)",
          }}
        />
        <div className="content">
          <div className="icon">
            <i className="flaticon-firewood" />
          </div>
          <h3 className="title">
            <a href="https://wa.me/918590812248">SCHOOL TOUR</a>
          </h3>
          <p>
            Educational and recreational tours for school students with complete
            safety, learning experiences, and fun activities.
          </p>
          <a href="https://wa.me/918590812248" className="btn-link">
            For More Details <i className="far fa-long-arrow-right" />
          </a>
        </div>
      </div>

      {/*=== FAMILY TRIP ===*/}
      <div className="single-service-item-two">
        <div
          className="hover-bg bg_cover"
          style={{
            backgroundImage: "url(assets/images/service/hover-bg.jpg)",
          }}
        />
        <div className="content">
          <div className="icon">
            <i className="flaticon-cable-car" />
          </div>
          <h3 className="title">
            <a href="https://wa.me/918590812248">FAMILY TRIP</a>
          </h3>
          <p>
            Comfortable family-friendly tours with sightseeing, activities, and
            accommodation tailored for all age groups.
          </p>
          <a href="https://wa.me/918590812248" className="btn-link">
            For More Details <i className="far fa-long-arrow-right" />
          </a>
        </div>
      </div>
    </Slider>
  </div>
</section>
      {/*====== End Activity Section ======*/}
              <section className="py-5 bg-light">
  <div className="container">
    <h2 className="mb-4 text-center my-4">Upcoming Events</h2>
    <div className="row">
      {events.map((event) => (
        <div className="col-md-4 mb-3" key={event._id}>
          <EventCard
            title={event.title}
            description={event.description}
            date={event.date}
            price={event.price}
            image={event.image}
          />
        </div>
      ))}
    </div>
  </div>
</section>
      {/*====== end  Section ======*/}
      {/*====== Start Activity Section ======*/}
<section className="activity-section">
  <div className="activity-wrapper-bgc text-white black-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7">
          <div className="section-title text-center mb-50 wow fadeInDown">
            <span className="sub-title">Popular Destinations</span>
            <h2>Feel Real Adventure and Explore India</h2>
          </div>
        </div>
      </div>
      <Tab.Container defaultActiveKey={"kerala"}>
        <div className="row">
          {/* Updated columns for mobile stacking */}
          <div className="col-12 col-md-4">
            <div className="activity-nav-tab mb-4 mb-md-0 wow fadeInLeft h-100">
              <Nav as="ul" className="nav nav-tabs">
                <Nav.Item as="li">
                  <Nav.Link as="a" href="#kerala" eventKey="kerala">
                    Kerala
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as="a" href="#goa" eventKey="goa">
                    Goa
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as="a" href="#maharashtra" eventKey="maharashtra">
                    Maharashtra
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as="a" href="#karnataka" eventKey="karnataka">
                    Karnataka
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as="a" href="#jammu" eventKey="jammu">
                    Jammu & Kashmir
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as="a" href="#other" eventKey="other">
                    Other Tourist Places
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          {/* Added margin-top for mobile (mt-4) and removed it for larger screens (mt-md-0) */}
          <div className="col-12 col-md-8 mt-4 mt-md-0">
            <Tab.Content className="tab-content wow fadeInRight">
              {/*=== Tab Pane for Kerala ===*/}
              <Tab.Pane className="tab-pane fade" eventKey="kerala">
                <div className="row">
                  {/* Added 'activity-image-item' class for uniform size */}
                  <div className="col-6 mb-4"><img src="assets/images/kerala-1.jpg" className="img-fluid radius-12 activity-image-item" alt="Kerala Backwaters" /></div>
                  <div className="col-6 mb-4"><img src="assets/images/kerala-2.jpg" className="img-fluid radius-12 activity-image-item" alt="Kerala Tea Plantations" /></div>
                  <div className="col-6 mb-4"><img src="assets/images/kerala-3.jpeg" className="img-fluid radius-12 activity-image-item" alt="Kathakali Dancer" /></div>
                  <div className="col-6 mb-4"><img src="assets/images/kerala-4.jpeg" className="img-fluid radius-12 activity-image-item" alt="Kerala Houseboat" /></div>
                </div>
              </Tab.Pane>
              {/*=== Tab Pane for Goa ===*/}
              <Tab.Pane className="tab-pane fade" eventKey="goa">
                 <div className="row">
                  <div className="col-6 mb-4"><img src="assets/images/goa1.jpeg" className="img-fluid radius-12 activity-image-item" alt="Goa Beach" /></div>
                  <div className="col-6 mb-4"><img src="assets/images/goa2.jpeg" className="img-fluid radius-12 activity-image-item" alt="Goa Church" /></div>
                  <div className="col-6 mb-4"><img src="assets/images/goa3.jpeg" className="img-fluid radius-12 activity-image-item" alt="Goa Coastline" /></div>
                  <div className="col-6 mb-4"><img src="assets/images/goa4.jpeg" className="img-fluid radius-12 activity-image-item" alt="Goa Beach Huts" /></div>
                </div>
              </Tab.Pane>
              {/*=== ... Repeat for all other Tab.Panes, adding 'activity-image-item' to each img tag ===*/}
              <Tab.Pane className="tab-pane fade" eventKey="maharashtra">
                 <div className="row">
                  <div className="col-6 mb-4"><img src="assets/images/maharashtra1.jpeg" className="img-fluid radius-12 activity-image-item" alt="Gateway of India, Mumbai" /></div>
                  <div className="col-6 mb-4"><img src="assets/images/maharashtra2.jpeg" className="img-fluid radius-12 activity-image-item" alt="Western Ghats, Maharashtra" /></div>
                  <div className="col-6 mb-4"><img src="assets/images/maharashtra3.jpeg" className="img-fluid radius-12 activity-image-item" alt="Pratapgad Fort" /></div>
                  <div className="col-6 mb-4"><img src="assets/images/maharashtra4.jpeg" className="img-fluid radius-12 activity-image-item" alt="Mumbai Sea Link" /></div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="karnataka">
                <div className="row">
                    <div className="col-6 mb-4"><img src="assets/images/karnataka1.jpeg" className="img-fluid radius-12 activity-image-item" alt="Hampi, Karnataka" /></div>
                    <div className="col-6 mb-4"><img src="assets/images/karnataka2.jpeg" className="img-fluid radius-12 activity-image-item" alt="Mysore Palace" /></div>
                    <div className="col-6 mb-4"><img src="assets/images/karnataka3.jpeg" className="img-fluid radius-12 activity-image-item" alt="Coorg, Karnataka" /></div>
                    <div className="col-6 mb-4"><img src="assets/images/karnataka4.jpeg" className="img-fluid radius-12 activity-image-item" alt="Jog Falls, Karnataka" /></div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="jammu">
                <div className="row">
                    <div className="col-6 mb-4"><img src="assets/images/jammu1.jpeg" className="img-fluid radius-12 activity-image-item" alt="Dal Lake, Srinagar" /></div>
                    <div className="col-6 mb-4"><img src="assets/images/jammu2.jpeg" className="img-fluid radius-12 activity-image-item" alt="Pahalgam, Kashmir" /></div>
                    <div className="col-6 mb-4"><img src="assets/images/jammu3.jpeg" className="img-fluid radius-12 activity-image-item" alt="Shikara Boats" /></div>
                    <div className="col-6 mb-4"><img src="assets/images/jammu4.jpeg" className="img-fluid radius-12 activity-image-item" alt="Kashmir Mountains" /></div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="other">
                <div className="row">
                    <div className="col-6 mb-4"><img src="assets/images/other1.jpeg" className="img-fluid radius-12 activity-image-item" alt="Taj Mahal, Agra" /></div>
                    <div className="col-6 mb-4"><img src="assets/images/other2.jpeg" className="img-fluid radius-12 activity-image-item" alt="Hawa Mahal, Jaipur" /></div>
                    <div className="col-6 mb-4"><img src="assets/images/other3.jpeg" className="img-fluid radius-12 activity-image-item" alt="Ganges River, Varanasi" /></div>
                    <div className="col-6 mb-4"><img src="assets/images/other4.jpeg" className="img-fluid radius-12 activity-image-item" alt="Golden Temple, Amritsar" /></div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  </div>
</section>
      {/*====== Start activity Section ======*/}
      {/*====== Start Services Section ======*/}
      <section className="services-seciton pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Popular Services</span>
                <h2>Amazing Adventure Camping Services for Enjoyed</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {/*=== Single Service Item ===*/}
            <div className="single-service-item mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    <a>Classic Tents</a>
                  </Link>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
              <div className="img-holder">
                <img
                  src="assets/images/service/service-1.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    Glamping Cabin
                  </Link>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
              <div className="img-holder">
                <img
                  src="assets/images/service/service-2.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    RV Luxury Tent
                  </Link>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
              <div className="img-holder">
                <img
                  src="assets/images/service/service-3.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    RV Luxury Tent
                  </Link>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
              <div className="img-holder">
                <img
                  src="assets/images/service/service-2.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Services Section ======*/}
      {/*====== Start Features Section ======*/}
     
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-bg overlay bg_cover pt-140 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-center text-white wow fadeInDown">
                <h2 className="mb-35">
                  Ready to Travel With Real Adventure and Enjoy Natural
                </h2>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Fact Section ======*/}
     
      {/*====== End Fact Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Testimonials</span>
                <h2>What Our Traveler Say About Our Tour Services</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-xl-center">
            <div className="col-xl-5 col-lg-12 order-2 order-xl-1">
              {/*=== Testimonial Image ===*/}
              <div className="testimonial-one_image-box mb-40 wow fadeInLeft">
                <img
                  src="assets/images/testimonial/testimonial-1.jpg"
                  alt="Testimonial Image"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 order-1 order-xl-2">
              {/*=== Testimonial Slider ===*/}
              <Slider
                {...testimonialSliderOne}
                className="testimonial-slider-one pl-lg-55 mb-40 wow fadeInRight"
              >
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      
      {/*====== End Blog Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
      <footer className="main-footer black-bg pt-230">
        <div className="container">
          {/*=== Footer Top ===*/}
          <div className="footer-top pt-40 wow fadeInUp">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <p>Thiruvambady, Kozhikode , Kerala, India</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-envelope-open" />
                  </div>
                  <div className="info">
                    <span className="title">Email</span>
                    <p>
                      <a href="mailto:rubiscotourplanners@gmail.com">rubiscotourplanners@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Call Us</span>
                    <p>
                      <a href="tel:+918590812248">+91 8590812248</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Social Box ===*/}
                <div className="social-box mb-40 float-lg-end">
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Widget ===*/}
          <div className="footer-widget-area pt-75 pb-30">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">About Us</h4>
                  <div className="footer-content">
                    <p>
                      To take trivial example which us ever undertakes laborious
                      physica exercise except obsome
                    </p>
                    <a href="#" className="footer-logo">
                      <img
                        src="assets/images/logo/logo.png"
                        alt="Site Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown">
                  <h4 className="widget-title">Services</h4>
                  <div className="footer-content">
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Caravan Soler Tent</a>
                      </li>
                      <li>
                        <a href="#">Family Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Classic Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Wild Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Small Cabin Wood</a>
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown">
                  <h4 className="widget-title">Quick Links</h4>
                  <div className="footer-content">
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Caravan Soler Tent</a>
                      </li>
                      <li>
                        <a href="#">Family Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Classic Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Wild Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Small Cabin Wood</a>
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/*=== Footer Copyright ===*/}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Footer Text ===*/}
                <div className="footer-text">
                  <p>
                    Copy@ 2025 <span style={{ color: "#F7921E" }}>Rubisco</span>
                    , All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Footer Nav ===*/}
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};
export default Index;