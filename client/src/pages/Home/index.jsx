import React from "react";
import "./style.css";
import CardList from "../../components/CardList/CardList";
import { Helmet } from 'react-helmet';


const
    Home = () => {

        return (
            <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <div className="image-hero">
                    <div className="container banner-content col-lg-9">
                        <div className="center-hero">
                            <div className="text-div-hero">
                                <h6 className="text-white">PROCESS VISA WITHOUT WITHIN HOURS</h6>
                                <h1 className="text-white">Immigrations &Visa Consultation</h1>
                                <p className="pt-20 pb-20 text-white">
                                </p>
                                <a href="add" className="primary-btn">
                                    Book Concultancy
                                </a>
                            </div>
                            <div>
                                <img src="	https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="hero" />
                            </div>
                        </div>


                    </div>
                </div>


                <CardList />

                <section className="feature-area section-gap" id="service">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-9 pb-40 header-text">
                                <h1>Our Unique Features that can impress you</h1>
                                <p>
                                    Who are in extremely love with eco friendly system.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature">
                                    <h4><span className="lnr lnr-user"></span>Expert Technicians</h4>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature">
                                    <h4><span className="lnr lnr-license"></span>Professional Service</h4>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature">
                                    <h4><span className="lnr lnr-phone"></span>Great Support</h4>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature">
                                    <h4><span className="lnr lnr-rocket"></span>Technical Skills</h4>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature">
                                    <h4><span className="lnr lnr-diamond"></span>Highly Recomended</h4>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature">
                                    <h4><span className="lnr lnr-bubble"></span>Positive Reviews</h4>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="latest-blog-area section-gap" id="blog">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-60 col-lg-8">
                                <div className="title text-center">
                                    <h1 className="mb-10">Latest News from our Blog</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 single-blog">
                                <img className="img-fluid" src="	https://preview.colorlib.com/theme/immigration/img/b1.jpg" alt="" />
                                <ul className="tags">
                                    <li><a href="#">Travel</a></li>
                                    <li><a href="#">Life style</a></li>
                                </ul>
                                <a href="blog-single.html"><h4>Portable latest Fashion for young women</h4></a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                                <p className="post-date">31st January, 2018</p>
                            </div>
                            <div className="col-lg-6 single-blog">
                                <img className="img-fluid" src="	https://preview.colorlib.com/theme/immigration/img/b2.jpg" alt="" />
                                <ul className="tags">
                                    <li><a href="#">Travel</a></li>
                                    <li><a href="#">Life style</a></li>
                                </ul>
                                <a href="blog-single.html"><h4>Portable latest Fashion for young women</h4></a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                                <p className="post-date">31st January, 2018</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        );
    };

export default Home;
