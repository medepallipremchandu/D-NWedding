import React from "react"
import "./footer.scss"
import feather from 'feather-icons';
import "./Home.js"

function Footer(){
  feather.replace()
  return(
    <footer class="footer">
        <div class="footer__parralax">
          <div class="footer__parralax-trees"></div>
          <div class="footer__parralax-moto"></div>
          <div class="footer__parralax-secondplan"></div>
          <div class="footer__parralax-premierplan"></div>
          <div class="footer__parralax-voiture"></div>
        </div>
        <div class="footer-basic">
            <div class="social"><a href="https://www.instagram.com/mpremchandu13/"><i class="icon ion-social-instagram"></i></a><a href="https://www.snapchat.com/add/mpremchandu13?share_id=oxC2ECYVH70&locale=en-GB"><i class="icon ion-social-snapchat"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">HOME</a></li>
                <li class="list-inline-item"><a href="#thebrideandgroom">THE BRIDE AND GROOM</a></li>
                <li class="list-inline-item"><a href="#weddingparty">THE WEDDING PARTY</a></li>
                <li class="list-inline-item"><a href="#weddingdetails">WEDDING DETAILS</a></li>
            </ul>
            <p class="copyright">MPCH © 2024</p>
        </div>
      </footer>
  );
}
export default Footer;