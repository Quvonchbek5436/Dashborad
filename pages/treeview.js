import React from 'react'
import {Box, Typography} from "@mui/material";
import OurTreeView from "../components/treeWiev/treeWiev";

export default function treeview() {
  return (
      <Box sx={{padding: ' 16px '}}>

        <Box sx={{padding: ' 0 15px 15px'}}>
          <Typography sx={{fontSize: '16px', color: '#777E89'}} component={'h2'}
                      variant={'h5'}>Home / Treeview</Typography>
          <Typography sx={{marginBottom: '20px', fontSize: '30px', fontWeight: 'bold'}} component={'h1'}
                      variant={'h3'}>Treeview</Typography>
        </Box>

        <Box sx={{
          width: '100%',
          maxWidth: '1920px',
          borderRadius: '20px',
          overflow: 'auto',
          boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
          backgroundColor: 'white',
          padding: ' 16px ',
          maxHeight:'223px'
        }}>
          <OurTreeView/>
        </Box>
      </Box>
  )
}
