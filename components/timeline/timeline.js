import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import {IoMdTime} from "react-icons/io";
import {FiRepeat} from "react-icons/fi";
import {BsMoon} from "react-icons/bs";
import {GiEating} from "react-icons/gi";
import {Box} from "@mui/system";

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    6:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot   sx={{backgroundColor:'rgb(11 178 251)',color:'white',fontSize:'24px',width:'30px',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <IoMdTime />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Box sx={{ backgroundColor:'blur.main',py: '12px', px: 2,borderRadius:'15px'}}>
                    <Typography variant="h6" component="span" sx={{fontSize:'18px'}}>
                        Wake up
                    </Typography>
                    <Typography>Because you have many things to do</Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    9:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="warning" sx={{color:'white',fontSize:'24px',width:'30px',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <GiEating />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Box sx={{ backgroundColor:'rgb(255 244 229)',py: '12px', px: 2,borderRadius:'15px'}}>
                    <Typography variant="h6" component="span" sx={{fontSize:'18px'}}>
                        Eat
                    </Typography>
                    <Typography>Because you need strength</Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    10:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot  color="success" sx={{color:'white',fontSize:'24px',width:'30px',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Box sx={{ backgroundColor:'rgb(235 250 242)',py: '12px', px: 2,borderRadius:'15px'}}>
                    <Typography variant="h6" component="span" sx={{fontSize:'18px'}}>
                        Code
                    </Typography>
                    <Typography>Because it&apos;s awesome!</Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    12:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="danger" sx={{color:'white',fontSize:'24px',width:'30px',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <BsMoon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Box sx={{ backgroundColor:'rgb(255 244 229)',py: '12px', px: 2,borderRadius:'15px'}}>
                    <Typography variant="h6" component="span" sx={{fontSize:'18px'}}>
                        Sleep
                    </Typography>
                    <Typography>Because you need rest</Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    12:41 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot  sx={{color:'white',fontSize:'24px',width:'30px',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}    color="primary">
                        <FiRepeat />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Box sx={{ backgroundColor:'blur.main',py: '12px', px: 2,borderRadius:'15px'}}>
                        <Typography variant="h6" component="span" sx={{fontSize:'18px'}}>
                            Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
