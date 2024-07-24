import React, { useState,useEffect } from 'react'
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
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
      <div className="navbarDiv2">
        <nav class="navbar navbar-expand-lg bg-transparent" style={{borderBottom:'1px solid rgba(245, 245, 245, 0.427)'}}>
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
            <p style={{ paddingLeft: '1%', fontSize: '14px', paddingTop:'0.5%'}}>2024 GT-R</p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span><i class="fa-solid fa-bars-staggered"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{ marginTop: '-20px' }}>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink id='link1' to={'/'}>Overview</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink id='link1'>Gallery</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink id='link1' to={'/Features'}>Features</NavLink>

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
          <p>2024 NISSAN <h1 style={{ lineHeight: '20px', paddingTop: '12%' }}>GT-R<p style={{ position: 'relative', left: '67%', top: '-45px' }}>®</p> Gallery </h1></p>
        </div>
      </div>
      <div className="gallery-div1">
        <div className="gallery-child1" data-aos="fade-down-right" data-aos-delay='200'>
          <li style={{borderBottom:'3px solid red '}}>EXTERIOR</li>
          <li>INTERIOR</li>
          <li>VIDEOS</li>
        </div>
        <div className="gallery-child2" >
          <p data-aos="zoom-in" data-aos-delay='200' style={{ fontSize: '10px', letterSpacing: '1.5px' }}>2024 NISSAN GT-R® EXTERIOR</p>
          <h2>360 & colors</h2>
          <div className="gallery-imgs">
            <Image id='gtr-gallery' src="https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=JW0&fabric=D&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,14_7,15_G,SHADOW_ON,PI_ON,PE_ON,2024" fluid alt="" />
          </div>
          <div className="gallery-child3">
            <p data-aos="zoom-out-right" data-aos-delay='200' style={{ padding: '3% 14%' }} id='color-gallery'>Millennium Jade [*]</p>
            <img  src="https://www.nissanusa.com/content/dam/Nissan/us/colour_chips/Exterior/jw0-swatch.png" style={{width:'30px',border:'1px solid black',borderRadius:'10%'}} onClick={img7} className='img-1' id='chooseColor1' alt="" />
            <img  src="https://www.nissanusa.com/content/dam/Nissan/us/colour_chips/Exterior/dap-swatch.png" onClick={img8} id='chooseColor2' alt="" />
            <img  src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios007_A54.png" onClick={img9} id='chooseColor3' alt="" />
            <img  src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/20tdig-pace197-rcb.png" onClick={img10} id='chooseColor4' alt='' />
            <img  src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios027_GAG.png" onClick={img11} id='chooseColor5' alt='' />
            <img  src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios035_KAD.png" onClick={img12} id='chooseColor6' alt='' />
            <img  src="https://www.nissanusa.com/content/dam/Nissan/us/colour_chips/Exterior/kce-swatch.png" onClick={img13} id='chooseColor7' alt='' />
            <img  src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios053_QAB.png" onClick={img14} id='chooseColor8' alt="" />
            <img  src="https://www.nissanusa.com/content/dam/Nissan/global/colour_chips/15TDIg_Helios053_QAB.png" onClick={img15} id='chooseColor9' alt="" />
            <p  style={{ fontSize: '12px', padding: '4% 0%' }}>Please see the actual vehicle and colors at your local Nissan dealer. [*]</p>
            <button  id='btn-g1'>Build & Price <i class="fa-solid fa-arrow-right arrow" style={{ fontSize: '16px', }}></i></button>
          </div>
        </div>
        <div className="gallery-child4">
          <div className="gtr-g1" data-aos="flip-left" data-aos-delay='200'>
            <img id='zoom1' src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/gallery/exterior/mosaic/2024-nissan-gt-r-high-performance-luxury-sports-car-light-green-t.jpg" alt="" />
            <div className="content">
              <h1>GT-R improved <br />
                aerodynamics</h1>
            </div>
          </div>
          <div className="gtr-g2" data-aos="flip-right" data-aos-delay='200'>
            <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/gallery/exterior/mosaic/2024-nissan-gtr-nismo-fender-vents-t.jpg" alt="" />
            <div className="content">
              <h1>GT-R NISMO®</h1>
            </div>
          </div>

        </div>
      </div>
      <div className="gallery-child5">
        <img data-aos="flip-up" data-aos-delay='200' src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/gallery/exterior/mosaic/2024-nissan-gt-r-iconic-taillights-m.jpg" alt="" />
        <div className="content-1">
          <h1>Iconic taillights</h1>
        </div>
      </div>
      <div className="gallery-child6">
        <div className="gtr-g6" data-aos="flip-down" data-aos-delay='300'>
          <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/gallery/exterior/mosaic/2024-nissan-gtr-detail-forged-aluminum-wheel.jpg" alt="" />
          <div className="content-2">
          <h1>RAYS forged <br /> wheels </h1>
          </div>
        </div>
        <div className="gtr-g4" data-aos="flip-up" data-aos-delay='300'>
          <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/gallery/exterior/mosaic/2024-nissan-gt-r-unique-super-silver-quadcoat.jpg" alt="" />
          <div className="content-2">
            <h1>Unique Super Silver QuadCoat</h1>
          </div>

        </div>
        <div className="gtr-g5" data-aos="flip-down" data-aos-delay='300'>
          <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/gallery/exterior/mosaic/2024-nissan-gt-r-t-spec-design.jpg" alt="" />
          <div className="content-2">
            <h1>GT-R T-spec design</h1>
          </div>

        </div>

      </div>
     
      <div className="gallery-child5">
        <img data-aos="zoom-in-down" data-aos-delay='200' src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/gallery/exterior/mosaic/2024-nissan-gt-r-nismo-aerodynamic-design.jpg" alt="" />
        <div className="content-1">
          <h1>NISMO aerodynamic design [*]</h1>
        </div>   
      </div>
      <div className="gallery-child4" style={{marginTop:'-5%'}}>
                 <div className="gtr-g1" data-aos="fade-right" data-aos-delay='200' >
                  <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/gallery/exterior/mosaic/2024-nissan-gt-r-multi-led-headlights.jpg" alt=""style={{width:'580px',height:'486px'}}/>
                    <div className="content">
                      <h1>Multi-LED headlights</h1>
                    </div>
                 </div>
                 <div className="gtr-g2" data-aos-delay='200' data-aos="fade-left" >
                  <img src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/gallery/exterior/mosaic/2024-nissan-gt-r-badge.jpg" alt="" style={{width:'580px',height:'486px'}} />
                    <div className="content">
                      <h1>GT-R badge</h1>
                    </div>
                 </div>
          </div>
       <p style={{fontSize:'28px',textAlign:'center',paddingTop:'4%'}} data-aos="flip-right" data-aos-delay='200' >Keep Exploring</p>
    </>
  )
  function img7() {
    let gtrGallery = document.getElementById('gtr-gallery')
    let colorGallery = document.getElementById('color-gallery')
    gtrGallery.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=JW0&fabric=D&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,14_7,15_G,SHADOW_ON,PI_ON,PE_ON,2024"
    colorGallery.textContent = "Millennium Jade [*]"
    let color1 = document.getElementById('chooseColor1')
    let color2 = document.getElementById('chooseColor2')
    let color3 = document.getElementById('chooseColor3')
    let color4 = document.getElementById('chooseColor4')
    let color5 = document.getElementById('chooseColor5')
    let color6 = document.getElementById('chooseColor6')
    let color7 = document.getElementById('chooseColor7')
    let color8 = document.getElementById('chooseColor8')
    let color9 = document.getElementById('chooseColor9')
    color1.style.width = "30px"
    color1.style.border = "1px solid black"
    color1.style.borderRadius = "10%"
    color2.style = "none"
    color3.style = "none"
    color4.style = "none"
    color5.style = "none"
    color6.style = "none"
    color7.style = "none"
    color8.style = "none"
    color9.style = "none"
  }
  function img8() {
    let gtrGallery = document.getElementById('gtr-gallery')
    let colorGallery = document.getElementById('color-gallery')
    gtrGallery.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=DAP&fabric=D&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,14_7,15_G,SHADOW_ON,PI_ON,PE_ON,2024"
    colorGallery.textContent = "Midnight Purple [*]"
    let color1 = document.getElementById('chooseColor1')
    let color2 = document.getElementById('chooseColor2')
    let color3 = document.getElementById('chooseColor3')
    let color4 = document.getElementById('chooseColor4')
    let color5 = document.getElementById('chooseColor5')
    let color6 = document.getElementById('chooseColor6')
    let color7 = document.getElementById('chooseColor7')
    let color8 = document.getElementById('chooseColor8')
    let color9 = document.getElementById('chooseColor9')
    color2.style.width = "30px"
    color2.style.border = "1px solid black"
    color2.style.borderRadius = "10%"
    color1.style = "none"
    color3.style = "none"
    color4.style = "none"
    color5.style = "none"
    color6.style = "none"
    color7.style = "none"
    color8.style = "none"
    color9.style = "none"
  }
  function img9() {
    let gtrGallery = document.getElementById('gtr-gallery')
    let colorGallery = document.getElementById('color-gallery')
    gtrGallery.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=A54&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_N,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
    colorGallery.textContent = "Solid Red"
    let color1 = document.getElementById('chooseColor1')
    let color2 = document.getElementById('chooseColor2')
    let color3 = document.getElementById('chooseColor3')
    let color4 = document.getElementById('chooseColor4')
    let color5 = document.getElementById('chooseColor5')
    let color6 = document.getElementById('chooseColor6')
    let color7 = document.getElementById('chooseColor7')
    let color8 = document.getElementById('chooseColor8')
    let color9 = document.getElementById('chooseColor9')
    color3.style.width = "30px"
    color3.style.border = "1px solid black"
    color3.style.borderRadius = "10%"
    color1.style = "none"
    color2.style = "none"
    color4.style = "none"
    color5.style = "none"
    color6.style = "none"
    color7.style = "none"
    color8.style = "none"
    color9.style = "none"
  }
  function img10() {
    let gtrGallery = document.getElementById('gtr-gallery')
    let colorGallery = document.getElementById('color-gallery')
    gtrGallery.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=RCB&fabric=X&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,14_H,SHADOW_ON,PI_ON,PE_ON,2024"
    colorGallery.textContent = "Bayside Blue [*]"
    let color1 = document.getElementById('chooseColor1')
    let color2 = document.getElementById('chooseColor2')
    let color3 = document.getElementById('chooseColor3')
    let color4 = document.getElementById('chooseColor4')
    let color5 = document.getElementById('chooseColor5')
    let color6 = document.getElementById('chooseColor6')
    let color7 = document.getElementById('chooseColor7')
    let color8 = document.getElementById('chooseColor8')
    let color9 = document.getElementById('chooseColor9')
    color4.style.width = "30px"
    color4.style.border = "1px solid black"
    color4.style.borderRadius = "10%"
    color1.style = "none"
    color3.style = "none"
    color2.style = "none"
    color5.style = "none"
    color6.style = "none"
    color7.style = "none"
    color8.style = "none"
    color9.style = "none"
  }
  function img11() {
    let gtrGallery = document.getElementById('gtr-gallery')
    let colorGallery = document.getElementById('color-gallery')
    gtrGallery.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=GAG&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_N,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
    colorGallery.textContent = "Jet Black Pearl"
    let color1 = document.getElementById('chooseColor1')
    let color2 = document.getElementById('chooseColor2')
    let color3 = document.getElementById('chooseColor3')
    let color4 = document.getElementById('chooseColor4')
    let color5 = document.getElementById('chooseColor5')
    let color6 = document.getElementById('chooseColor6')
    let color7 = document.getElementById('chooseColor7')
    let color8 = document.getElementById('chooseColor8')
    let color9 = document.getElementById('chooseColor9')
    color5.style.width = "30px"
    color5.style.border = "1px solid black"
    color5.style.borderRadius = "10%"
    color2.style = "none"
    color3.style = "none"
    color1.style = "none"
    color4.style = "none"
    color6.style = "none"
    color7.style = "none"
    color8.style = "none"
    color9.style = "none"
  }
  function img12() {
    let gtrGallery = document.getElementById('gtr-gallery')
    let colorGallery = document.getElementById('color-gallery')
    gtrGallery.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=KAD&fabric=D&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,14_7,15_G,SHADOW_ON,PI_ON,PE_ON,2024"
    colorGallery.textContent = "Gun Metallic"
    let color1 = document.getElementById('chooseColor1')
    let color2 = document.getElementById('chooseColor2')
    let color3 = document.getElementById('chooseColor3')
    let color4 = document.getElementById('chooseColor4')
    let color5 = document.getElementById('chooseColor5')
    let color6 = document.getElementById('chooseColor6')
    let color7 = document.getElementById('chooseColor7')
    let color8 = document.getElementById('chooseColor8')
    let color9 = document.getElementById('chooseColor9')
    color6.style.width = "30px"
    color6.style.border = "1px solid black"
    color6.style.borderRadius = "10%"
    color2.style = "none"
    color3.style = "none"
    color4.style = "none"
    color5.style = "none"
    color1.style = "none"
    color7.style = "none"
    color8.style = "none"
    color9.style = "none"
  }
  function img13() {
    let gtrGallery = document.getElementById('gtr-gallery')
    let colorGallery = document.getElementById('color-gallery')
    gtrGallery.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=KCE&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_N,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
    colorGallery.textContent = "Stealth Gray [*]"
    let color1 = document.getElementById('chooseColor1')
    let color2 = document.getElementById('chooseColor2')
    let color3 = document.getElementById('chooseColor3')
    let color4 = document.getElementById('chooseColor4')
    let color5 = document.getElementById('chooseColor5')
    let color6 = document.getElementById('chooseColor6')
    let color7 = document.getElementById('chooseColor7')
    let color8 = document.getElementById('chooseColor8')
    let color9 = document.getElementById('chooseColor9')
    color7.style.width = "30px"
    color7.style.border = "1px solid black"
    color7.style.borderRadius = "10%"
    color2.style = "none"
    color3.style = "none"
    color4.style = "none"
    color5.style = "none"
    color6.style = "none"
    color1.style = "none"
    color8.style = "none"
    color9.style = "none"
  }
  function img14() {
    let gtrGallery = document.getElementById('gtr-gallery')
    let colorGallery = document.getElementById('color-gallery')
    gtrGallery.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=KAB&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_N,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
    colorGallery.textContent = "Super Silver QuadCoat [*]"
    let color1 = document.getElementById('chooseColor1')
    let color2 = document.getElementById('chooseColor2')
    let color3 = document.getElementById('chooseColor3')
    let color4 = document.getElementById('chooseColor4')
    let color5 = document.getElementById('chooseColor5')
    let color6 = document.getElementById('chooseColor6')
    let color7 = document.getElementById('chooseColor7')
    let color8 = document.getElementById('chooseColor8')
    let color9 = document.getElementById('chooseColor9')
    color8.style.width = "30px"
    color8.style.border = "1px solid black"
    color8.style.borderRadius = "10%"
    color2.style = "none"
    color3.style = "none"
    color4.style = "none"
    color5.style = "none"
    color6.style = "none"
    color7.style = "none"
    color1.style = "none"
    color9.style = "none"
  }
  function img15() {
    let gtrGallery = document.getElementById('gtr-gallery')
    let colorGallery = document.getElementById('color-gallery')
    gtrGallery.src = "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&width=1600&height=900&vehicle=8_R35&paint=QAB&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_N,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024"
    colorGallery.textContent = "Pearl White TriCoat [*]"
    let color1 = document.getElementById('chooseColor1')
    let color2 = document.getElementById('chooseColor2')
    let color3 = document.getElementById('chooseColor3')
    let color4 = document.getElementById('chooseColor4')
    let color5 = document.getElementById('chooseColor5')
    let color6 = document.getElementById('chooseColor6')
    let color7 = document.getElementById('chooseColor7')
    let color8 = document.getElementById('chooseColor8')
    let color9 = document.getElementById('chooseColor9')
    color9.style.width = "30px"
    color9.style.border = "1px solid black"
    color9.style.borderRadius = "10%"
    color2.style = "none"
    color3.style = "none"
    color4.style = "none"
    color5.style = "none"
    color6.style = "none"
    color7.style = "none"
    color8.style = "none"
    color1.style = "none"
  }
}
