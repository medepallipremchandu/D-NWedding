import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/bridegallery.css"
import wedding from "../images/wedding.jpg"
import underwater from "../images/underwater.jpg"
import rocks from "../images/rocks.jpg"
import ocean from "../images/ocean.jpg"
import falls from "../images/falls2.jpg"
import mountainsky from "../images/mountainsky.jpg"
import paris from "../images/paris.jpg"
import nature from "../images/nature.jpg"

function GroomGallery(){
    return(
        <>
        <br/>
<div class="container1">
<div class="page-specific">
<div class="row">
  <div class="column">
    <img alt="" src={wedding}/>
    <img alt="" src={rocks}/>
    <img alt="" src={falls}/>
    <img alt="" src={paris}/>
    <img alt="" src={nature}/>
    <img alt="" src={falls}/>
    <img alt="" src={paris}/>
  </div>
  <div class="column">
    <img alt="" src={underwater}/>
    <img alt="" src={ocean}/>
    <img alt="" src={wedding}/>
    <img alt="" src={mountainsky}/>
    <img alt="" src={rocks}/>
    <img alt="" src={underwater}/>
  </div>
  <div class="column">
    <img alt="" src={wedding}/>
    <img alt="" src={rocks}/>
    <img alt="" src={falls}/>
    <img alt="" src={paris}/>
    <img alt="" src={nature}/>
    <img alt="" src={falls}/>
    <img alt="" src={paris}/>
  </div>
  <div class="column">
    <img alt="" src={underwater}/>
    <img alt="" src={ocean}/>
    <img alt="" src={wedding}/>
    <img alt="" src={mountainsky}/>
    <img alt="" src={rocks}/>
    <img alt="" src={underwater}/>
  </div>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>

        </>
    );
}
export default GroomGallery;