import React from 'react'
import {Box, Typography} from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function alertPer() {
  return (
      <Box sx={{padding: '16px'}}>

        <Box sx={{padding: '15px'}}>
          <Typography component={'h2'} variant={'h5'}>Home / Alert</Typography>
          <Typography sx={{marginBottom: '20px'}} component={'h1'} variant={'h3'}>Alert</Typography>
        </Box>

        <Box  sx={{
          width: '100%',
          maxWidth: '1920px',
          boxShadow: 15,
          borderRadius: '20px',
          maxHeight: '460px',
          border: '1px solid #E0E0E0',
          overflow:'hidden'

        }}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="error">
              This is an error alert — check it out!
            </Alert>
            <Alert variant="filled" severity="warning">
              This is a warning alert — check it out!
            </Alert>
            <Alert variant="filled" severity="info">
              This is an info alert — check it out!
            </Alert>
            <Alert variant="filled" severity="success">
              This is a success alert — check it out!
            </Alert>
          </Stack>
        </Box>
      </Box>

  )
}
