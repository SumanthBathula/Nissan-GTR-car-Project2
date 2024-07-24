import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp, { useCountUp } from 'react-countup';


function Features() {

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 10000,
        
      });
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        currentSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
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
    const gtrData = [
        {
            "img": 'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gtr-closeup-v6-engine-two-turbochargers.jpg',
            "power": "565",
            "para1": "Horsepower [*]",
            "power1": "467",
            "para2": "Lb-ft of Torque [*]",
            "para3": "Instead of a large engine thirsty for fuel, the GT-R is powered by an ideally-sized, twin-turbocharged 3.8-liter V6—hand-assembled by master craftsmen and built with immense strength."
        },
        {
            "img": "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gt-r-side-view-cutaway-show-midship-engine-chassis.jpg",
            "power": "Aerodynamics",
            "power4": "Advanced design",
            "para3": "Relentless tuning of GT-R’s aerodynamics includes new front and rear fascias, plus a new rear spoiler to increase downforce without adding drag. The result? An incredibly clean drag coefficient of just 0.26 Cd. "
        },
        {
            "img": "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gt-r-white.jpg",
            "power": "AWD",
            "power4": "Handling for all seasons",
            "para3": "The advanced ATTESA ET-S® drive system allows for a variable torque distribution between the front and rear axles, offering the feel and response of rear-wheel drive with the confidence of all-wheel drive."
        },
        {
            "img": "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gtr-paddle-shifter.jpg",
            "power": "6-Speed",
            "power4": "Dual-clutch transmission",
            "para3": "Shift how you drive. The GT-R’s 6-speed, dual-clutch transmission employs separate clutches for the odd-numbered and even-numbered gears, making gear changes lightning quick when in R-mode."
        },
        {
            "img": "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gtr-3-switched-tuned-to-gtr-special-mode.jpg",
            "power": "3",
            "power4": "mode system",
            "para3": "Three switches allow for on-the-fly adjustments of specific performance parameters for the transmission, suspension, and Vehicle Dynamic Control system. Choose from R-Mode, Normal Mode, and Special Modes. [*]"
        }

    ]
    return (
        <>
            <div className="navbarDiv3">
                <nav class="navbar navbar-expand-lg bg-transparent" style={{ borderBottom: '1px solid rgba(245, 245, 245, 0.427)' }}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src="https://www.nissanusa.com/content/dam/Nissan/us/Navigation/sitesimp/nissan-logo-white.svg" style={{marginTop:'-22%',marginLeft:'1%'}} alt="" /></a>
                        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i class="fa-solid fa-bars-staggered"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Vechicles</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Shop</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Discover Nissan</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Owners</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Dealers</a>
                                </li>
                                <button id='btn'>Build & Price <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav class="navbar navbar-expand-lg bg-body-transparent navbar-2" style={{ paddingTop: '2%' }}>
                    <div class="container-fluid" className={fix ? 'navbar-2 fixed' : 'navbar-2'}>
                        <p style={{ paddingLeft: '1%', fontSize: '14px',paddingTop:'0.5%' }}>2024 GT-R</p>
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
                                    <NavLink id='link1'>Features</NavLink>

                                </li>
                                <li class="nav-item">
                                    <NavLink id='link1' to={'/Specs'}>Specs</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink id='link1' to={'/Offers'}>Offers</NavLink>
                                </li>

                            </ul>
                            <div className="btn-1">
                                <button id='btn-1'>Search Inventory <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="GTR">
                    <p>2024 NISSAN <h1 style={{ lineHeight: '20px', paddingTop: '12%' }}>GT-R<p style={{ position: 'relative', left: '55%', top: '-45px' }}>®</p> Features </h1></p>
                </div>
            </div>
            <div className="features-div1">
                <div className="info" data-aos="fade-right" data-aos-delay='200'>
                    <p style={{ fontSize: '11px', letterSpacing: '1.5px' }}>PERFORMANCE, ENGINE & AWD</p>
                    <h3 style={{ fontSize: '27px', letterSpacing: '1.5px' }}>Always moving forward</h3> <br />
                    <p style={{ fontSize: '14px', letterSpacing: '1.5px' }}>A supercar that challenges convention at every turn.</p>
                </div>
                <button data-aos="fade-left" data-aos-delay='300' id='btn5' style={{ position: 'relative', left: '76%', top: '-15%', width: '210px', height: '40px' }}>Compare Competitors   <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                <div className="features-child1">
                    <Slider {...settings}>
                        {
                            gtrData.map((Data) => {
                                return (

                                    <div className="features-cards1" data-aos="flip-down" data-aos-delay='300'>
                                        <div className="img-div1">

                                            <img src={Data.img} alt="" />
                                            <div className="card-div2">
                                                <div className="cc">
                                                    <div className="power-div1">
                                                        <h2>{Data.power} </h2>
                                                        <h6>{Data.para1}</h6>
                                                    </div>
                                                    <div className="power-div2">
                                                        <h2>{Data.power1}</h2>
                                                        <h6>{Data.para2}</h6>
                                                    </div>
                                                </div>
                                                <h6>{Data.power4}</h6>
                                                <p>{Data.para3}</p>
                                            </div>

                                        </div>
                                    </div>

                                )
                            })
                        }
                    </Slider>
                </div>


            </div>
            <div className="container">
                <div className="c-div1" data-aos="fade-right" data-aos-delay='200'>
                    <p style={{ fontSize: '11px', letterSpacing: '1.5px' }}>CONNECTIVITY</p>
                    <h2 style={{ fontSize: '32px', letterSpacing: '1.5px' }}>Putting the world at your <br /> fingertips</h2> <br />
                    <p style={{ fontSize: '15px', letterSpacing: '1.5px', }} id='connect'>NissanConnect® Services makes it easy to stay connected, with compatible smartphone connectivity, intuitive ways to access information, advanced navigation, SiriusXM Travel Link and available wireless connectivity features—all on the 8" touch-screen. [*][*][*][*]
                    </p> <br />
                    <button id='btn5' style={{ width: '250px', height: '40px', }}>Visit GT-R NissanConnect   <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button> <br />
                    <button style={{ width: '300px', marginTop: '4%' }} id='btn4'>Download NissanConnect® Brochure <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                </div>
                <div style={{ width: '63%', paddingTop: '5%',}} data-aos="fade-left" data-aos-delay='200'>
                    <Accordion defaultExpanded >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{border:'none'}}
                        >
                            <Typography style={{ color: 'black', fontSize: '19px' }}>NissanConnect® Services</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>
                                Enjoy easy access to emergency response services, remote connectivity features, customizable alerts, and more. [*]

                            </Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gt-r-detail-phone-displaying-nissanconnect-services-app.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{border:'none'}}
                        >
                            <Typography style={{ color: 'black', fontSize: '19px' }}>Apple CarPlay® integration</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>People to see? Places to be? Just ask Siri®. Equipped with Siri® voice control, Apple CarPlay® brings on board your contacts, favorite messaging apps, Apple Music® playlists, Apple Maps, and more. Simply plug in your compatible iPhone® and go.[*] [*][*]</Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gt-r-detail-apple-carplay-maps.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{border:'none'}}
                        >
                            <Typography style={{ color: 'black', fontSize: '19px' }}>Nissan Navigation System</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>
                                Navigate any city like a local with an 8" color multi-touch screen, complete with 3D map views for select cities and easy-to-read graphics.[*]</Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gtr-navigation-system-screen.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{border:'none'}}
                        >
                            <Typography style={{ color: 'black', fontSize: '19px' }}>Bose Premium Audio System</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>Designed exclusively for GT-R, the 11-speaker Bose audio system uses dual subwoofers in the trunk and 9 speakers in the cabin, with separate amplifiers for each. The rear-center woofers and door speakers are mounted in rigid aluminum die-cast panels that improve sound quality, especially tight bass sounds.
                                [*]
                                Plus, it's equipped with active noise cancellation, active sound enhancement and advanced noise reduction.</Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gt-r-interior-view-rear-seats-subwoofer-for-bose-premium-audio-system.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{border:'none'}}
                        >
                            <Typography style={{ color: 'black', fontSize: '18px' }}>Display Commander</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>You can control Nissan GT-R’s 8" touch-screen using the Display Commander. It lets you toggle up and down and side to side, rotate, scroll, and control your infotainment system.
                                [*]
                            </Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gtr-display-commander.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <br />

                </div>
            </div>
            <div className="c-div2">
                <div className="container" style={{ paddingTop: '6%', gap: '1px', }}>
                    <div className="img-c-div3">
                        <img data-aos-delay='200' data-aos="fade-left" src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gtr-interior-seats-subwoofers-system-bose-premium-audio-system.jpg" id='supercar-img' alt="" />
                    </div>
                    <div className="c-div4" data-aos-delay='200' data-aos="fade-right">
                        <p style={{ fontSize: '11px', letterSpacing: '1.5px' }}>INTERIOR & CARGO</p>
                        <h style={{ fontSize: '27px', letterSpacing: '1px' }}>Immersing you in the drive</h>
                        <div className="c-div5">
                            <div className="supercar c c1" id='activeDiv' style={{ borderBottom: '2px solid brown' }} onClick={Click01}>
                                <p>A supercar that seats four</p>
                            </div>
                            <div className="supercar c c2" onClick={Click02}>
                                <p>Luxurious interior features

                                </p>
                            </div>
                            <div className="supercar c c3" onClick={Click03}>
                                <p>Sports seats</p>
                            </div>

                        </div>
                        <p id='along-para'>Want to drop off the kids at school or bring friends along for the ride? No problem. With a usable rear seat, the GT-R has room for four, bringing a whole new level of practicality. There's even an 8.8-cubic foot trunk.</p>
                    </div>

                </div>
            </div>
            <div className="Accessories">

                <div className="Access-div" data-aos="flip-right" data-aos-delay='300'>
                    <p style={{ fontSize: '11px', letterSpacing: '1.5px' }}>ACCESSORIES</p> <br />
                    <h style={{ fontSize: '27px', letterSpacing: '1px' }}>Accessories to unleash GT-R thrills</h> <br /> <br />
                    <p style={{ letterSpacing: '1px', color: 'rgb(134, 130, 130)' }}>Rev up your GT-R with genuine Nissan accessories. From enhancing the interior of your supercar to gearing up for unexpected adventures, customize your GT-R for every heart-racing journey.</p> <br />
                    <button id='btn5' style={{ width: '160px', height: '40px', }}>Build & Price  <i i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>


                </div>
                <div className="Access-div2 d-flex p-5" style={{justifyContent:'center',gap:'20px'}}>
                    <div className="kit">
                        <div className="kit1" data-aos="flip-up" data-aos-delay='300'>
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gtr-carpeted-floor-mats.jpg" alt="" />
                        </div>
                        <div className="kit2" data-aos="flip-up" data-aos-delay='300'>
                            <h style={{ fontSize: '22px', letterSpacing: '1px' }}>Carpeted Floor Mats Package</h>
                            <p style={{ fontSize: '11px', letterSpacing: '1.5px' }}>MSRP $515 [*]</p>
                            <p style={{fontSize:'11px',width:'400px',wordSpacing: '2px'}}>All Nissan Carpeted Floor Mats are made of high-quality material and are custom-fit. Play it safe with a First-Aid Kit featuring VELCRO® backing so it can secure to any carpeted surface
                                [*]
                                and say goodbye to broken and frayed cables with the USB Charging Cable Set
                                [*]
                                . Plus, protect your important owner’s manuals and papers with the GT-R Owner’s Manual Portfolio. Factory-installed. </p>
                        </div>
                    </div>
                    <div className="kit">
                        <div className="kit1" data-aos="flip-up" data-aos-delay='300'>
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-standard-tool-kit.jpg" alt="" />
                        </div>
                        <div className="kit2" data-aos="flip-up" data-aos-delay='300'>
                            <h style={{ fontSize: '22px', letterSpacing: '1px' }}>Standard Tool Kit</h>
                            <p style={{ fontSize: '11px', letterSpacing: '1.5px' }}>MSRP $760
                                [*]
                            </p>
                            <p style={{fontSize:'11px',width:'400px',wordSpacing: '2px'}}>This 7-piece Standard Tool Kit features a flathead screwdriver, Phillips screwdriver, pliers, two box-end wrenches, a flashlight, and a pair of gloves. It comes in a durable and stylish leather case that can easily be stored below the front-passenger’s footwell. Dealer installed. </p>
                        </div>
                    </div>
                    <div className="kit">
                        <div className="kit1" data-aos="flip-up" data-aos-delay='300'>
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gtr-emergency-road-kit.jpg" alt="" />
                        </div>
                        <div className="kit2" data-aos="flip-up" data-aos-delay='300'>
                            <h style={{ fontSize: '22px', letterSpacing: '1px' }}>Emergency Road Kit</h>
                            <p style={{ fontSize: '11px', letterSpacing: '1.5px' }}>MSRP $68 [*]

                            </p>
                            <p style={{fontSize:'11px',width:'400px',wordSpacing: '2px'}}>Everything you need for life’s little uncertainties. Basic roadside emergency supplies in a zippered nylon bag, including heavy-duty jumper cables, emergency reflective triangle, flashlight with batteries and hands-free stand, duct tape, two screwdrivers, battery terminal cleaner, and compact thermal blanket. Dealer installed. </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
