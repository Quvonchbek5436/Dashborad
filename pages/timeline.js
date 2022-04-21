import React from 'react'
import {Box, Typography} from "@mui/material";
import CustomizedTimeline from "../components/timeline/timeline";

export default function timeline() {
  return (
      <Box sx={{padding: ' 16px '}}>

        <Box sx={{padding: ' 0 15px 15px'}}>
          <Typography sx={{fontSize: '16px', color: '#777E89'}} component={'h2'}
                      variant={'h5'}>Home / Timeline</Typography>
          <Typography sx={{marginBottom: '20px', fontSize: '30px', fontWeight: 'bold'}} component={'h1'}
                      variant={'h3'}>Timeline</Typography>
        </Box>

        <Box sx={{
          width: '100%',
          maxWidth: '1920px',
          borderRadius: '20px',
          boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
          backgroundColor: 'white',
          padding: ' 15px 0',
        }}>
          <CustomizedTimeline/>
        </Box>
      </Box>
  )
}
