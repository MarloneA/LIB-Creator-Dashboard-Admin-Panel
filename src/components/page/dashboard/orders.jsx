import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import LinkModal from './linkcardmodal';

import { Link as RLink } from "react-router-dom";

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

// Generate Order Data
function createData(full_names, dob, bio, pricing, public_url) {
  return { full_names, dob, bio, pricing, public_url  };
}

export default function Orders({ supabase, currentUserCards }) {

  let currentuser = localStorage.getItem("user")

  const rows = currentUserCards.map(card => {
    const {
      id,
      created_at,
      full_names,
      dob,
      bio,
      links,
      userid,
      pricing,
      public_url,
    } = card;

    return createData(
        full_names,
        dob,
        bio,
        pricing,
        public_url
      )
  })
  
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Card Details
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Bio</TableCell>
            <TableCell>pricing</TableCell>
            <TableCell>public profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.full_names}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.bio}</TableCell>
              <TableCell>{row.pricing}</TableCell>
             
              {row.public_url ? <TableCell><a target="_blank" href={`http://linknfc.com/${currentuser}/profile/${row.public_url.replace("linknfc.com/", "")}`}>{row.public_url}</a></TableCell> :  (<TableCell><LinkModal supabase={supabase} /></TableCell>) }
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <br/>

      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        My Links
      </Typography>
      {currentUserCards.map(card => {

        let parsedLinks = card.links.map(link => JSON.parse(link))

        return parsedLinks.map(link => (
          <div style={{
            display: "flex",
          }}>
            {link.value === "website" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "whatsapp" ? <img width="65px" src={whatsapp} alt={link.value} /> : ""}
            {link.value === "instagram" ? <img width="65px" src={instagram} alt={link.value} /> : ""}
            {link.value === "x" ? <img width="65px" src={twitter} alt={link.value} /> : ""}
            {link.value === "linkedin" ? <img width="65px" src={linkedin} alt={link.value} /> : ""}
            {link.value === "telegram" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "calendly" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "snapchat" ? <img width="65px" src={snap} alt={link.value} /> : ""}
            {link.value === "tiktok" ? <img width="65px" src={tiktok} alt={link.value} /> : ""}
            {link.value === "youtube" ? <img width="65px" src={youtube} alt={link.value} /> : ""}
            {link.value === "pinterest" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "spotify" ? <img width="65px" src={spotify} alt={link.value} /> : ""}
            {link.value === "apple" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "resume" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "bankdetails" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "discord" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "reviews" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "customlink" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            {link.value === "googlebusinessprofile" ? <img width="65px" src={logo} alt={link.value} /> : ""}
            <p><a target='_' href={link.url}>{link.label}</a></p>
          </div>
        ))

      })}

      <Link color="primary" href="/"  sx={{ mt: 3 }}>
        back home
      </Link>
    </React.Fragment>
  );
}