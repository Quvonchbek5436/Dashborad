import React from 'react';
import {Box, Button, Typography} from "@mui/material";

function Error(props){

 const backToGo =() =>{

 }
    return (
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'75vh'}}>
            <Box sx={{textAlign:'center'}}>
                <Typography sx={{fontSize:'30px'}}>404</Typography>
                <Typography sx={{margin:'8px 0 24px',fontSize:'18px'}}>This page could not be found.</Typography>
                <Button onClick={()=>backToGo()} variant={'contained'} sx={{color:'white',backgroundColor:'primary.main'}}>Back to Home</Button>
            </Box>
        </Box>
    );
}

export default Error;