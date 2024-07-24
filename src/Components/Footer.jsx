import React,{useEffect} from 'react'
import Image from 'react-bootstrap/Image';
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
    useEffect(() => {
        AOS.init({
             disable: "phone",
             duration: 1000,
             easing: "ease-out-cubic",
        });
   }, []);
    return (
        <>
            <div className="child-div11">
                <div className="child21">
                    <div className="child21-1" data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-delay='200'>
                        <p style={{ fontSize: '12px', letterSpacing: '1.5px', }}>SHOP<h style={{ color: "brown" }}>@HOME</h> </p>
                        <p style={{ fontSize: '40px', letterSpacing: '0px', }}>Shop, drive & buy <br /> online</p>
                        <p style={{ fontSize: '16px', letterSpacing: '1px', width: "420px", color: 'rgba(107, 104, 104, 0.793)', paddingTop: '8%' }}>Pick a trim and color, packages and accessories to create your ideal GT-R. Then connect with a local dealer or even buy online at participating Buy@Home dealers.[*]</p> <br />
                        <button id='btn7'>Build & Price <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>

                    </div><div className="child21-2" >
                        <Image data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-delay='200' src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/common-assets/2024-nissan-gt-r-nismo-midnight-purple.jpg" fluid alt="" />
                    </div>
                </div>
                <div className="child-div12">
                    <div className="child22">
                        <p style={{ fontSize: '28px', letterSpacing: '0px', display: 'flex' }}>Shop Nissan GT-R<h6>®</h6></p>

                        <div className="icons-div1">
                            <i data-aos="fade-up" data-aos-delay='200' class="fa-solid fa-warehouse"></i>
                            <i data-aos="fade-down" data-aos-delay='200' class="fa-solid fa-map-location-dot"></i>
                            <i data-aos="fade-up" data-aos-delay='200' class="fa-solid fa-calculator"></i>
                            <i data-aos="fade-down" data-aos-delay='200' class="fa-solid fa-money-bill-trend-up"></i>
                            <i data-aos="fade-up" data-aos-delay='200' class="fa-solid fa-newspaper"></i>
                            <i data-aos="fade-down" data-aos-delay='200' class="fa-solid fa-credit-card"></i>
                        </div>
                        <div className="icons-div2">
                            <p data-aos="fade-up" data-aos-delay='200' style={{ paddingLeft: '1%' }}>Search Inventory</p>
                            <p data-aos="fade-down" data-aos-delay='200' style={{ paddingLeft: '3%' }}>Locate a Dealer</p>
                            <p data-aos="fade-up" data-aos-delay='200' style={{ paddingLeft: '2%' }}>Estimate Payments</p>
                            <p data-aos="fade-down" data-aos-delay='200' style={{ paddingLeft: '2%' }}>Trade-in Value</p>
                            <p data-aos="fade-up" data-aos-delay='200' style={{ paddingLeft: '2%' }}>View a Brochure</p>
                            <p data-aos="fade-down" data-aos-delay='200' style={{ paddingLeft: '0%' }}>Estimate Credit Score</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-div">
                <div className="footer-1">
                    <div className="f-1 ">
                        <p>Nissan USA <i class="fa-solid fa-angle-right"></i>  Sports Cars<i className="fa-solid fa-angle-right"></i> <p style={{ paddingTop: '5%', fontWeight: '600', color: 'white' }}>2024 GT-R<h6 style={{ fontSize: '10px', marginLeft: '-7%' }}>®</h6> </p> </p>
                    </div>
                    <div className="f-2">
                        <div className="btn-group">
                            <button className="btn btn-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                English
                            </button>
                            <ul className="dropdown-menu">
                                <li>Spanish</li>
                            </ul>
                        </div>
                        <p style={{ cursor: 'pointer' }} >Live Chat <i class="fa-regular fa-comment"></i></p>
                    </div>
                </div>
                <div className="footer-3" data-aos="fade-down" data-aos-delay='300'>
                    <div className="about">
                        <h6>ABOUT</h6>
                        <li>About Nissan</li>
                        <li>Sustainability & Diversity</li>
                        <li>News & Events</li>
                        <li>Business & Fleet</li>
                        <li>Nissan Rental Car Program</li>
                        <li>Accessibility</li>
                        <li>Cookie Settings</li>
                    </div>
                    <div className="shop-div" data-aos="fade-left" data-aos-delay='300'>
                        <h6>SHOP</h6>
                        <li>Nissan at Home</li>
                        <li>All Vehicles</li>
                        <li>Search Inventory</li>
                        <li>View a Brochure</li>
                        <li>Compare Competitors</li>
                        <li>Build & Price</li>
                        <li>Locate a Dealer</li>
                        <li>Parts & Accessories</li>
                    </div>
                    <div className="owners" data-aos="fade-down" data-aos-delay='300'>
                        <h6>OWNERS</h6>
                        <li>MyNissan Owner Portal</li>
                        <li>Schedule Service</li>
                        <li>Manuals & Guides</li>
                        <li>Maintenance Schedules</li>
                        <li>NissanConnect</li>
                        <li>Extended Protection Plans</li>
                    </div>
                    <div className="offers" data-aos="fade-right" data-aos-delay='300'>
                        <h6>OFFERS & FINANCING</h6>
                        <li>Deals & Offers</li>
                        <li>Financing Options</li>
                        <li>Estimate Payments</li>
                        <li>Get Pre-Approved</li>
                        <li>Estimate Credit Scores</li>
                        <li>Get Internet Quote</li>
                    </div>
                </div>
                <div className="footer-4" >
                    <i data-aos="fade-down" data-aos-delay='200' class="fa-brands fa-tiktok"></i>
                    <i data-aos="fade-up" data-aos-delay='200' class="fa-brands fa-instagram"></i>
                    <i data-aos="fade-up" data-aos-delay='200' class="fa-brands fa-youtube"></i>
                    <i data-aos="fade-down" data-aos-delay='200' class="fa-brands fa-x-twitter"></i>
                    <i data-aos="fade-down" data-aos-delay='200' class="fa-brands fa-facebook"></i>
                    <i data-aos="fade-up" data-aos-delay='200' class="fa-brands fa-pinterest"></i>
                </div>

                <div className="footer-5" >
                    <p>SITE MAP | CONTACT US | DO NOT SELL OR SHARE MY PERSONAL INFORMATION | LEGAL | PRIVACY NOTICE  <button>RECALL INFORMATION</button>     © NISSAN USA 2024</p>
                </div>
            </div>
        </>
    )
}

export default Footer