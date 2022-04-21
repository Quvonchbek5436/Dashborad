import React from 'react';
import {Avatar, Box, Button, FormControl, Input, TextareaAutosize,  Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";


function Edit(props) {
  return (
      <Box  sx={{padding: ' 16px '}}>
        <Box sx={{padding: '0 15px 15px',}}>
          <Typography>Customer</Typography>
          <Typography sx={{fontSize: '30px',fontWeight: 'bold'}} component="h1">Edit page</Typography>
        </Box>
        <Box>
          <Grid container spacing={2} >
            <Grid item  lg={4} md={12} sm={12} xs={12} >
              <Box sx={{
                borderRadius: '20px',
                overflow:'hidden',
                padding:'24px !important',
                boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
                backgroundColor:'white',
              }}>
                <Avatar sx={{width: '110px',height: '110px'}} src={'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ2NDgsIDIwMjEvMDEvMTItMTU6NTI6MjkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OEEyNUY3Q0I2OTI5MTFFNkI1RkFFNTZFOEYxRjQ0NTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUU1NkI5NTY3QTUyMTFFQjlDRkFGMjgzMTczOUMyOTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUU1NkI5NTU3QTUyMTFFQjlDRkFGMjgzMTczOUMyOTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmU4MzA2ODktZmJiZC1jMjQ2LTkyZGYtNTQ1YmQyNmVjYWUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhBMUM3NjI5NzQ3QzExRTc5Mjg1QkExRkE0QTI1Q0VEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpS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'}/>
                <Typography sx={{fontSize:'24px',fontWeight:'500'}}>Nirav Joshi</Typography>
                <Typography sx={{fontSize:'14px'}}>FullStack Developer</Typography>
                <Typography sx={{fontSize:'14px',margin:'24px 0 8px',fontWeight:'500'}}>Address</Typography>
                <Typography sx={{fontSize:'14px'}}>11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New York, USA</Typography>
                <Button variant="contained" sx={{margin:'24px 0 0',backgroundColor:'#E46A76',fontWeight:'400','&:hover':{backgroundColor:'#E46A60'}}}>Delete Account</Button>
              </Box>
            </Grid>
            <Grid item  lg={8} md={12} sm={12} xs={12}>
              <Box  sx={{
                borderRadius: '20px',
                overflow:'hidden',
                boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
                backgroundColor:'white',
                padding:'24px !important',
              }}>
              <Typography sx={{fontWeight:'600'}}>Edit Details</Typography>
              <Typography sx={{display: 'block',margin:'15px 0 5px'}} >Name</Typography>
              <FormControl sx={{width: '100%'}}>
                <Input sx={{border: '1px solid #E0E0E0',flex:1, padding: '5px', borderRadius: '5px','&:hover': {borderColor: 'black',},
                  '&::before,&::after': {display: 'none'}}}
                       defaultValue={'Nirav Joshi'}
                       placeholder={'Name'} />
              </FormControl>
              <Typography sx={{display: 'block',margin:'15px 0 5px'}} >Email</Typography>
              <FormControl sx={{width: '100%'}}>
                <Input sx={{border: '1px solid #E0E0E0',flex:1, padding: '5px', borderRadius: '5px','&:hover': {borderColor: 'black',},
                  '&::before,&::after': {display: 'none'}}}
                       defaultValue={'nirav@gadga.com'}
                       placeholder={'Email'} />
              </FormControl>
              <Typography sx={{display: 'block',margin:'15px 0 5px'}} >Project Name</Typography>
              <FormControl sx={{width: '100%'}}>
                <Input sx={{border: '1px solid #E0E0E0',flex:1, padding: '5px', borderRadius: '5px','&:hover': {borderColor: 'black',},
                  '&::before,&::after': {display: 'none'}}}
                       defaultValue={'Hosting Press HTML'}
                       placeholder={'Project Name'} />
              </FormControl>
              <Typography sx={{display: 'block',margin:'15px 0 5px'}} >Project Description</Typography>
                <Stack spacing={3}>
                <TextareaAutosize
                  placeholder="Project Description"
                  defaultValue="Sard about this site or you have been to it, but you cannot figure out what it is or what it can do.
 MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. which makes it much easier for someone to find what they are looking for if "
                  style={{ width: '96%',height:'100px',overflow: 'auto',borderRadius:'7px',padding: '14px'}}
              />
                </Stack>
              <Typography sx={{display: 'block',margin:'15px 0 5px'}}>Users</Typography>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(options) => options.title}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            sx={{borderRadius:'20px'}}
                        />
                    )}
                />
              <Typography sx={{display: 'block',margin:'15px 0 5px'}} >Week</Typography>
              <FormControl sx={{width: '100%'}}>
                <Input sx={{border: '1px solid #E0E0E0',flex:1, padding: '5px', borderRadius: '5px','&:hover': {borderColor: 'black',},
                  '&::before,&::after': {display: 'none'}}}
                       type={'number'}
                       defaultValue={'40'}
                       placeholder={'Week'}/>
              </FormControl>
              <Typography sx={{display: 'block',margin:'15px 0 5px'}} >Budget</Typography>
              <FormControl sx={{width: '100%'}}>
                <Input sx={{border: '1px solid #E0E0E0',flex:1, padding: '5px', borderRadius: '5px','&:hover': {borderColor: 'black',},
                  '&::before,&::after': {display: 'none'}}}
                       defaultValue={'2.4 '}
                       placeholder={'Budget'} />
              </FormControl>
              <Button variant="contained" sx={{mt:2}}>Update</Button></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
}

export default Edit

const top100Films = [
  { title: 'Eric',  },
  { title: 'Tushly',  },
  { title: 'Pnaji', },
  { title: 'Joao', },
]