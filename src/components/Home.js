import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import nature from "../images/nature.jpg";
import ocean from "../images/ocean.jpg";
import falls from "../images/falls2.jpg";
import libreak from "../images/libreak.png";
import Isotope from 'isotope-layout';
import $ from "jquery";

function Home() {
  const weddingDate = new Date('2024-04-25T00:00:00');
  const [countdownText, setCountdownText] = useState('');
  const [currentSection, setCurrentSection] = useState(null);
  const portfolioContainer = useRef(null);

  useEffect(() => {
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('.section');
      let current = null;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          current = section.id;
        }
      });
      setCurrentSection(current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate');
    animateElements.forEach(element => {
      element.classList.remove('animate');
    });

    const currentSectionElements = document.querySelectorAll(`#${currentSection} .animate-left, #${currentSection} .animate-right`);
    currentSectionElements.forEach(element => {
      element.classList.add('animate');
    });
  }, [currentSection]);

  useEffect(() => {
    if (portfolioContainer.current) {
      const iso = new Isotope(portfolioContainer.current, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
  
      $(document).on('click', '#portfolio-flters li', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
  
        iso.arrange({ filter: $(this).data('filter') });
      });
    }
  }, []);
  const [filter, setFilter] = useState('all');

    const handleFilter = (filterValue) => {
        setFilter(filterValue);
    };
    const portfolioItems = [
      { 
        fullName: "John Doe", 
        role: "Groomsman", 
        category: "first",
        twitter: "https://twitter.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        snapchat: "https://snapchat.com/add/johndoe",
        instagram: "https://instagram.com/johndoe",
        image: require('../images/nature.jpg') // Add the URL to John Doe's image
      },
      { 
        fullName: "John Doe", 
        role: "Groomsman", 
        category: "first",
        twitter: "https://twitter.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        snapchat: "https://snapchat.com/add/johndoe",
        instagram: "https://instagram.com/johndoe",
        image: require('../images/nature.jpg') // Add the URL to John Doe's image
      },
      { 
        fullName: "John Doe", 
        role: "Groomsman", 
        category: "first",
        twitter: "https://twitter.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        snapchat: "https://snapchat.com/add/johndoe",
        instagram: "https://instagram.com/johndoe",
        image: require('../images/nature.jpg') // Add the URL to John Doe's image
      },
      { 
        fullName: "Jane Smith", 
        role: "Bridesmaid", 
        category: "second",
        twitter: "https://twitter.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        snapchat: "https://snapchat.com/add/janesmith",
        instagram: "https://instagram.com/janesmith",
        image: require('../images/nature.jpg') // Add the URL to Jane Smith's image
      },
      { 
        fullName: "Jane Smith", 
        role: "Bridesmaid", 
        category: "second",
        twitter: "https://twitter.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        snapchat: "https://snapchat.com/add/janesmith",
        instagram: "https://instagram.com/janesmith",
        image: require('../images/nature.jpg') // Add the URL to Jane Smith's image
      },
      { 
        fullName: "Jane Smith", 
        role: "Bridesmaid", 
        category: "second",
        twitter: "https://twitter.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        snapchat: "https://snapchat.com/add/janesmith",
        instagram: "https://instagram.com/janesmith",
        image: require('../images/nature.jpg') // Add the URL to Jane Smith's image
      },
      // Add more portfolio items as needed
  ];
  

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const Seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdownText(`${Days} Days ${Hours} Hours ${Minutes} Minutes ${Seconds} Seconds`);
  }


  




    return(
        <>
         <div className="home">
        <div style={{paddingTop:"65px"}}id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={nature} class="d-block w-100 img2" alt="..."/>
      <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div class="p-3" style={{maxWidth: "900px"}}>
            <h1 className="display-1 font-secondary cc  mt-n3 mb-md-4" style={{color:"gold",fontWeight:"bold",paddingTop:"10px"}}>
          DasBabu <span style={{color:"gray"}} >&</span> Nikitha
        </h1>
               <div class="d-inline-block border-top border-bottom border-light py-3 px-4">
               <h3 class="text-uppercase cc font-weight-normal m-0" style={{letterSpacing: "2px", color:"purple"}}>We're getting married</h3>
               </div>
                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           </div>
       </div>
   </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={falls} class="d-block w-100 img2" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
       <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div class="p-3" style={{maxWidth: "900px"}}>
            <h1 className="display-1 font-secondary cc  mt-n3 mb-md-4" style={{color:"gold",fontWeight:"bold",paddingTop:"10px"}}>
          DasBabu <span style={{color:"gray"}} >&</span> Nikitha
        </h1>
               <div class="d-inline-block border-top border-bottom border-light py-3 px-4">
               <h3 class="text-uppercase cc font-weight-normal m-0" style={{letterSpacing: "2px", color:"purple"}}>We're getting married</h3>
               </div>
                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           </div>
       </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={ocean} class="d-block w-100 img2" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div class="p-3" style={{maxWidth: "900px"}}>
            <h1 className="display-1 font-secondary cc  mt-n3 mb-md-4" style={{color:"gold",fontWeight:"bold",paddingTop:"10px"}}>
          DasBabu <span style={{color:"gray"}} >&</span> Nikitha
        </h1>
               <div class="d-inline-block border-top border-bottom border-light py-3 px-4">
               <h3 class="text-uppercase cc font-weight-normal m-0" style={{letterSpacing: "2px", color:"purple"}}>We're getting married</h3>
               </div>
                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           </div>
       </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* <div class="container my-5">
    <br/>
    <div class="containerclg">
  <div class="left-block">
    <div class="clo">
      <p class="pp1">Thanks for stopping by our wedding website! Here you can find everything you need to know about our big day. Read our story, find out who is in the wedding party, and see all the day-of details including a full itinerary of events and wedding details below!</p>
    </div>
  </div>
  <div class="right-block">
  <div class="clg">
    <p class="pp"><b>THE WEDDING DAY STARTS IN:</b></p>
  </div>
  <div className="clg1">
    <p className="pp"><b>{countdownText}</b></p>
  </div>
</div>
</div>
</div> */}

