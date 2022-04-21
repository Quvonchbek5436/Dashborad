import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown(props) {
    const [age, setAge] = React.useState('');
    const la=props.hero

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label={la}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>March 2021</MenuItem>
                    <MenuItem value={20}>March 2020</MenuItem>
                    <MenuItem value={30}>March 2019</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}