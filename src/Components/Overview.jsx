import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp, { useCountUp } from 'react-countup';
function Overview() {
     useCountUp({
          ref: 'counter',
          end: 1234567,
          enableScrollSpy: true,
          scrollSpyDelay: 10000,

     });
     function click1() {
          let myImg = document.getElementById('img1')
          let myPara = document.getElementById('para4')
          let myClickOne = document.getElementById('clickTwo')
          let myClickTwo = document.getElementById('clickOne')
          let myClickThree = document.getElementById('clickThree')
          myImg.src = "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/carousel/2024-nissan-gt-r-v6-engine-two-turbochargers.jpg"
          myPara.textContent = "The 3.8-liter twin-turbocharged engine, built with immense strength, produces a prodigious 565 hp and an equally immense 467 lb-ft of torque. [*]"
          myClickOne.style.borderBottom = "2px solid brown"
          myClickTwo.style.borderBottom = "none"
          myClickThree.style.borderBottom = "none"
     }
     function click2() {
          let myImg = document.getElementById('img1')
          let myPara = document.getElementById('para4')
          let myClickTwo = document.getElementById('clickOne')
          let myClickOne = document.getElementById('clickTwo')
          let myClickThree = document.getElementById('clickThree')
          myImg.src = "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/carousel/2024-nissan-gt-r-aerodynamics.jpg"
          myPara.textContent = "The 2024 GT-R features a redesigned front bumper, front lip, and canards. At the rear, bumper sides and a revised rear spoiler help the GT-R add downforce without increasing drag."
          myClickTwo.style.borderBottom = "2px solid brown"
          myClickOne.style.borderBottom = "none"
          myClickThree.style.borderBottom = "none"
     }
     function click3() {
          let myImg = document.getElementById('img1')
          let myPara = document.getElementById('para4')
          let myClickThree = document.getElementById('clickThree')
          let myClickTwo = document.getElementById('clickOne')
          let myClickOne = document.getElementById('clickTwo')
          myImg.src = "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/carousel/2024-nissan-gt-r-white.jpg"
          myPara.textContent = "With one of the most advanced All-Wheel Drive and Vehicle Dynamic Control systems ever used in a road car, you get feel and response of rear-wheel drive with the confidence of all-wheel drive.[*]"
          myClickThree.style.borderBottom = "2px solid brown"
          myClickOne.style.borderBottom = "none"
          myClickTwo.style.borderBottom = "none"
     }
     function img1() {
          let gtrImg = document.getElementById('gtrColor')
          let gtrColor = document.getElementById('colorGtr')
          gtrImg.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&w=8200&h=5000&x=900&y=1000&vehicle=8_R35&paint=A54&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
          gtrColor.textContent = "Solid Red"
          let color1 = document.getElementById('chooseColor1')
          let color2 = document.getElementById('chooseColor2')
          let color3 = document.getElementById('chooseColor3')
          let color4 = document.getElementById('chooseColor4')
          let color5 = document.getElementById('chooseColor5')
          let color6 = document.getElementById('chooseColor6')
          color1.style.width = "30px"
          color1.style.border = "1px solid black"
          color1.style.borderRadius = "10%"
          color2.style = "none"
          color3.style = "none"
          color4.style = "none"
          color5.style = "none"
          color6.style = "none"
     }
     function img2() {
          let gtrImg = document.getElementById('gtrColor')
          let gtrColor = document.getElementById('colorGtr')
          gtrImg.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&w=8200&h=5000&x=900&y=1000&vehicle=8_R35&paint=RCB&fabric=X&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,14_H,SHADOW_ON,PI_ON,PE_ON,2024"
          gtrColor.textContent = "Bayside Blue [[2024_GT_R_408]]"
          let color2 = document.getElementById('chooseColor2')
          let color1 = document.getElementById('chooseColor1')
          let color3 = document.getElementById('chooseColor3')
          let color4 = document.getElementById('chooseColor4')
          let color5 = document.getElementById('chooseColor5')
          let color6 = document.getElementById('chooseColor6')
          color2.style.width = "30px"
          color2.style.border = "1px solid black"
          color2.style.borderRadius = "10%"
          color1.style = "none"
          color3.style = "none"
          color4.style = "none"
          color5.style = "none"
          color6.style = "none"
     }
     function img3() {
          let gtrImg = document.getElementById('gtrColor')
          let gtrColor = document.getElementById('colorGtr')
          gtrImg.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&w=8200&h=5000&x=900&y=1000&vehicle=8_R35&paint=GAG&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
          gtrColor.textContent = "Jet Black Pearl"
          let color3 = document.getElementById('chooseColor3')
          let color1 = document.getElementById('chooseColor1')
          let color4 = document.getElementById('chooseColor4')
          let color5 = document.getElementById('chooseColor5')
          let color6 = document.getElementById('chooseColor6')
          let color2 = document.getElementById('chooseColor2')
          color3.style.width = "30px"
          color3.style.border = "1px solid black"
          color3.style.borderRadius = "10%"
          color2.style = "none"
          color1.style = "none"
          color4.style = "none"
          color5.style = "none"
          color6.style = "none"
     }
     function img4() {
          let gtrImg = document.getElementById('gtrColor')
          let gtrColor = document.getElementById('colorGtr')
          gtrImg.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&w=8200&h=5000&x=900&y=1000&vehicle=8_R35&paint=KAD&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
          gtrColor.textContent = "Gun Metallic"
          let color4 = document.getElementById('chooseColor4')
          let color3 = document.getElementById('chooseColor3')
          let color1 = document.getElementById('chooseColor1')
          let color5 = document.getElementById('chooseColor5')
          let color6 = document.getElementById('chooseColor6')
          let color2 = document.getElementById('chooseColor2')
          color4.style.width = "30px"
          color4.style.border = "1px solid black"
          color4.style.borderRadius = "10%"
          color2.style = "none"
          color1.style = "none"
          color3.style = "none"
          color5.style = "none"
          color6.style = "none"
     }
     function img5() {
          let gtrImg = document.getElementById('gtrColor')
          let gtrColor = document.getElementById('colorGtr')
          gtrImg.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&w=8200&h=5000&x=900&y=1000&vehicle=8_R35&paint=KAB&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
          gtrColor.textContent = "Super Silver QuadCoat [*]"
          let color5 = document.getElementById('chooseColor5')
          let color4 = document.getElementById('chooseColor4')
          let color3 = document.getElementById('chooseColor3')
          let color1 = document.getElementById('chooseColor1')
          let color6 = document.getElementById('chooseColor6')
          let color2 = document.getElementById('chooseColor2')
          color5.style.width = "30px"
          color5.style.border = "1px solid black"
          color5.style.borderRadius = "10%"
          color2.style = "none"
          color1.style = "none"
          color4.style = "none"
          color3.style = "none"
          color6.style = "none"
     }
     function img6() {
          let gtrImg = document.getElementById('gtrColor')
          let gtrColor = document.getElementById('colorGtr')
          gtrImg.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&w=8200&h=5000&x=900&y=1000&vehicle=8_R35&paint=QAB&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
          gtrColor.textContent = "Pearl White TriCoat"
          let color6 = document.getElementById('chooseColor6')
          let color4 = document.getElementById('chooseColor4')
          let color3 = document.getElementById('chooseColor3')
          let color1 = document.getElementById('chooseColor1')
          let color5 = document.getElementById('chooseColor5')
          let color2 = document.getElementById('chooseColor2')
          color6.style.width = "30px"
          color6.style.border = "1px solid black"
          color6.style.borderRadius = "10%"
          color2.style = "none"
          color1.style = "none"
          color4.style = "none"
          color3.style = "none"
          color5.style = "none"
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
     return (
          <>
               <div className="navbarDiv">
                    <nav class="navbar navbar-expand-lg bg-transparent" style={{ borderBottom: '1px solid rgba(245, 245, 245, 0.427)' }}>
                         <div class="container-fluid">
                              <a class="navbar-brand" href="#"><img src="https://www.nissanusa.com/content/dam/Nissan/us/Navigation/sitesimp/nissan-logo-white.svg" style={{ marginTop: '-22%', marginLeft: '1%' }} alt="" /></a>
                              <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                   <span><i class="fa-solid fa-bars-staggered"></i></span>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarNav">
                                   <ul class="navbar-nav">
                                        <li class="nav-item">
                                             <a class="nav-link" aria-current="page" href="#">Vechicles</a>
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
                              <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{ marginTop: '-20px' }}>
                                   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                             <NavLink id='link1' to={'/'}>Overview</NavLink>
                                        </li>
                                        <li class="nav-item">
                                             <NavLink id='link1' to={'Gallery'}>Gallery</NavLink>
                                        </li>
                                        <li class="nav-item">
                                             <NavLink id='link1' to={'Features'}>Features</NavLink>

                                        </li>
                                        <li class="nav-item">
                                             <NavLink id='link1' to={'Specs'}>Specs</NavLink>
                                        </li>
                                        <li class="nav-item">
                                             <NavLink id='link1' to={'Offers'}>Offers</NavLink>
                                        </li>

                                   </ul>
                                   <div className="btn-1">
                                        <button id='btn-1'>Search Inventory <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                                   </div>
                              </div>
                         </div>
                    </nav>

                    <div className="GTR" >
                         <p>2024 NISSAN <h1>GT-R <p style={{ position: 'relative', left: '91%', top: '-65px' }}>®</p> </h1></p>
                    </div>
               </div>
               <div className="overview-div1">
                    <div className="child-div1" >
                         <div className="child1" data-aos="fade-up-right">
                              <p>The best    GT-R ever</p>
                         </div>
                         <div className="child2" data-aos="fade-up-left" data-aos-delay='200'>
                              <p>Starting At [*]</p>
                              <h1>$121,090</h1><br /><br />
                              <p id='para'>An unmatched blend of power and soul: the Nissan GT-R. Experience the singular supercar that sculpts the wind, with enhanced aerodynamics to improve ride and handling for 2024.</p> <br />
                              <button id='btn3'>Search Inventory  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                              <button id='btn4' data-aos="fade-up"
                                   data-aos-duration="3000" data-aos-delay='200'>Estimate Payments <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                         </div>

                    </div>
                    <hr color='black' style={{ width: '1150px', height: '1.3px', margin: '5% 12%', flexWrap: 'wrap' }} />
                    <div className="child-div2">
                         <p style={{ color: "rgba(74, 72, 72, 0.659)", fontSize: '14px', letterSpacing: '0.5px' }}>PERFORMANCE</p>
                         <div className="child3" data-aos="fade-up"
                              data-aos-duration="1000" data-aos-delay='200'>
                              <p id='para1'><CountUp end={565} enableScrollSpy duration="3" /> <p id='para2'>Horsepower [*]</p></p> <hr color='black' style={{ width: '150px', height: '1.3px', transform: 'rotate(90deg)', marginTop: '6%' }} />
                              <p id='para1' data-aos="fade-up"
                                   data-aos-duration="1000"> <CountUp end={6} enableScrollSpy duration="5" /> <p id='para2'>Speed dual-clutch transmission</p></p> <hr color='black' style={{ width: '150px', height: '1.3px', transform: 'rotate(90deg)', marginTop: '6%' }} />
                              <p id='para1' data-aos="fade-up"
                                   data-aos-duration="1000"> <CountUp end={467} enableScrollSpy duration="3" /> <p id='para2'>Lb-ft of Torque [*]</p></p>
                         </div> <br /><br />
                         <Link to={'/Specs'}><button id='btn3' data-aos="fade-up"
                              data-aos-duration="3000" data-aos-delay='200'>View All Specs  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button></Link>
                    </div>
                    <div className="img-div">

                    </div>
                    <div className="child-div3">
                         <div className="child4">
                              <img id='img1' data-aos="fade-up"
                                   data-aos-duration="1000" data-aos-delay='200' src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/carousel/2024-nissan-gt-r-aerodynamics.jpg" alt="" />
                         </div>
                         <div className="child5" data-aos="flip-up" data-aos-delay='200'>
                              <p style={{ fontSize: '12px', letterSpacing: '1px' }}>FEATURES</p>
                              <p id='para3'>The heart of a legend</p>
                              <div className="btns-div">
                                   <button onClick={click2} id='clickOne'>Enhanced <br /> aerodynamics</button>
                                   <button onClick={click1} id='clickTwo'>Twin-turbo V6  <br />engine</button>
                                   <button onClick={click3} id='clickThree'>Dynamic handling <br /> <p></p></button>
                              </div> <br />
                              <p id='para4'>The 2024 GT-R features a redesigned front bumper, front lip, and canards. At the rear, bumper sides and a revised rear spoiler help the GT-R add downforce without increasing drag.</p> <br /><br />
                              <Link to={'/Features'}><button id='btn5'>View Features  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button></Link>
                         </div>
                    </div>
                    <div className="child-div4">
                         <div className="child6">
                              <img data-aos="zoom-in" data-aos-delay='200' src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/2024-nissan-gtr-engine-being-assembled.jpg" alt="" />
                         </div>
                         <div className="child7" data-aos="fade-up"
                              data-aos-anchor-placement="center-bottom" data-aos-delay='200'>
                              <p style={{ fontSize: '12px', letterSpacing: '1.5px' }}>IN THE HANDS OF MASTERS</p>
                              <p style={{ fontSize: '25px', letterSpacing: '1px' }}>True mastery: from Takumi to expert driver</p>
                              <p id='para5'>Each GT-R gets to wear a true badge of honor, hand-assembled by one of the world’s five master Takumi craftsmen, who affix their name on a plaque. AS Class drivers—the top development drivers at Nissan—help create a vehicle that shines on both road and track, including an Autobahn expert, a “marketability” expert, and “Ringmeisters,” who test the GT-R at the legendary Nürburgring. [*]</p>
                         </div>
                    </div>
                    <div className="child-div5">
                         <div className="child8" data-aos="zoom-out-up" data-aos-delay='300'>
                              <p style={{ fontSize: '12px', letterSpacing: '1.5px' }}>TECHNOLOGY</p>
                              <p style={{ fontSize: '30px', letterSpacing: '1px', lineHeight: '35px', textAlign: 'start', width: '300px' }}>An exhilarating connection to your
                                   world</p>
                              <p style={{ fontSize: '14px', letterSpacing: '1px' }}>Connecting you at every level [*] [*]</p> <br />
                              <Link to={'/Features'}><button id='btn5'>View Features  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button></Link>
                         </div>
                         <div className="child9">
                              <div class="accordion w-75 scroll-down" id="accordionPanelsStayOpenExample">
                                   <div class="accordion-item">
                                        <h2 class="accordion-header">
                                             <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne ">
                                                  Apple CarPlay® integration
                                             </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                             <div class="accordion-body">
                                                  <p style={{ fontSize: '15px', letterSpacing: '1px', color: 'rgba(100, 98, 98, 0.786)' }}>The wingman to your compatible iPhone®. Brings on board your contacts, favorite messaging apps, Apple Music® playlists, Apple Maps, and more. [*] [*] [*]</p> <br /><br />
                                                  <img data-aos="zoom-out" src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/accordion/2024-nissan-gt-r-detail-apple-carplay-maps.jpg" alt="" />

                                             </div>
                                        </div>
                                   </div>
                                   <div class="accordion-item">
                                        <h2 class="accordion-header">
                                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                  Bose Premium Audio System
                                             </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                             <div class="accordion-body">
                                                  < p style={{ fontSize: '15px', letterSpacing: '1px', color: 'rgba(100, 98, 98, 0.786)' }}>Custom-engineered for GT-R’s cabin, it could be the sweetest sound outside the twin-turbo V6. [*]</p> <br /><br />
                                                  <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/accordion/2024-nissan-gt-r-interior-view-rear-seats-subwoofer-for-bose-premium-audio-system.jpg" alt="" />
                                             </div>
                                        </div>
                                   </div>
                                   <div class="accordion-item">
                                        <h2 class="accordion-header">
                                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                  NissanConnect Services
                                             </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                             <div class="accordion-body">
                                                  < p style={{ fontSize: '15px', letterSpacing: '1px', color: 'rgba(100, 98, 98, 0.786)' }}>With easy access to emergency response services, remote connectivity features, customizable alerts, and more, help can be as close as your compatible smartphone with NissanConnect® Services through the MyNISSAN app.[*][*][*][*]</p> <br /><br />
                                                  <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/accordion/2024-nissan-gt-r-detail-phone-displaying-nissanconnect-services-app.jpg" alt="" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="child-div6">
                         <img data-aos="zoom-in" data-aos-delay='300' src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/2024-nissan-gt-r-interior-view-leather-wrapped-steering-wheel-seats.jpg" alt="" />
                         <div className="child10" data-aos="fade-up"
                              data-aos-anchor-placement="top-center" data-aos-delay="100">
                              <p style={{ fontSize: '12px', letterSpacing: '1.5px' }}>INTERIOR FEATURES</p>
                              <h3>An interior made for driving</h3>
                              <p id='para6'>From the leather appointments surrounding you in premium luxury, to the supportive sport seats, to the available Nappa leather-wrapped dashboard, the inside of a GT-R is as exciting as the outside.</p>
                              <button id='btn6'>View All Interior Features <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                         </div>
                    </div>
                    <div className="child13" data-aos="fade-down-right" data-aos-delay="300">
                         <p style={{ fontSize: '12px', letterSpacing: '1.5px' }}>2024 NISSAN GT-R TRIMS</p>
                         <h3>Which GT-R is right for you?</h3>
                         <div className="child11">
                              <p style={{ fontSize: '12px', letterSpacing: '1.5px', display: 'flex', gap: '40px' }}>DRIVETRAIN:<h6 style={{ fontWeight: '600' }}>AWD</h6> </p>
                              <div className="child12">
                                   <div className="small-cards ">
                                        <div className="card1">
                                             <p style={{ fontSize: '14px', fontWeight: '600', paddingTop: '4%' }}>Premium</p>
                                             <p style={{ fontSize: '10px' }}>$121,090 <br /> MSRP[*]</p>
                                             <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/vehicle-profile-assets/2024/version-2024-gt-r-premium-solid-red.png.ximg.l_4_h.smart.png" alt="" />
                                        </div>
                                        <div className="card2">
                                             <p style={{ fontSize: '14px', fontWeight: '600', paddingTop: '4%' }}>T-spec®</p>
                                             <p style={{ fontSize: '10px' }}>$141,090 <br />MSRP [*]</p>
                                             <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/vehicle-profile-assets/2024/version-2024-gt-r-t-spec-millennium-jade.png.ximg.l_4_h.smart.png" alt="" />
                                        </div>
                                        <div className="card3">
                                             <p style={{ fontSize: '14px', fontWeight: '600', paddingTop: '4%' }}>NISMO®</p>
                                             <p style={{ fontSize: '10px' }}>$221,090 <br />MSRP [*]</p>
                                             <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/vehicle-profile-assets/2024/version-2024-gt-r-nismo-jet-black-pearl.png.ximg.l_4_h.smart.png" alt="" />
                                        </div>

                                   </div>


                              </div>
                         </div>
                    </div>
                    <div className="child14">
                         <div className="child15" data-aos="zoom-in" data-aos-delay='300'>
                              <p style={{ fontSize: '36px', fontWeight: '100', letterSpacing: '0.5px' }} id='gtrInfo'>GT-R Premium</p> <br />
                              <h6 style={{ fontSize: '14px', fontWeight: '600' }} id='gtrPrice'>Starting MSRP
                                   [*]
                                   $121,090</h6> <br />
                              <p style={{ fontSize: '14px', letterSpacing: '0.5px' }}>Key Standard Features:</p>
                              <li id='li1'>3.8-liter twin-turbocharged V6</li>
                              <li id='li2'>Dual-clutch transmission</li>
                              <li id='li3'>20" RAYS® forged-alloy wheels
                                   [*]</li> <br /><br />
                              <p style={{ fontSize: '14px', letterSpacing: '0.5px', paddingLeft: '4%' }} id='colorGtr'>Solid Red</p>
                              <div className="cars-1"  >
                                   <img src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios007_A54.png" id='chooseColor1' onClick={img1} style={{ width: '30px', border: '1px solid black', borderRadius: '10%' }} alt="" />
                                   <img src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/20tdig-pace197-rcb.png" onClick={img2} id='chooseColor2' alt="" />
                                   <img src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios027_GAG.png" onClick={img3} id='chooseColor3' alt="" />
                                   <img src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios035_KAD.png" onClick={img4} id='chooseColor4' alt="" />
                                   <img src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios034_KAB.png" onClick={img5} id='chooseColor5' alt="" />
                                   <img src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios053_QAB.png" onClick={img6} id='chooseColor6' alt="" />
                              </div>
                              <div className="child16">
                                   <button id='btn7'>Build & Price <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                                   <Link to={'/Specs'}><button id='btn8'>
                                        View Specs <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button></Link>
                                   <p style={{ fontSize: '13px', padding: '5% 1%' }}>Please see the actual vehicle and colors at your local Nissan dealer.
                                        [*]</p>
                              </div>
                         </div>
                         <div className="child17">
                              <img id='gtrColor' src="https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&w=8200&h=5000&x=900&y=1000&vehicle=8_R35&paint=A54&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024" alt="" />
                         </div>

                    </div>
                    <div className="child-div8">
                         <div className="c-3" data-aos="fade-up">
                              <p style={{ fontSize: '12px', letterSpacing: '1.5px' }}>GALLERY</p>
                              <p style={{ fontSize: '30px', letterSpacing: '0.5px', fontWeight: '500' }}>Explore the 2024 Nissan GT-R</p>
                         </div>
                         <div className="child18">

                              <div className="c-1" data-aos="fade-right" data-aos-delay='200'>
                                   <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/mosaic/2024-nissan-gtr-detail-leather-wrapped-steering-wheel.jpg" alt="" />
                              </div>
                              <div className="c-2">
                                   <div className="c2-1" data-aos="fade-left" data-aos-delay='200'>
                                        <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/mosaic/2024-nissan-gtr-rear-seating-subwoofer.jpg" alt="" />
                                   </div>
                                   <div className="c2-2" data-aos="flip-up" data-aos-delay='200'>
                                        <p>A supercar that will simply take your breath</p>
                                   </div>
                              </div>

                         </div>
                         <div className="c-4" >
                              <img data-aos="flip-right" data-aos-delay='300' src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/mosaic/2024-nissan-gt-r-green-rear-view.jpg" alt="" />
                         </div>
                         <div className="c-2 d-flex justify-content-center">
                              <div className="c2-3" data-aos="fade-right" data-aos-delay='300'>
                                   <div className="c-5">
                                        <p>Take a closer look</p>
                                        <p style={{ fontSize: '18px', }}>See all the 2024 GT-R pictures and videos.</p>
                                        <Link to={'/Gallery'}><button id='btn3'>View Gallery <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button></Link>
                                   </div>
                              </div>
                              <div className="c2-1" data-aos="fade-left" data-aos-delay='300'>
                                   <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/mosaic/2024-nissan-gtr-detail-nappa-leather-dash.jpg" alt="" />
                              </div>

                         </div>
                         <div className="c-4" >
                              <img data-aos="flip-down" data-aos-delay='300' src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/mosaic/2024-nissan-gt-r-unique-super-silver-quadcoat.jpg" alt="" />
                         </div>
                    </div>
                    <div className="child-div9">
                         <div className="child19" data-aos="zoom-in-left" data-aos-delay='300'>
                              <p style={{ fontSize: '12px', letterSpacing: '1.5px', }}>GT-R® T-spec®</p>
                              <p style={{ fontSize: '38px', }}>Crafted, curated, <br /> and breathtaking</p>
                              <button id='btn4'>View T-spec  <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                         </div>
                    </div>

                    <div className="child-div10">
                         <div className="child20" data-aos="zoom-in-right" data-aos-delay='300'>
                              <p style={{ fontSize: '12px', letterSpacing: '1.5px', }}>GT-R® NISMO</p>
                              <p style={{ fontSize: '38px', }}>Raising the bar to <br /> new heights</p>
                              <button id='btn4'>View NISMO <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
                         </div>
                    </div>


               </div>
          </>
     )
}

export default Overview