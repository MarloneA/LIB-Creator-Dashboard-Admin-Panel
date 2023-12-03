import React from "react";
import { Link } from "react-router-dom";
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
      <section className="landingpage">
        <nav>
          <p className="logo">Link NFC</p>
          <section>
            <Link to="/about"> 
              <p>About</p>
            </Link>
            <a href="#price-page"> 
              <p>Pricing</p>
            </a>
            <Link to="/contact"> 
              <p>Contact</p>
            </Link>
          </section>
          <section className="btnGrp">
            <button onClick={() => alert("affiliate")} className="affiliate-btn">Affiliate Program</button>
            <button onClick={() => alert("user is signing up")} className="sign-up-btn">Sign Up for free</button>
          </section>
        </nav>
        <section className="hero">
          <div className="hero-content">
            <h1>Connecting business, one tap at a time</h1>
            <h4>Experience the future of networking with Link NfC - where sharing your major sites with your network doesn't have to be a hustle</h4>
            <section>
            <Link to="/profile"><button className="sign-up-btn">Get Card</button></Link>
              <button onClick={() => alert("join affiliate program")} className="affiliate-btn">Affiliate Program</button>
            </section>
          </div>
          <div>
            <img src={hero} alt="nfcCard" />
          </div>
        </section>
        <p className="social-links-tagline">Share your links from popular platforms at the tap of card</p>
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

      <section id="price-page" className="pricing">

        <div className="pricingContainer">
          <h1>Choose a plan that works for you</h1>
          <div className="priceList">
            <div className="pricingCard">
              <p>Free Plan</p>
              <h4>$0.0</h4>
              <div>
                <h5>Major 3 links:</h5>
                <h5>(Whatsapp, Instagram, Linkedin)</h5>
                <h5>Profile Photo</h5>
                <h5>Link NFC Banner</h5>
                <h5>Link NFC Ad</h5>
                <h5>when card </h5>
                <h5>is scanned</h5>
              </div>
              <Link to="/profile">
                <button className="sign-up-btn">Get Card</button>
                </Link>
            </div>

            <div className="pricingCard">
              <p>Basic Plan</p>
              <h4>$0.0</h4>
              <div>
                <h5>Customized Card</h5>
                <h5>with Watermark</h5>
                <h5>2 profiles</h5>
                <h5>Profile Photo</h5>
                <h5>Custom Banner</h5>
                <h5>Multiple Links</h5>
                <h5>No Ads</h5>
              </div>
              <Link to="/profile">
                <button className="sign-up-btn">Get Card</button>
                </Link>
            </div>

            <div className="pricingCard">
              <p>Premium Plan</p>
              <h4>$0.0</h4>
              <div>
                <h5>Customized Card</h5>
                <h5>No Water Mark</h5>
                <h5>5 profiles</h5>
                <h5>Profile Photo</h5>
                <h5>Custom Banner</h5>
                <h5>Multiple Links</h5>
                <h5>No Ads</h5>
              </div>
              <Link to="/profile">
                <button className="sign-up-btn">Get Card</button>
                </Link>
            </div>
          </div>
        </div>

      </section>

      <section id="affiliate-page" className="affiliate">
        <h1>Affiliate Program</h1>
        <div className="banner">
          <h4>Get 20% commission for every referral</h4>
          <button className=" affiliate-btn" onClick={() => alert("affiliate program")}>Learn more</button>
        </div>
      </section>
    </section>
  );
}