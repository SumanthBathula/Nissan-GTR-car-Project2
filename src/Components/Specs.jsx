import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField } from '@mui/material';


function Specs() {
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

    return (
        < >
            <div className="navbarDiv4">
                <nav class="navbar navbar-expand-lg bg-transparent" style={{ borderBottom: '1px solid rgba(245, 245, 245, 0.427)', }}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src="https://www.nissanusa.com/content/dam/Nissan/us/Navigation/sitesimp/nissan-logo-white.svg" style={{ marginTop: '-22%', marginLeft: '1%' }} alt="" /></a>
                        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i class="fa-solid fa-bars-staggered"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav" >
                            <ul class="navbar-nav" >
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
                        <p style={{ paddingLeft: '1%', fontSize: '14px', paddingTop: '0.5%' }}>2024 GT-R</p>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i class="fa-solid fa-bars-staggered"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{ marginTop: '-20px', }}>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
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
                                    <NavLink id='link1'>Specs</NavLink>
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
                    <p>2024 NISSAN <h1 style={{ lineHeight: '20px', paddingTop: '12%' }}>GT-R<p style={{ position: 'relative', left: '33%', top: '-45px' }}>®</p>Specs &Trims </h1></p>
                </div>
            </div>
            <div className="specs-div1">
                <div className="specs-trims">
                    <p style={{ fontSize: "35px", letterSpacing: '0.5px' }}>2024 Nissan GT-R Specs & Trims</p>
                    <div className="specs-boxess d-flex" style={{ gap: '10px' }}>
                        <div className="specs-box1">
                            <p style={{ fontSize: '14px', fontWeight: '550' }}>2024 GT-R</p>
                            <TextField data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay='200' style={{ width: '290px' }}
                                id="outlined-basic"
                                select
                                lable="Select a Grade"
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                            >

                                <option>
                                    <p >Premium</p>

                                </option>
                                <option><p>T-spec</p>
                                </option>
                                <option><p>NISMO</p></option>
                            </TextField>
                            <TextField data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay='200' style={{ width: '290px', marginTop: '2%' }}
                                id="outlined-basic"
                                select
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                            >


                                <option><p>ATTESA E-TS® All-Wheel Drive</p>
                                </option>
                                <option>
                                    <p >Select a Version</p>

                                </option>
                            </TextField>
                            <img style={{ marginTop: '-8%' }} src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/vehicle-profile-assets/2024/version-2024-gt-r-premium-solid-red.png.ximg.l_4_m.smart.png" alt="" />
                            <p style={{ fontSize: '10px', letterSpacing: '0.5px' }}>STARTING AT</p>
                            <p style={{ fontSize: "25px", marginTop: '-4%' }}>$121,090*</p> <br />
                            <button style={{ height: '45px', width: '280px', }} id='btn9'>Build & Price   <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            <button style={{ width: '280px', marginTop: '3%' }} id='btn6'>Search Inventory  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>

                        </div>
                        <div className="specs-box1 addBox">
                            <p style={{ fontSize: '14px', fontWeight: '550' }}>2024 GT-R</p>
                            <TextField data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay='200' style={{ width: '290px' }}
                                id="outlined-basic"
                                select
                                lable="Select a Grade"
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option><p>T-spec</p>
                                </option>
                                <option>
                                    <p >Premium</p>

                                </option>
                                <option><p>NISMO</p></option>
                            </TextField>
                            <TextField data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay='200' style={{ width: '290px', marginTop: '2%' }}
                                id="outlined-basic"
                                select
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                            >


                                <option><p>ATTESA E-TS® All-Wheel Drive</p>
                                </option>
                                <option>
                                    <p >Select a Version</p>

                                </option>
                            </TextField>
                            <img style={{ marginTop: '-8%' }} src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/vehicle-profile-assets/2024/version-2024-gt-r-t-spec-millennium-jade.png.ximg.l_4_m.smart.png" alt="" />
                            <p style={{ fontSize: '10px', letterSpacing: '0.5px' }}>STARTING AT</p>
                            <p style={{ fontSize: "25px", marginTop: '-4%' }}>$141,090  *</p> <br />
                            <button style={{ height: '45px', width: '280px', }} id='btn9'>Build & Price   <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                            <button style={{ width: '280px', marginTop: '3%' }} id='btn6'>Search Inventory  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>

                        </div>
                        <div className="specs-box1">
                            <p style={{ fontSize: '14px', fontWeight: '550' }}>2024 GT-R</p>
                            <TextField data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay='200' style={{ width: '290px' }}
                                id="outlined-basic"
                                select
                                lable="Select a Grade"
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                            >

                                <option>
                                    <p >Select a Grade</p>

                                </option>
                                <option><p>Premium</p>
                                </option>
                                <option><p >T-spec</p>
                                </option>
                                <option><p>NISMO</p></option>
                            </TextField>
                            <TextField data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay='200' style={{ width: '290px', marginTop: '2%' }}
                                id="outlined-basic"
                                select
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option>
                                    <p >Select a Version</p>

                                </option>
                            </TextField>

                        </div>
                    </div>
                </div>
            </div>
            <div className="nissan-videos">
                <div className="nissan-div1">
                    <p data-aos="flip-left" data-aos-delay='200' style={{ fontSize: '11px', letterSpacing: '1.5px', paddingLeft: '11.5%' }}>2024 NISSAN GT-R VIDEOS</p>
                    <p data-aos="flip-left" data-aos-delay='200' style={{ fontSize: '30px', letterSpacing: '0.5px', paddingLeft: '11.5%', fontWeight: '500' }}>NISMO – ultimate Nissan performance</p> <br />
                    <div className="nissan-child1">
                        <div className="child1" style={{ textAlign: 'center' }}>
                            <iframe data-aos="flip-up" data-aos-delay='200' width="1170" height="658" src="https://www.youtube.com/embed/o19Og9Um7s8?si=jS-cR03S8-pVMQQa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>
                    </div>
                    <div className="child2 d-flex" style={{ gap: '25px', paddingTop: '1%', justifyContent: 'center' }}>
                        <div className="frame1">
                            <iframe data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" data-aos-delay='200' width="573" height="469" src="https://www.youtube.com/embed/POwdR_1UQhY?si=eQa9VpIKrUhQY0Ux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="frame2">
                            <iframe data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" data-aos-delay='200' width="573" height="469" src="https://www.youtube.com/embed/7dU5TRwaHeo?si=U-atpK0tBpvkh0my" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <p style={{ fontSize: '28px', textAlign: 'center', paddingTop: '4%' }} data-aos="flip-right" data-aos-delay='200' >Keep Exploring</p>
                </div>

            </div>
            <div className="container" style={{ paddingLeft: '4%' }}>
                <div className="c-div1" data-aos="fade-right" data-aos-delay='200'>
                    <p style={{ fontSize: '11px', letterSpacing: '1.5px' }}>DON'T MISS A THING</p>
                    <h2 style={{ fontSize: '32px', letterSpacing: '1.5px' }}>Stay updated on the go <br /> the Multi-Function Display</h2> <br />
                    <p style={{ fontSize: '15px', letterSpacing: '1.5px', }} id='connect'>The centerpiece of the instrument panel is a video game-inspired Multi-Function Display that tracks car dynamics—created in collaboration with Polyphony Digital®, makers of the Gran Turismo® electronic game. [*]</p> <br />
                    <button id='btn5' style={{ width: '250px', height: '40px', }}>View All Interior Features   <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button> <br />
                </div>
                <div style={{ width: '63%', paddingTop: '4%', }} data-aos="fade-left" data-aos-delay='200' >
                    <Accordion defaultExpanded>
                        <AccordionSummary style={{ border: 'none' }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"

                        >
                            <Typography style={{ color: 'black', fontSize: '19px' }}>Vital engine information</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>
                                Set up a custom view to keep an eye on the engine by viewing turbo boost, oil temperature, and oil pressure.</Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gtr-multi-function-display-showing-vital-engine-information.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ border: 'none' }}
                        >
                            <Typography style={{ color: 'black', fontSize: '19px' }}>Lateral acceleration</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>Monitor acceleration Gs, turbo boost, and throttle position.</Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gtr-multi-function-display-lateral-acceleration.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ border: 'none' }}
                        >
                            <Typography style={{ color: 'black', fontSize: '19px' }}>Temperature and pressure</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>Ideal for heavy-duty driving, monitor coolant, oil, and transmission fluid temperatures.</Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gtr-multi-function-display-temperature-pressure.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ border: 'none' }}
                        >
                            <Typography style={{ color: 'black', fontSize: '19px' }}>Chassis dynamics</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>Keep track of chassis dynamics, including cornering, overall Gs, and brake pedal usage.</Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gt-r-multi-function-display-chassis-dynamics.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ border: 'none' }}
                        >
                            <Typography style={{ color: 'black', fontSize: '18px' }}>Stopwatch/lap time</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'rgb(134, 130, 130)' }}>The factory preset stopwatch is activated by steering wheel controls, so you can keep your hands on the wheel</Typography> <br />
                            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/features/accordion/2024-nissan-gtr-multi-function-display-stopwatch-lap-time.jpg" width={'100%'} alt="" />
                        </AccordionDetails>
                    </Accordion>
                    <br />

                </div>
            </div>
        </>
    )
}


export default Specs
