import React, {useEffect, useState} from 'react'
import {
    Box,
    Button,
    Divider, Drawer,
    FormControl,
    IconButton,
    Input,
    TextareaAutosize,
    Typography
} from "@mui/material";
import {RiDeleteBinLine} from "react-icons/ri";
import {FiMenu} from "react-icons/fi";
import {useSelector} from "react-redux";
import {removeNotes} from "../Redux/actions/doing";
import ColorButton from "../components/ColorButton";


function Notes() {
    const noteApp = useSelector((state) => state.messages.noteApp)
    const [selectedNote, setSelectedNote] = useState()
    const [searchValue, setSearchValue] = useState("")

    const search = (e) => {
        const name = e.target.value
        setSearchValue(name)
    }

    const removeNotesItem = (index) => {
        removeNotes(index)
    }

    const setNoteIndex = (note) => {
        setSelectedNote(note)
    }

    useEffect((note)=>{
        setSelectedNote(note)
    },[selectedNote])



    //-------------------------------------------------------------------------------------

    // Drower

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={{width: '273px'}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/*<Button sx={{float:'right'}} variant={'contained'}><TiDeleteOutline/></Button>*/}
            <Box sx={{
                padding: '16px',
                borderRight: '1px solid #E0E0E0',
            }}>
                <FormControl sx={{width: '100%',}}>
                    <Input sx={{
                        border: '1px solid #E0E0E0',
                        padding: '5px',
                        borderRadius: '5px',
                        '&:hover': {borderColor: 'black',},
                        '&::before,&::after': {display: 'none'}
                    }}
                           placeholder={'Search contact'} onChange={(e) => search(e)}/>
                </FormControl>
            </Box>
            <Divider/>
            <Box sx={{overflow: 'auto', borderRight: '1px solid #E0E0E0'}}>
                {

                    noteApp.map((item, index) => (
                        item.text.toLocaleLowerCase().includes(searchValue) &&
                        <Box onClick={() => setNoteIndex(item)} key={index} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '90px',
                            width: '259px !important',
                            borderBottom: '1px solid #E0E0E0'
                        }}>
                            <Box sx={{width: '5px', height: '90px', backgroundColor: `${item.color}`}}>

                            </Box>
                            <Box sx={{paddingLeft: '14px', height: '90px important', width: '100%'}}>
                                <Typography sx={{
                                    fontWeight: "bold",
                                    width: '240px !important',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}>{item.text}</Typography>
                                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Typography sx={{fontSize: '14px', color: '#777E89'}}>{item.time}</Typography>
                                    <IconButton sx={{fontSize: '16px'}}
                                                onClick={() => removeNotesItem(index)}><RiDeleteBinLine/></IconButton>
                                </Box>
                            </Box>
                        </Box>

                    ))
                }
            </Box>
        </Box>
    );


    return (
        <Box sx={{padding: ' 16px'}}>
            <Box sx={{padding: '0 15px 15px',}}>
                <Typography>Home / Notes</Typography>
                <Typography sx={{fontSize: '30px', fontWeight: 'bold'}} component="h1">Note app</Typography>
            </Box>
            <Box sx={{
                width: '100%',
                maxWidth: '1920px',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: 'white',
                boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
            }}>
                <Box sx={{display: 'flex', width: '100%', borderBottom: '1px solid #E0E0E0'}}>
                    <Box sx={{
                        width: '228.1px !important',
                        padding: '16px',
                        borderRight: '1px solid #E0E0E0',
                        display: {lg: 'inline-block', md: 'none', sm: 'none', xs: 'none'}
                    }}>
                        <FormControl sx={{width: '100%',}}>
                            <Input sx={{
                                border: '1px solid #E0E0E0',
                                padding: '5px',
                                borderRadius: '5px',
                                '&:hover': {borderColor: 'black',},
                                '&::before,&::after': {display: 'none'}
                            }}
                                   placeholder={'Search Notes'} onChange={(e) => search(e)}/>
                        </FormControl>
                    </Box>
                    <Box sx={{flex: 1, padding: '16px', display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            {['left'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <IconButton sx={{display: {lg: 'none', md: 'inline', sm: 'inline', xs: 'inline'}}}
                                                onClick={toggleDrawer(anchor, true)}><FiMenu/></IconButton>
                                    <Drawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        {list(anchor)}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </div>
                        <Button variant="contained" sx={{
                            color: 'white',
                            borderRadius: '5px',
                        }}>Add Notes</Button>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', width: '100%', height: '378px', overflow: 'hidden'}}>
                    <Box sx={{
                        width: '260px !important',
                        overflow: 'auto',
                        borderRight: '1px solid #E0E0E0',
                        display: {lg: 'inline-block', md: 'none', sm: 'none', xs: 'none'}
                    }}>
                        {
                            noteApp.map((item, index) => (
                                item.text.toLocaleLowerCase().includes(searchValue) &&
                                <Box onClick={() => setNoteIndex(item.text)} key={index} sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '90px',
                                    width: '259px !important',
                                    borderBottom: '1px solid #E0E0E0'
                                }}>
                                    <Box sx={{width: '5px', height: '90px', backgroundColor: `${item.color}`}}>

                                    </Box>
                                    <Box sx={{paddingLeft: '14px', height: '90px important', width: '100%'}}>
                                        <Typography sx={{
                                            fontWeight: "bold",
                                            width: '240px !important',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}>{item.text}</Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography
                                                sx={{fontSize: '14px', color: '#777E89'}}>{item.time}</Typography>
                                            <IconButton sx={{fontSize: '16px'}}
                                                        onClick={() => removeNotesItem(index)}><RiDeleteBinLine/></IconButton>
                                        </Box>
                                    </Box>
                                </Box>


                            ))
                        }
                    </Box>

                    <Box sx={{flex: 1, padding: '16px',}}>
                        <Typography sx={{mt: '15px', mb: '5px'}}>Edit Note</Typography>
                        <TextareaAutosize
                            // aria-label="maximum height"
                            placeholder="Maximum 4 rows"
                            defaultValue={selectedNote}
                            style={{
                                width: '97%',
                                height: '100px',
                                textOverflow: 'ellipsis',
                                overflow: 'auto',
                                borderRadius: '7px',
                                padding: '14px'
                            }}
                        />
                        <Typography sx={{mt: '15px', mb: '5px'}}>Change Note Color</Typography>
                        <Box display="flex" gap="2px" sx={{ py: 2 }}>
                            <ColorButton color="#0083fc" />
                            <ColorButton color="#00dac5" />
                            <ColorButton color="#9500fe" />
                            <ColorButton color="#ff008a" />
                            <ColorButton color="#3800b7" />
                            <ColorButton color="#ff8b75" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Notes