<div id="thebrideandgroom" className="section">
{/* <div class="parallax"></div> */}
    <br/>
    <br/>

    
    <div class="container my-5">
    
    
    <img src={libreak} class="libreak" alt="..."/>
    <div class="section-title position-relative text-center">
            <h6 class="text-uppercase glow  mb-3 pt-3" style={{letterSpacing: "3px", color: "orange"}}>About</h6>
    </div>



<h1 class="cen" style={{letterSpacing: "3px"}}><b>THE BRIDE AND GROOM</b></h1>
<p>-----------------------------------<i class="icon ion-heart text-dark" ></i>-----------------------------------</p>

<section>
<div class="container py-5">            
            <div class="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
                <div class="col-md-6 p-0 text-center text-md-right">
                    <div class="h-100 d-flex flex-column justify-content-center cl p-5">
                        <h3 class="font-secondary display-4" style={{color:"#34c7a9"}}>The Groom</h3>
                        <p class="rr">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p><br/>
                        <h3 class="rr font-secondary font-weight-normal text-muted mb-3" ><i class="icon ion-male pr-3" style={{color:"#34c7a9", borderColor:"#34c7a9"}}></i>D</h3>
                        <div class="position-relative">
                            <a class="btn  btn-square mr-1" style={{ borderColor:"#34c7a9"}} href="#"><i class="icon ion-social-twitter" ></i></a>
                            <a class="btn  btn-square mr-1" style={{ borderColor:"#34c7a9"}} href="#"><i class="icon ion-social-facebook"></i></a>
                            <a class="btn  btn-square mr-1" style={{ borderColor:"#34c7a9"}} href="#"><i class="icon ion-social-snapchat"></i></a>
                            <a class="btn  btn-square" style={{ borderColor:"#34c7a9"}} href="#"><i class="icon ion-social-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 p-0" style={{minHeight: "400px"}}>
                    <img class="position-absolute w-100 h-100" src={nature} style={{objectFit: "cover"}}/>
                </div>
            </div>
            <div class="row m-0">
                <div class="col-md-6 p-0" style={{minHeight: "400px"}}>
                    <img class="position-absolute w-100 h-100" src={nature} style={{objectFit: "cover"}}/>
                </div>
                <div class="col-md-6 p-0 text-center text-md-left">
                    <div class="h-100 d-flex flex-column justify-content-center cl p-5">
                        <h3 class="font-secondary display-4" style={{color:"#34c7a9"}}>The Bride</h3>
                        <p class="lf">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                        <br/>
                        <h3 class="lf font-secondary font-weight-normal text-muted mb-3" style={{color:"gold"}}><i class="icon ion-female pr-3" style={{color:"#34c7a9", borderColor:"#34c7a9"}}></i>N</h3>
                        <div class="position-relative">
                            <a class="btn  btn-square mr-1" style={{ borderColor:"#34c7a9"}} href="#"><i class="icon ion-social-twitter"></i></a>
                            <a class="btn  btn-square mr-1" style={{ borderColor:"#34c7a9"}} href="#"><i class="icon ion-social-facebook"></i></a>
                            <a class="btn  btn-square mr-1" style={{ borderColor:"#34c7a9"}} href="#"><i class="icon ion-social-snapchat"></i></a>
                            <a class="btn  btn-square" style={{ borderColor:"#34c7a9"}} href="#"><i class="icon ion-social-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>

    </div>
    