function Click02() {
    let superCar = document.getElementById('supercar-img')
    let alongPara = document.getElementById('along-para')
    let btn1 = document.querySelector(".c1")
    let btn2 = document.querySelector(".c2")
    let btn3 = document.querySelector(".c3")
    superCar.src = "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gtr-interior-view-nappa-leather-wrapped-dash.jpg"
    alongPara.textContent = "Consider the richness of the GT-R's premium interior. Available Semi-aniline leather appointments, a Nappa leather-wrapped dash, with precision-touch vents and handcrafted carbon-fiber trim to leave you breathless."
    btn2.style.borderBottom = "2px solid brown"
    btn1.style = "none"
    btn3.style = "none"
}
function Click03() {
    let superCar = document.getElementById('supercar-img')
    let alongPara = document.getElementById('along-para')
    let btn1 = document.querySelector(".c1")
    let btn2 = document.querySelector(".c2")
    let btn3 = document.querySelector(".c3")
    let activeDiv = document.getElementById('activeDiv')
    superCar.src = "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gt-r-interior-view-sport-seats-leather-appointments.jpg"
    alongPara.textContent = "Deeply bolstered front sport seats and 8-way adjustability promise to hold you firm whether on tracks or streets, even during aggressive cornering [*] , while GT-R’s rear seats mean everyday practicality."
    btn3.style.borderBottom = "2px solid brown"
    btn1.style = "none"
    btn2.style = "none"
}
function Click01() {
    let superCar = document.getElementById('supercar-img')
    let alongPara = document.getElementById('along-para')
    let btn1 = document.querySelector(".c1")
    let btn2 = document.querySelector(".c2")
    let btn3 = document.querySelector(".c3")
    superCar.src = "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/carousel/2024-nissan-gtr-interior-seats-subwoofers-system-bose-premium-audio-system.jpg"
    alongPara.textContent = "Want to drop off the kids at school or bring friends along for the ride? No problem. With a usable rear seat, the GT-R has room for four, bringing a whole new level of practicality. There's even an 8.8-cubic foot trunk."
    btn1.style.borderBottom = "2px solid brown"
    btn3.style = "none"
    btn2.style = "none"
}
export {
    Features,
}