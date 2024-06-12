import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import hero from "../../../assets/hero-image.png";
import fb from "../../../assets/facebook.svg";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import spotify from "../../../assets/spotify.svg";
import youtube from "../../../assets/youtube.svg";
import instagram from "../../../assets/instagram.svg";
import whatsapp from "../../../assets/whatsapp.svg";
import twitter from "../../../assets/twitter.svg";
import snap from "../../../assets/snap.svg";
import tiktok from "../../../assets/tiktok.svg";
import logo from "../../../assets/logo.svg";
import { Alert } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";

export default function Home({ supabase }) {
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    localStorage.clear();
    console.log("error: ", error);
  };

  const [cardId, setCardId] = useState(0);
  const { user } = useContext(AuthContext);
  let currentUser = localStorage.getItem("user");

  console.log("cardId: ", cardId);
  console.log("user: ", user);

  useEffect(() => {
    return async () => {
      let { data: CardDetails, error } = await supabase
        .from("CardDetails")
        .select("*")
        .eq("userid", currentUser);

      console.log("CardDetails: ", CardDetails);
      if (error) throw error; //check if there was an error fetching the data and move the execution to the catch block
      if (CardDetails) setCardId(CardDetails);
    };
  }, []);

  return (
    <section>
      <section className="landingpage">
        {/* {!user?.identities[0]?.identity_data?.email_verified && (
          <Alert sx={{ mb: 3 }} severity="success">{ "Check your email to verify your account" }</Alert>
        )} */}
        <nav>
          <section className="pagelinks">
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
            {!currentUser && (
              <a a href="#affiliate-page">
                <button className="affiliate-btn">
                  Join Affiliate Program
                </button>
              </a>
            )}
            {!currentUser && (
              <Link to="/register">
                <button className="sign-up-btn">Sign Up or Login</button>
              </Link>
            )}
            {currentUser && (
              <Link to={`/profile/${currentUser}/dashboard`}>
                <button className="sign-up-btn">My Links</button>
              </Link>
            )}
            {currentUser && (
              <Link to="/login">
                <button onClick={logout} className="affiliate-btn">
                  logout
                </button>
              </Link>
            )}
          </section>
        </nav>
        <div className="hero">
          <div className="hero-content">
            <h1>Connecting business, one tap at a time</h1>
            <h4>
              Experience the future of networking with Link NfC - where sharing
              your major sites with your network doesn't have to be a hustle
            </h4>
            <section>
              {/* <Link to="/profile"><button className="sign-up-btn">Get Card</button></Link> */}
              {currentUser && (
                <Link to={`/profile/${currentUser}/dashboard`}>
                  <button className="sign-up-btn">View my Links</button>
                </Link>
              )}
              {!currentUser && (
                <Link to="/register">
                  <button className="sign-up-btn">Sign Up for free</button>
                </Link>
              )}
              <a a href="#affiliate-page">
                <button className="affiliate-btn">
                  Join Affiliate Program
                </button>
              </a>
            </section>
          </div>
          <div>
            <img src={hero} alt="nfcCard" />
          </div>
        </div>
        <p className="social-links-tagline">
          Share your links from your favorite platforms at the tap of a card
        </p>
        <div className="media-icons">
          <img src={instagram} alt="facebook logo" width="65px" />
          <img src={fb} alt="facebook logo" width="65px" />
          <img src={twitter} alt="facebook logo" width="65px" />
          <img src={whatsapp} alt="facebook logo" width="65px" />
          <img src={snap} alt="facebook logo" width="65px" />
          <img src={tiktok} alt="facebook logo" width="65px" />
          <img src={spotify} alt="facebook logo" width="65px" />
          <img src={github} alt="facebook logo" width="65px" />
          <img src={linkedin} alt="facebook logo" width="65px" />
          <img src={youtube} alt="facebook logo" width="65px" />
        </div>
      </section>
      <section id="price-page" className="pricing">
        <div className="pricingContainer">
          <h1>Choose a plan that works for you</h1>
          <div className="priceList">
            <div className="pricingCard">
              <p>Free Plan</p>
              <h4>$0.0</h4>
              <div className="priceplan">
                <h5>Major 3 links:</h5>
                <h5>(Whatsapp, Instagram, Linkedin)</h5>
                <h5>Profile Photo</h5>
                <h5>Link NFC Banner</h5>
                <h5>Link NFC Ad</h5>
                <h5>when card </h5>
                <h5>is scanned</h5>
              </div>
              <Link to="/profile">
                <button
                  onClick={() => updateItem("free", cardId)}
                  className="sign-up-btn"
                >
                  Get Card
                </button>
              </Link>
            </div>

            <div className="pricingCard">
              <p>Basic Plan</p>
              <h4>$0.0</h4>
              <div className="priceplan">
                <h5>Customized Card</h5>
                <h5>with Watermark</h5>
                <h5>2 profiles</h5>
                <h5>Profile Photo</h5>
                <h5>Custom Banner</h5>
                <h5>Multiple Links</h5>
                <h5>No Ads</h5>
              </div>
              <Link to="/profile">
                <button
                  onClick={() => updateItem("basic", cardId)}
                  className="sign-up-btn"
                >
                  Get Card
                </button>
              </Link>
            </div>

            <div className="pricingCard">
              <p>Premium Plan</p>
              <h4>$0.0</h4>
              <div className="priceplan">
                <h5>Customized Card</h5>
                <h5>No Water Mark</h5>
                <h5>5 profiles</h5>
                <h5>Profile Photo</h5>
                <h5>Custom Banner</h5>
                <h5>Multiple Links</h5>
                <h5>No Ads</h5>
              </div>
              <Link to="/profile">
                <button
                  onClick={() => updateItem("premium", cardId)}
                  className="sign-up-btn"
                >
                  Get Card
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="affiliate-page" className="affiliate">
        <h1>Affiliate Program</h1>
        <div className="banner">
          <h4>Get 20% commission for every referral</h4>
          <button
            className=" affiliate-btn"
            onClick={() => alert("affiliate program")}
          >
            Learn more
          </button>
        </div>
      </section>
    </section>
  );
}