<hr/>
<div class="parallax">
<div class="section-title position-relative text-center">
    <h1 class="cen pt-5" style={{letterSpacing: "3px", color:"gold"}}><b>We Are Getting To Married In</b></h1>
    <p style={{fontSize:"100px"}}>--------- <i class="icon ion-heart text-dark" style={{fontSize:"100px"}}></i> ---------</p>
    <p className="ppr" style={{letterSpacing: "3px", color:""}}><b>{countdownText}</b></p>
  </div>
</div>

    <div class="container-fluid py-5" id="story">
        <div class="container  pb-3">
            <div class="section-title position-relative text-center">
            <h6 class="text-uppercase glow  mb-3" style={{letterSpacing: "3px", color: "orange"}}>Story</h6>
                <h1 class="cen" style={{letterSpacing: "3px"}}><b>Our Story</b></h1>
                <p>---------------------<i class="icon ion-heart text-dark" ></i>---------------------</p>
            </div>
            <div class="container timeline position-relative p-0">
                <div class="row">
                    <div class="col-md-6 text-center text-md-right">
                        <img class="img-fluid mr-md-3" src={libreak} alt=""/>
                    </div>
                    <div class="col-md-6 text-center text-md-left">
                        <div class=" h-100 d-flex flex-column justify-content-center p-4 ml-md-3">
                            <h4 class="font-secondary display-4 lf mb-2"  style={{color: "#34c7a9"}}>First Meet</h4>
                            <p class="lf text-uppercase mb-2" style={{color: "gold"}}>01 Jan 2050</p>
                            <p class="lf m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                        </div>
                    </div>
                </div>
                <div class="section-title position-relative text-center">
                <i class="icon ion-heart "style={{color: "#34c7a9"}} ></i>
            </div>
                <div class="row">
                    <div class="col-md-6 text-center text-md-right">
                        <div class="h-100 d-flex flex-column justify-content-center  p-4 mr-md-3">
                            <h4 class="rr mb-2 font-secondary display-4" style={{color: "#34c7a9"}}>First Date</h4>
                            <p class="rr text-uppercase mb-2" style={{color: "gold"}}>01 Jan 2050</p>
                            <p class="rr m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                        </div>
                    </div>
                    <div class="col-md-6 text-center text-md-left">
                        <img class="img-fluid ml-md-3" src={libreak} alt=""/>
                    </div>
                </div>
                <div class="section-title position-relative text-center">
                <i class="icon ion-heart "style={{color: "#34c7a9"}} ></i>
            </div>
                <div class="row">
                    <div class="col-md-6 text-center text-md-right">
                        <img class="img-fluid mr-md-3" src={libreak} alt=""/>
                    </div>
                    <div class=" col-md-6 text-center text-md-left">
                        <div class="h-100 d-flex flex-column justify-content-center p-4 ml-md-3">
                            <h4 class="lf mb-2 font-secondary display-4" style={{color: "#34c7a9"}}>Proposal</h4>
                            <p class="lf text-uppercase mb-2" style={{color: "gold"}}>01 Jan 2050</p>
                            <p class="lf m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                        </div>
                    </div>
                </div>
                <div class="section-title position-relative text-center">
                <i class="icon ion-heart "style={{color: "#34c7a9"}} ></i>
            </div>
                <div class="row">
                    <div class="col-md-6 text-center text-md-right">
                        <div class="h-100 d-flex flex-column justify-content-center  p-4 mr-md-3">
                            <h4 class="rr mb-2 font-secondary display-4" style={{color: "#34c7a9"}}>Enagagement</h4>
                            <p class="rr text-uppercase mb-2" style={{color: "gold"}}>01 Jan 2050</p>
                            <p class="rr m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                        </div>
                    </div>
                    <div class="col-md-6 text-center text-md-left">
                        <img class="img-fluid ml-md-3" src={libreak} alt=""/>
                    </div>
                </div>
            </div>
            <div class="scroll-container">
  <img src={nature} alt="Cinque Terre"/>
  <img src={nature} alt="Forest"/>
  <img src={nature} alt="Northern Lights"/>
  <img src={nature} alt="Mountains"/>
  <img src={nature} alt="Cinque Terre"/>
  <img src={nature} alt="Forest"/>
  <img src={nature} alt="Northern Lights"/>
  <img src={nature} alt="Mountains"/>
