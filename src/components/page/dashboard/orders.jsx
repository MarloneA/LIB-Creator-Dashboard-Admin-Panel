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



// Generate Order Data
function createData(full_names, dob, bio, links, pricing) {
  return { full_names, dob, bio, links, pricing };
}

export default function Orders({ currentUserCards }) {

  
  const rows = currentUserCards.map(card => {
    
    const { full_names, dob, bio, links, pricing, public_url } = card;
    
    let concatLinks = links.map(link => link.url)
    
    return createData(
        full_names,
        dob,
        bio,
        links,
        pricing,
        public_url
      )
      
    })
    console.log('rows: ', rows);
  
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Cards
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Bio</TableCell>
            <TableCell>Links</TableCell>
            <TableCell>pricing</TableCell>
            <TableCell align="center">public profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.pricing}>
              <TableCell>{row.full_names}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.bio}</TableCell>
              <TableCell>{row.links}</TableCell>
              <TableCell>{row.pricing}</TableCell>
              {row.public_url? <TableCell>{row.public_url}</TableCell> : <TableCell align="right"><LinkModal/></TableCell> }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="/"  sx={{ mt: 3 }}>
        back home
      </Link>
    </React.Fragment>
  );
}