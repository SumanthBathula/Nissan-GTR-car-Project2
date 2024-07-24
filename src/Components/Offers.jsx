import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-bootstrap/Carousel';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { TextField } from '@mui/material';


export default function Offers() {
    const [fix, setFix] = useState(false)
    function setFixed() {
        if (window.scrollY >= 150) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);


    let [firstName , setFirstName] = useState("")
    let [errors , setErrors] = useState({
            firstName:"",
    })

    function validData(){
      if(firstName.trim() === ""){
          setErrors((errors)=>({
              ...errors,firstName : "Please Enter Firstname"
          }))
      }
      else{
          setErrors((errors)=>({...errors,firstName:""}))
      }
    }
    return (
        <>

            <div className="navbarDiv5" style={{ zIndex: '1000', position: 'relative' }}>
                <nav class="navbar navbar-expand-lg bg-transparent" style={{ borderBottom: '1px solid rgba(245, 245, 245, 0.427)' }}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src="https://www.nissanusa.com/content/dam/Nissan/us/Navigation/sitesimp/nissan-logo-white.svg" style={{ marginTop: '-22%', marginLeft: '1%' }} alt="" /></a>
                        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i class="fa-solid fa-bars-staggered"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav" >
                                <li class="nav-item" >
                                    <a class="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Vechicles</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={{ color: 'white' }}>Shop</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={{ color: 'white' }}>Discover Nissan</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={{ color: 'white' }}>Owners</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={{ color: 'white' }}>Dealers</a>
                                </li>
                                <button id='btn'>Build & Price <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav class="navbar navbar-expand-lg bg-body-transparent navbar-2" style={{ paddingTop: '2%' }}>
                    <div class="container-fluid" className={fix ? 'navbar-2 fixed' : 'navbar-2'}>
                        <p style={{ paddingLeft: '1%', fontSize: '17px', paddingTop: '0.5%', fontWeight: '800' }}>2024 Nissan GT-R</p>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i class="fa-solid fa-bars-staggered"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{ marginTop: '-20px' }}>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink id='link1' to={'/'}>Overview</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink id='link1' to={'/Gallery'}>Gallery</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink id='link1' to={'/Features'}>Features</NavLink>

                                </li>
                                <li class="nav-item">
                                    <NavLink id='link1' to={'/Specs'}>Specs</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink id='link1'>Offers</NavLink>
                                </li>

                            </ul>
                            <div className="btn-1">
                                <button id='btn-1'>Build & Price <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="sliders">
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <div className="img"></div>
                        <Carousel.Caption>
                            <p style={{ fontSize: '13px', letterSpacing: '1px', position: 'absolute', top: '-300px', color: 'white' }}>THE 2024 NISSAN GT-R®</p>
                            <p style={{ fontSize: '55px', letterSpacing: '1px', position: 'absolute', top: '-290px' }}>Offers</p>
                            <p style={{ fontSize: '28px', letterSpacing: '1px', position: 'absolute', top: '-220px', color: 'white' }} >$121,090</p>
                            <p style={{ fontSize: '9px', letterSpacing: '1px', position: 'absolute', top: '-180px', color: 'white' }}>Starting At MSRP</p>
                            <p style={{ fontSize: '8px', position: 'absolute', top: '-160px', color: 'white' }}>As Shown $142,090 MSRP 2024 GT-R T-spec, other optional equipment shown, see dealer for details</p>
                            <p style={{ fontSize: '16px', letterSpacing: '0.5px', position: 'absolute', top: '-140px', color: 'white' }}>Offer Details <i class="fa-solid fa-greater-than" style={{ fontSize: '12px' }}></i> </p>
                            <button style={{ position: 'absolute', top: '-100px', zIndex: '500', left: '0px', width: '180px' }} id='btn6'>View Dealer Site  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            <button style={{ position: 'absolute', top: '-90px', zIndex: '500', left: '200px', height: '45px', width: '160px', }} id='btn9'>Build & Price   <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000} >
                        <div className="img1"></div>
                        <Carousel.Caption>
                            <p style={{ fontSize: '30px', position: 'absolute', top: '-320px', textAlign: 'start' }}>We’ll do the math, <br />you do the driving.</p>
                            <p style={{ fontSize: '15px', width: '450px', textAlign: 'start', letterSpacing: '1px', position: 'absolute', top: '-220px', color: 'rgb(196, 190, 190)' }}>We’re good with numbers so you don’t have to be. Use our Payment Estimator Tool to see just how easy it is to get into a new Nissan today.</p>
                            <p style={{ fontSize: '13px', letterSpacing: '0.5px', position: 'absolute', top: '-120px', color: 'white' }}>*Important Estimator Information  <i class="fa-solid fa-greater-than" style={{ fontSize: '11px' }}></i> </p>
                            <button style={{ position: 'absolute', top: '-95px', color: 'white', zIndex: '500', left: '0px', height: '40px', width: '160px' }} id='btn3'>Learn More   <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item interval={5000}>
                        <div className="img2"></div>
                        <Carousel.Caption>
                            <p style={{ fontSize: '14px', letterSpacing: '1px', position: 'absolute', top: '-300px', color: 'white' }}>FIND A LOCAL NISSAN DEALER</p>
                            <p style={{ fontSize: '30px', position: 'absolute', top: '-280px', textAlign: 'start' }}>DISCOVER YOUR LOCAL NISSAN <br /> DEALER</p>
                            <p style={{ fontSize: '13px', letterSpacing: '0.5px', position: 'absolute', top: '-150px', color: 'white' }}>LOCATE THE NISSAN DEALER NEAR YOUR AREA</p>
                            <input type="text" placeholder='Zip Code' id='input1' />
                            <SearchIcon style={{ position: 'absolute', top: '-112px', left: '22%', color: 'black', zIndex: '500', fontSize: '30px' }} />
                            <p style={{ fontSize: '9px', letterSpacing: '1px', position: 'absolute', top: '-75px', color: 'white' }}>Note: Nissan will not use your information for any purpose</p>


                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <div className="offers-div1">
                <div className="offers-child1 ">
                    <p data-aos="fade-left"
                        data-aos-duration="2000" data-aos-delay='200' style={{ fontSize: '29px', fontFamily: 'Nissan Regular", "Nissan Regular", Verdana, Arial, sans-serif', }}>2024 GT-R Deals,Special Offers, Incentives & Rebates</p>
                    <p data-aos="fade-left"
                        data-aos-duration="2000" data-aos-delay='300' style={{ fontSize: '15px', letterSpacing: '1px', marginTop: '-1%' }}>Contact your local dealer for offer information.</p>
                    <div className="main-div1">
                        <div className="offers-child2" data-aos="fade-up"
                            data-aos-duration="2000" data-aos-delay='200'>
                            <input type="text" placeholder='Zip Code' id='input2' />
                            <SearchIcon style={{ position: 'relative', left: '80%', top: '-34%', color: 'black', zIndex: '500', fontSize: '30px' }} />
                            <div className="location-child1">
                                <LocationOnIcon id='location1' />
                                <p style={{ fontSize: '13px' }}>Use My Location</p>
                            </div>
                            <div className="location-child2" data-aos="fade-down"
                                data-aos-duration="2000" data-aos-delay='300'>
                                <p>Year</p>
                                <div className="sumanth d-flex">
                                    <FiberManualRecordIcon />
                                    <p style={{ fontSize: '13px', paddingLeft: '2%', paddingTop: '1%' }}>2024</p>
                                </div>
                                <img style={{ paddingTop: '5%' }} src="https://www.nissanusa.com/offers/static/permalink/v1/1/21249/document/OfferHub.jpg?token=AFESPpmwhBmvzlvthgnhGO00hGQbk8ZtDCjyyy3iJlgftOiwgjOGgp93H10Qqxf5" alt="" />
                            </div>
                        </div>
                        <div className="offers-child3" style={{ paddingLeft: '1.5%' }} data-aos="flip-right" data-aos-duration="1000" data-aos-delay='200' >
                            <div className="2024-gtr d-flex" style={{ gap: '130px', paddingTop: '4%' }}>
                                <p style={{ fontSize: '14px', color: 'rgb(152, 151, 151)' }}>2024 GT-R</p>
                                <p style={{ fontSize: '12px', fontWeight: '600' }}>MSRP</p>
                            </div>
                            <p style={{ display: 'flex', fontSize: '40px', paddingTop: '2%' }}> <p style={{ fontSize: '25px' }}>$</p> 121,090</p>
                            <p style={{ fontSize: '10px', marginTop: '-7%' }}> Starting At MSRP</p>
                            <p style={{ fontSize: '9.5px' }}>As Shown $142,090 MSRP 2024 GT-R T-spec, other optional equipment shown, see dealer for details</p> <br />
                            <p style={{ fontSize: '14px', cursor: 'pointer', letterSpacing: '0.5px', color: 'black' }}>Offer Details <i class="fa-solid fa-greater-than" style={{ fontSize: '12px' }}></i> </p>
                            <button style={{ width: '180px' }} id='btn6'>Contact Dealer  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button> <br /> <br />
                            <button style={{ height: '45px', width: '180px', }} id='btn9'>Build & Price   <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="offers-div2">
                <div className="offers-child4">
                    <p data-aos="zoom-out-right" data-aos-duration="2000" data-aos-delay='200' style={{ fontSize: '30px', letterSpacing: '0.5px' }} >Local Nissan GT-R Dealers</p>
                    <div className="zip-code d-flex">
                        <div className="search1">
                            <input data-aos="zoom-out-left" data-aos-duration="2000" data-aos-delay='200' type="text" placeholder='Zip Code' id='input2' style={{ backgroundColor: 'rgba(230, 224, 224, 0.645)' }} />
                            <SearchIcon data-aos="zoom-out-left" data-aos-duration="2000" data-aos-delay='200' style={{ position: 'relative', left: '80%', top: '-13%', color: 'black', zIndex: '500', fontSize: '30px', }} />
                            <div className="location-child1" data-aos="zoom-out-down" data-aos-duration="2000" data-aos-delay='200'>
                                <LocationOnIcon id='location1' />
                                <p style={{ fontSize: '13px' }}>Use My Location</p>

                            </div>
                            <p data-aos="zoom-out-up" data-aos-duration="2000" data-aos-delay='200' style={{ fontSize: '13px', letterSpacing: '0.5px', padding: '5% 5%' }}>FIND A NISSAN DEALER NEAR ME</p>
                            <p data-aos="zoom-out-up" data-aos-duration="2000" data-aos-delay='200' style={{ fontSize: '35px', marginTop: '-9%', paddingLeft: '5%' }}>Get started</p>
                            <input data-aos="zoom-out-left" data-aos-duration="2000" data-aos-delay='200' type="text" placeholder='Zip Code' id='input2' style={{ backgroundColor: 'rgba(230, 224, 224, 0.645)', marginTop: '-4%' }} />
                            <SearchIcon data-aos="zoom-out-down" data-aos-duration="2000" data-aos-delay='200' style={{ position: 'relative', left: '80%', top: '-13%', color: 'black', zIndex: '500', fontSize: '30px', }} />
                            <p data-aos="flip-down" data-aos-duration="1000" data-aos-delay='200' style={{ fontSize: '9px', margin: '-9% 5%' }}>Note: Nissan will not use your information for any other <br /> purposes</p>
                        </div>
                    </div>
                </div>
                <a style={{ textDecoration: 'none' }} href="https://maps.app.goo.gl/jZankzT28MJdkoYB8?g_st=ic"><div data-aos="flip-left" data-aos-duration="2000" data-aos-delay='200' className="map-div">
                    <div className="box">
                        <p>TO SEE ALL THE NISSAN DEALERS INYOUR AREA, CLICK BELOW.</p>
                        <button style={{ width: '160px', height: '25px', fontSize: '11px' }} id='btn6'>View Interactive Map  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                    </div>
                </div></a>
            </div>
            <div className="offers-div3">
                <div className="form-div">
                    <p data-aos="fade-down" data-aos-duration="2000" data-aos-delay='200' style={{ fontSize: '32px' }}>Request A Quote</p>
                    <p data-aos="fade-down" data-aos-duration="2000" data-aos-delay='200' style={{ color: 'rgb(123, 120, 120)', wordSpacing: "-1px" }}>Choose Nissan and get our best finance deals, lease specials, and incentives across our entire lineup.</p>
                    <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay='200' style={{ fontSize: '23px', paddingTop: '2%', letterSpacing: '0.5px' }}>Contact Information</p>
                    <div className="inputs-div">
                        <div className="inputs1">
                              <div className="i-1">
                              <TextField data-aos="fade-down"
                                data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" data-aos-delay='200' id="outlined-basic" label="First Name*" variant="outlined" onChange={(e)=>(setFirstName(e.target.value))}  />
                                <p style={{color:'red',fontSize:'12px'}}>{errors.firstName}</p>
                              </div>
                            <div className="i-2">
                            <TextField data-aos="fade-down"
                                data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" data-aos-delay='200' id="outlined-basic" label="Last Name*" variant="outlined" />
                            </div>
                        </div>
                        <div className="inputs2">
                            <TextField data-aos="fade-down"
                                data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-delay='100' id="outlined-basic" label="Phone*" variant="outlined" />
                            <TextField data-aos="fade-down"
                                data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-delay='100' id="outlined-basic" label="Email*" variant="outlined" />
                        </div>

                    </div>
                    <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay='200' style={{ fontSize: '23px', paddingTop: '3%', letterSpacing: '0.5px' }}>Information for Dealer</p>
                    <div className="inputs-div">
                        <div className="inputs3">
                            <TextField data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay='200' id="outlined-basic-1" label="Zip Code*" variant="outlined" style={{ width: '358px' }} />
                            <TextField data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay='200' style={{ width: '358px' }}
                                id="outlined-basic-1"
                                select

                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                            >

                                <option>
                                    <p >Select a Dealership*</p>
                                </option>
                            </TextField>
                        </div>
                        <div className="inputs4">
                            <TextField data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay='200'  style={{ width: '745px', backgroundColor: 'white', borderRadius: '5px' }}
                                id="outlined-basic-2"
                                label="Comments for Dealer"
                                multiline
                                rows={4}
                            />
                        </div>
                        <p style={{ width: '745px', fontSize: '12px', marginLeft: '25.5%', textAlign: 'start', marginTop: '1%', color: ' rgb(42, 41, 41)' }}>I authorize Nissan and its dealers to contact me with marketing information by mail, email, and/or by calling or texting me at the phone number I have provided. I understand these calls or texts may use computer-assisted dialing and/or pre-recorded messages. I also understand that authorization is not required to complete the purchase or lease of any Nissan product.</p>
                        <div className="inputs5">
                            <button id='btn3' style={{ border: '1px solid black', marginLeft: '-25%', marginTop: '1%' }} onClick={validData}>Send to Dealer  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            <button id='btn4' data-aos="fade-left"
                                data-aos-duration="3000" data-aos-delay='300' style={{ backgroundColor: 'transparent', width: 'fitContent', height: 'fitContent', marginLeft: '0%' }}>Privacy Policy  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="offers-div4">
                <div  data-aos="flip-left" data-aos-duration="2000" data-aos-delay='200' className="offers-img">
                    <img src="https://static.nissandime.com/permalink/v1/1/24401/document/seocopy-top.jpg?token=la2pWw6ebQOz1gj7whueCaipDLzALFFCgfwheTfYtxsbhyE8eyci78au5P6Nrl3Y" alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay='200' className="offersChild-1" style={{ padding: '4% 10%' }}>
                    <p style={{ fontSize: '29px' }}>2024 GT-R Offer Details</p>
                    <p style={{ fontSize: '16px', color: 'rgb(152, 151, 159', marginTop: '-1.5%', letterSpacing: '0.5px' }}>Get big savings on GT-R with our best lease deals, specials, and incentives.</p>
                </div>
                <div className="offerschild-2">
                    <div className="offer-card" data-aos="fade-right" data-aos-duration="2000" data-aos-delay='200'>
                        <p id='offer-para'>Nissan Military Program</p>
                        <p id='offer-para1'>After all you’ve done to protect our country, you deserve the best. So we’re giving you big savings on top of all current offers. Just print your Military Program Certificate to get started and access your exclusive deals, lease specials, and incentives. Then head to your local Nissan store today. Eligibility requirements and other restrictions apply. See below for details.</p> <br />
                        <button>Learn More <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                    </div>
                    <div className="offer-card" data-aos="fade-down-right" data-aos-duration="2000" data-aos-delay='200'>
                        <p id='offer-para'>Nissan College Grad Program</p>
                        <p id='offer-para1'>Graduating from college pays off—right away. The Nissan College Grad Program turns your diploma into big savings and exclusive incentives. To unlock your special offers, print your College Grad Certificate today. Then visit to your local Nissan store for big savings on an Intelligent new ride. Eligibility requirements and other restrictions apply. To get started, click for details below.</p> <br />
                        <button>Learn More <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                    </div>
                    <div className="offer-card" data-aos="fade-down-left" data-aos-duration="2000" data-aos-delay='200'>
                        <p id='offer-para'>Nissan Service Offers & Coupons</p>
                        <p id='offer-para1'>Keep your Nissan rolling with our best service deals. Discover our latest service offers, available only at your local Nissan store. Nissan factory-trained technicians and genuine Nissan parts make maintaining your vehicle a worry-free experience. Learn about complimentary inspections, claim coupons, and schedule a service appointment for your vehicle.</p> <br />
                        <button>Learn More <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                    </div>
                </div>
            </div>
            <div className="offer-div5">
                <div className="offer-box">
                    <div className="offer-img2" data-aos="fade-up-left" data-aos-duration="2000" data-aos-delay='200'>
                        <p style={{ fontSize: "32px", letterSpacing: "1px" }}>GT-R Sales Events, Sweepstakes & Special <br /> Promotions</p>
                        <p style={{ marginTop: '-1.5%', fontSize: '13px', letterSpacing: '1px' }}>Lease a new GT-R today</p>
                        <p style={{ width: '760px', fontSize: '15px', letterSpacing: '0.5px', paddingTop: '4%', color: 'rgb(154, 151, 151)' }}>Take advantage of sales events and monthly specials to save big on leasing the GT-R you want. Simply choose the offer you want from our lease deals, specials and amazing incentives to start saving big on your new GT-R.</p>
                        <button>Learn More <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                    </div>
                    <div className="offer-img1">
                        <img data-aos="fade-down-right" data-aos-duration="2000" data-aos-delay='200' src="https://static.nissandime.com/permalink/v1/1/24437/document/seocopy-1col.jpg?token=C4wLcIONnu6k74agowG2CAcO7FZ7L1W7ZLbPTR1snEwFyC5XMdahC6Umr6oeIK7d" alt="" />
                    </div>
                </div>

            </div>
            <div className="offer-div5">
                <div className="offer-box1">
                    <div className="offer-img2" data-aos="flip-up" data-aos-duration="2000" data-aos-delay='200' >
                        <p style={{ fontSize: "32px", letterSpacing: "1px" }}>Financing & Leasing</p>
                        <p style={{ marginTop: '-1.5%', fontSize: '17px', letterSpacing: '0.5px', color: 'rgb(154, 151, 151)', width: '600px' }}>Found the Nissan you're after? Take the next step and discover just how easy it is to get behind the wheel today. These online tools allow you to customize your purchase experience while exploring which options work best for you.</p>
                        <div className="o-box2 d-flex pt-5" style={{ gap: '30px' }}>
                            <div className="o-b1" data-aos-duration="2000" data-aos-delay='200' data-aos="zoom-out-up">
                                <p style={{ fontSize: '19px', letterSpacing: '1px' }}>Finance your next vehicle</p>
                                <p style={{ marginTop: '-1.5%', fontSize: '16px', letterSpacing: '0.5px', color: 'rgb(154, 151, 151)', width: '300px' }}>Take advantage of Nissan's customizable financing options.</p>
                                <button>Learn More <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            </div>
                            <div className="o-b2" data-aos-duration="2000" data-aos-delay='200' data-aos="zoom-out">
                                <p style={{ fontSize: '19px', letterSpacing: '1px' }}>Payment Calculator</p>
                                <p style={{ marginTop: '-1.5%', fontSize: '16px', letterSpacing: '0.5px', color: 'rgb(154, 151, 151)', width: '300px' }}>Use this tool to help budget your costs on your Nissan vehicle.</p>
                                <button>Calculate Payments  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="offer-img2">
                        <img data-aos="flip-up" data-aos-duration="1000" data-aos-delay='100'  src="https://static.nissandime.com/permalink/v1/1/24403/document/seccopy-2col.jpg?token=3XQ3sSFVYXYKkX8ydwwq4ebBBIam7Z2Kk1rSn76iIB879q1xXaVGgYzrKFzW8BUs" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
      
}