</div>
        </div>        
    </div>



<br/>
<br/>
</div>
<div id="weddingparty" className="section">
<div class="parallax">
  <div class="section-title position-relative text-center">
    <h1 class="cen" style={{letterSpacing: "3px", color:"#34c7a9"}}><b>Our Story</b></h1>
    <p>---------------------<i class="icon ion-heart text-dark" ></i>---------------------</p>
    <p className="pp"><b>{countdownText}</b></p>
  </div>
</div>




<div class="container my-5 " >
<img src={libreak} class="libreak" alt="..."/>
<br/>
<br/>
{/* <p class="cen"><b>THE WEDDING PARTY</b></p> */}
    <div class="container-fluid py-">
        <div class="container py-">
            <div class="section-title position-relative text-center">
                <h6 class="text-uppercase  mb-3 glow" style={{letterSpacing: "3px", color:"orange"}}>Event</h6>
                {/* <h1 class="font-secondary display-4">Our Wedding Event</h1> */}
                <h1 class="cen" style={{letterSpacing: "3px"}}><b>Our Wedding Event</b></h1>
                <p>---------------------------------------------<i class="icon ion-heart text-dark"></i>---------------------------------------------</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                    <h5 class="font-weight-normal text-muted mb-3 pb-3">Diam amet lorem erat eos sit lorem elitr justo</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 border-right border-primary">
                    <div class="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                        <img class="img-fluid mb-4" src={nature} alt=""/>
                        <h4 class="rr mb-3 font-secondary display-4 " style={{color:"#34c7a9"}}>The Reception</h4>
                        <p class="rr mb-2">123 Street, New York, USA</p>
                        <p class="rr mb-0" style={{color: "gold"}}>12:00AM - 13:00PM</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-center text-md-left ml-md-3">
                        <img class="img-fluid mb-4" src={nature} alt=""/>
                        <h4 class="font-secondary display-4 lf mb-2" style={{color:"#34c7a9"}}>Wedding Party</h4>
                        <p class="lf mb-2">123 Street, New York, USA</p>
                        <p class="lf mb-0" style={{color: "gold"}}>12:00AM - 13:00PM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<br/>
<br/>
<hr/>
<br/>
<img src={libreak} class="libreak" alt="..."/>

