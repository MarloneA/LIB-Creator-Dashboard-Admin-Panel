import React from "react";
import './index.css'
import hero from "../../../assets/hero-image.png"
import fb from "../../../assets/facebook.svg"
import twitch from "../../../assets/twitch.svg"
import soundcloud from "../../../assets/soundcloud.svg"
import github from "../../../assets/github.svg"
import linkedin from "../../../assets/linkedin.svg"
import spotify from "../../../assets/spotify.svg"
import youtube from "../../../assets/youtube.svg"
import instagram from "../../../assets/instagram.svg"


export default function Home() {
  return (
    <section>
      <nav>
        <p className="logo">Link NFC</p>
        <section>
          <a href=""> 
            <p>About</p>
          </a>
          <a href=""> 
            <p>Pricing</p>
          </a>
          <a href=""> 
            <p>Contact</p>
          </a>
        </section>
        <section className="btnGrp">
          <button onClick={() => alert("affiliate")} className="affiliate-btn">Affiliate Program</button>
          <button onClick={() => alert("user is signing up")} className="sign-up-btn">Sign Up for free</button>
        </section>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h1>Connecting business, one link at a time</h1>
          <h4>Experience the future of networking with Link NfC - where sharing your major sites with your network doesn't have to be a hustle</h4>
          <section>
            <button onClick={() => alert("user is signing up")} className="sign-up-btn">Get Card</button>
            <button onClick={() => alert("join affiliate program")} className="affiliate-btn">Affiliate Program</button>
          </section>
        </div>
        <div>
          <img src={hero} alt="nfcCard" />
        </div>
      </section>
      <p className="social-links-tagline">Share your links from popular platforms just at the tap of card</p>
      <section className="media-icons">
        <img src={instagram} alt="facebook logo" width="65px" />
        <img src={fb} alt="facebook logo" width="65px" />
        <img src={twitch} alt="facebook logo" width="65px" />
        <img src={soundcloud} alt="facebook logo" width="65px" />
        <img src={github} alt="facebook logo" width="65px" />
        <img src={spotify} alt="facebook logo" width="65px" />
        <img src={linkedin} alt="facebook logo" width="65px" />
        <img src={youtube} alt="facebook logo" width="65px" />
      </section>
    </section>
  );
}