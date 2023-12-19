import React, {useEffect, useState} from 'react';
import { Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';

import fb from "../../../assets/facebook.svg"
import github from "../../../assets/github.svg"
import linkedin from "../../../assets/linkedin.svg"
import spotify from "../../../assets/spotify.svg"
import youtube from "../../../assets/youtube.svg"
import instagram from "../../../assets/instagram.svg"
import whatsapp from "../../../assets/whatsapp.svg"
import twitter from "../../../assets/twitter.svg"
import snap from "../../../assets/snap.svg"
import tiktok from "../../../assets/tiktok.svg"
import logo from "../../../assets/logo.svg"

export default function PublicPage({ supabase }) {

  const { userId: currentUser } = useParams();

  const [currentUserCards, setcurrentUserCards] = useState([])


    useEffect(() => {
      getCardDetails();
    }, []);

    async function getCardDetails() {
      const { data: CardDetails  } =  await supabase.from('CardDetails').select('*').eq('userid', currentUser);
      setcurrentUserCards(CardDetails);
    }

  return (
    <div style={{
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",

      }}
    >
      <Avatar sx={{ width: 80, height: 80 }}></Avatar>
      <h4>{ currentUserCards[0]?.full_names }</h4>
      <h5>{ currentUserCards[0]?.bio }</h5>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexFlow: "row wrap",
          width: "300px",
        }}
      >
      {currentUserCards.map(card => {

        let parsedLinks = card.links.map(link => JSON.parse(link))

        return parsedLinks.map(link => (
          <div style={{
            display: "flex",
          }}>
            {link.value === "website" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "whatsapp" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={whatsapp} alt={link.value} /></a> : ""}
            {link.value === "instagram" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={instagram} alt={link.value} /></a> : ""}
            {link.value === "x" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={twitter} alt={link.value} /></a> : ""}
            {link.value === "linkedin" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={linkedin} alt={link.value} /></a> : ""}
            {link.value === "telegram" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "calendly" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "snapchat" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={snap} alt={link.value} /></a> : ""}
            {link.value === "tiktok" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={tiktok} alt={link.value} /></a> : ""}
            {link.value === "youtube" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={youtube} alt={link.value} /></a> : ""}
            {link.value === "pinterest" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "spotify" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={spotify} alt={link.value} /></a> : ""}
            {link.value === "apple" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "resume" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "bankdetails" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "discord" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "reviews" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "customlink" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
            {link.value === "googlebusinessprofile" ? <a target='_' href={`https://www.${link.url}`}><img width="65px" src={logo} alt={link.value} /></a> : ""}
          </div>
            ))

        })}
      </div>

      <p>powered by linknfc</p>
    </div>
  );
}