<div className="portfolio-container" id="family">
            <div className="container-fluid py-5" id="family">
                <div className="container pt pb-3">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase  mb-3 glow" style={{ letterSpacing: "3px", color:"orange" }}>Friends & Family</h6>
                        {/* <h1 className="font-secondary display-4">Groomsmen & Bridesmaid</h1> */}
                {/* <h1 class="cen" style={{letterSpacing: "3px", color: "#34c7a9"}}>Groomsmen & Bridesmaid</h1> */}
                <h1 class="cen "style={{letterSpacing: "3px"}}><b>Groomsmen & Bridesmaid</b></h1>
                <p>------------------------------------------------------------<i class="icon ion-heart text-dark" ></i>------------------------------------------------------------</p>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mb-2">
                            <ul className="list-inline mb-4" id="portfolio-flters">
                                <li style={{borderColor:"#34c7a9", }} className={`btn button  font-weight-bold m-1 py-2 px-4 ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>All</li>
                                <li style={{borderColor:"#34c7a9", }} className={`btn button font-weight-bold m-1 py-2 px-4 ${filter === 'first' ? 'active' : ''}`} onClick={() => handleFilter('first')}>Groomsmen</li>
                                <li style={{borderColor:"#34c7a9",}} className={`btn button font-weight-bold m-1 py-2 px-4 ${filter === 'second' ? 'active' : ''}`} onClick={() => handleFilter('second')}>Bridesmaid</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container ">
                        {portfolioItems.map((item, index) => (
                            <div key={index} className={`col-lg-4 col-md-6 mb-4 portfolio-item ${item.category === filter || filter === 'all' ? '' : 'd-none'}`}>
                                <div className="position-relative mb-2 ">
                                  <div class="image-container">
                                <img className="img-fluid w-100 " style={{borderRadius: "10px"}} src={item.image} alt="" />
                                </div>
                                    <div className="cl text-center p-4">
                                        <h4 className="mb-3 font-secondary display-4" style={{color:"#34c7a9"}}><b>{item.fullName}</b></h4>
                                        <p className="text-uppercase" style={{color:"gray"}}>{item.role}</p>
                                        <div className="social">
                                          <a href={item.twitter}  className="btn mr-1">
                                            <i className="icon ion-social-twitter"></i>
                                          </a>
                                          <a href={item.facebook}  className="btn mr-1">
                                            <i className="icon ion-social-facebook"></i>
                                          </a>
                                          <a href={item.snapchat}  className="btn mr-1">
                                            <i className="icon ion-social-snapchat"></i>
                                          </a>
                                          <a href={item.instagram}  className="btn">
                                            <i className="icon ion-social-instagram"></i>
                                          </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
{/* <div class="container unique-container" >
<div class="groom-section animate-left">
<p class="top">ON THE BRIDE'S SIDE</p>
  <div class="groom-row">
    <div class="image-wrapper">
      <img src={nature} alt="Bride 1"/>
      <p class="lef"><b>DAS BABU</b></p>
      <p class="llf"><i>Groom</i></p>
    </div>
    <div class="image-wrapper">
      <img src={nature} alt="Bride 2"/>
      <p class="lef"><b>DAS BABU</b></p>
      <p class="llf"><i>Groom</i></p>
    </div>
    <div class="image-wrapper">
      <img src={nature} alt="Bride 2"/>
      <p class="lef"><b>DAS BABU</b></p>
      <p class="llf"><i>Groom</i></p>
    </div>
  </div>
  </div>
  <div class="groom-section animate-right">
  <p class="top">ON THE GROOM'S SIDE</p>
  <div class="groom-row">
    <div class="image-wrapper">
      <img src={nature} alt="Groom 1"/>
      <p class="lef"><b>DAS BABU</b></p>
      <p class="llf"><i>Groom</i></p>
    </div>
    <div class="image-wrapper">
      <img src={nature} alt="Groom 2"/>
      <p class="lef"><b>DAS BABU</b></p>
      <p class="llf"><i>Groom</i></p>
    </div>
    <div class="image-wrapper">
      <img src={nature} alt="Bride 2"/>
      <p class="lef"><b>DAS BABU</b></p>
      <p class="llf"><i>Groom</i></p>
    </div>
  </div>
  </div>
  </div>*/}

</div>

<br/>
<br/>
</div> 
<div id="weddingdetails" className="section">
<div class="parallax"></div>

<div class="container my-5">
  
<img src={libreak} class="libreak" alt="..."/>
<br/>
<br/>

{/* <p class="cen "><b>WEDDING DETAILS</b></p> */}

<div className="section-title position-relative text-center">
                        <h6 className="text-uppercase  mb-3 glow" style={{ letterSpacing: "3px", color:"orange" }}>WEDDING DETAILS</h6>
                        {/* <h1 className="font-secondary display-4">Groomsmen & Bridesmaid</h1> */}
                {/* <h1 class="cen" style={{letterSpacing: "3px", color: "#34c7a9"}}>Groomsmen & Bridesmaid</h1> */}
                <h1 class="cen "style={{letterSpacing: "3px"}}><b>WEDDING DETAILS</b></h1>
                <p>------------------------------------------<i class="icon ion-heart text-dark" ></i>------------------------------------------</p>
                    </div>

<br/>
<p class="lef"><b>WEDDING DETAILS</b></p>
<div class="event-container">
  <div class="event">
    <div class="date-time animate-left">
        <br/>
      <p class="gr llf"><b>Day</b></p>
      <p class="llf">3:00 PM</p>
    </div>
    <div class="event-details animate-right">
      <br/>
      <br/>
      <br/>
      <p class="llf ">Holiday Inn check-in time for guests arriving on Friday</p>
    </div>
  </div>
  <div class="event">
    <div class="date-time animate-left">
      <p class="llf">9:00 PM</p>
    </div>
    <div class="event-details animate-right">
      <p class="llf ">Join us as we take over the lobby/party space at the Residence Inn across the parking lot from the Holiday Inn; light snacks, beer, and wine will be provided</p>
    </div>
  </div>
</div>

<br/>
<br/>
<hr/>
<br/>
<br/>
<p class="lef"><b>MAP AND DIRECTIONS</b></p>
<br/>
<div class="containerclg">
  <div class="left-block1 animate-left">
<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30615.189138250254!2d80.97141085317833!3d16.42997330887826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a361ca9703a5305%3A0xb92bbf81640f13be!2sGudivada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1712660643461!5m2!1sen!2sin"  allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
<div class="right-block1 animate-right">
  <br/>
    <p class="lef llf"><b>Address:</b></p>
    <p class="llf">Join us as we take over the lobby/party space at the Residence Inn across the parking lot from the Holiday Inn; light snacks, beer, and wine will be provided</p>
</div>
</div>
</div>
</div>
<br/>
<br/>
<hr/>




<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>          
</>
    );
}
export default Home;