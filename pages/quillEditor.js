import React from 'react'
import {Box, Typography} from "@mui/material";
import Editer from "../components/editer/editer";


export default function quillEditor() {
  return (
      <Box sx={{padding: ' 15px 15px 15px 0'}}>

        <Box sx={{padding: ' 0 15px 15px'}}>
          <Typography sx={{fontSize: '16px', color: '#777E89'}} component={'h2'}
                      variant={'h5'}>Home / Quill Editor</Typography>
          <Typography sx={{marginBottom: '20px', fontSize: '30px', fontWeight: 'bold'}} component={'h1'}
                      variant={'h3'}>Quill Editor</Typography>
        </Box>

        <Box sx={{
          width: '100%',
          maxWidth: '1920px',
          borderRadius: '20px',
          overflow: 'auto',
          boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
          backgroundColor: 'white',
          padding: '15px',
            minHeight:'200px'
        }}>
        <Editer/>
        </Box>
      </Box>
  )
}
