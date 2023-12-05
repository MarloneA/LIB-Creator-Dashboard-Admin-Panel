import React from 'react';
import { Link } from "react-router-dom";
import './index.css'
import hero from "../../../assets/hero-image.png"
import ProfileSetupWizard from '../../atoms/ProfileSetupWizard'

export default function Profile({session, supabase}) {
  return (
    <div className='mainProfile'>
      <div className='leftSection'>
        <h1>Welcome, Lets get your card setup</h1>
        <img src={hero} alt="nfcCard" width="500px" />
        <Link to="/"><button className="affiliate-btn">Back to home</button></Link>
      </div>
      <div className='rightSection'>     
        <ProfileSetupWizard session={session} supabase={supabase} />
      </div>
    </div>
  );
}
