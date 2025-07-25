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
          <section className="py-5 bg-light">
  <div className="container">
    <h2 className="mb-4">📅 Upcoming Events</h2>
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
                <h2>Amazing Adventure Camping Services for Enjoyed</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider One ===*/}
          <Slider
            {...sliderActive4Item}
            className="slider-active-4-item wow fadeInUp"
          >
            {/*=== Single Service Item ===*/}
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
                  <a href="#">Tent Camping</a>
                </h3>
                <p>
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            {/*=== Single Service Item ===*/}
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
                  <a href="#">Glamping Cabin</a>
                </h3>
                <p>
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            {/*=== Single Service Item ===*/}
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
                  <a href="#">RV Caravan Trailers</a>
                </h3>
                <p>
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            {/*=== Single Service Item ===*/}
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
                  <a href="#">Woodfire &amp; BBQ Party</a>
                </h3>
                <p>
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            {/*=== Single Service Item ===*/}
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
                  <a href="#">Glamping Cabin</a>
                </h3>
                <p>
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Activity Section ======*/}
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