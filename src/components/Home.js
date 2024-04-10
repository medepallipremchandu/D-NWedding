import React, { useState, useEffect } from "react";
import "./Home.css";
import nature from "../images/nature.jpg"
import ocean from "../images/ocean.jpg"
import falls from "../images/falls2.jpg"
import libreak from "../images/libreak.png"


function Home() { 
  const weddingDate = new Date('2024-04-25T00:00:00');
  const [countdownText, setCountdownText] = useState('');
  const [currentSection, setCurrentSection] = useState(null);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdownText(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
  }

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


  // function isInViewport(element) {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  // // Function to handle scroll event
  // function handleScroll() {
  //   const animateElements = document.querySelectorAll('.animate-left, .animate-right');
  //   animateElements.forEach(element => {
  //     if (isInViewport(element)) {
  //       element.classList.add('animate');
  //     }
  //   });
  // }

  // // Event listener for scroll
  // window.addEventListener('scroll', handleScroll);

  // // Trigger the initial check on page load
  // handleScroll();
  
    return(
        <>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={nature} class="d-block w-100 img2" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={falls} class="d-block w-100 img2" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={ocean} class="d-block w-100 img2" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
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
<div class="container my-5">
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
</div>
<div id="thebrideandgroom" className="section">
<div class="parallax"></div>
    <br/>
    <br/>
    <div class="container my-5">
    <img src={libreak} class="libreak" alt="..."/>
    
    <br/>
    <br/>

<p class="cen"><b>THE BRIDE AND GROOM</b></p>
<br/>
<br/>
<section>
  <div class="row">
    <div class="col-lg-6 animate-left">
      <img class="w-100 shadow" src={falls} />
    </div>
    <div class="col-lg-6 animate-right">
      <div class="p-5 mt-4">
      <p class="lef"><b>NIKITHA MEDEPALLI</b></p>
      <p class="llf"><i>Bride</i></p>
      <p class="llf">Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
      <p class="llc">Written by the groom ♥</p>
      </div>
    </div>
</div>
<br/>
<br/>
<hr/>
<br/>
<br/>

<div class="row d-flex">
    <div class="col-lg-6 order-lg-2 animate-right">
      <img class="w-100 shadow" src={falls} />
    </div>
    <div class="col-lg-6 animate-left">
      <div class="p-5 mt-4">
      <p class="lef"><b>DAS BABU</b></p>
      <p class="llf"><i>Groom</i></p>
        <p class="llf">Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
        <p class="llc">Written by the bride ♥</p>
      </div>
    </div>
    </div>
</section>

    </div>
<br/>
<br/>
</div>
<div id="weddingparty" className="section">
<div class="parallax"></div>

<div class="container my-5 " >
<img src={libreak} class="libreak" alt="..."/>

<br/>
<br/>

<p class="cen"><b>THE WEDDING PARTY</b></p>
<br/>
<br/>
<div class="image-container">
  <div class="image-wrapper animate-right">
    <img src={falls} alt="Image 1"/>
    <div class="image-text">
    <p class="lef"><b>bride brothers or sisters</b></p>
      <p class="llf"><i>Bride</i></p>
      <p class="llf">Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
    </div>
  </div>
  <div class="image-wrapper animate-left">
    <img src={falls} alt="Image 2"/>
    <div class="image-text">
    <p class="lef"><b>groom brothers or sisters</b></p>
      <p class="llf"><i>Groom</i></p>
      <p class="llf">Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
    </div>
  </div>
</div>

<br/>
<br/>
<hr/>


<div class="container unique-container" >
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
  </div>
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

<p class="cen "><b>WEDDING DETAILS</b></p>
<br/>
<br/>
<hr/>
<p class="lef"><b>WEDDING DETAILS</b></p>
<div class="event-container">
  <div class="event">
    <div class="date-time animate-left">
        <br/>
      <p class="gr"><b>Day</b></p>
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
    <p class="lef"><b>Address:</b></p>
    <p class="llf">Join us as we take over the lobby/party space at the Residence Inn across the parking lot from the Holiday Inn; light snacks, beer, and wine will be provided</p>
</div>
</div>
</div>
</div>
<br/>
<br/>
<hr/>

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




<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                
</>
    );
}
export default Home;