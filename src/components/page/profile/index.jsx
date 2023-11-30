import React from 'react';
import './index.css'
import hero from "../../../assets/hero-image.png"

export default function Profile() {
  return (
    <main>
      <div className='leftSection'>
        <h1>Welcome, Lets get your card setup</h1>
        <img src={hero} alt="nfcCard" width="500px" />
        <button onClick={() => alert("navigate back to homepage")} className="affiliate-btn">Back to home</button>
      </div>
      <div className='rightSection'>
          
      </div>
    </main>
  );
}
