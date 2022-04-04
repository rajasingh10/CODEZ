import React from 'react'
import "../styles/Navbar.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Navbar = ({ handleContest, handlePlatform, platformList }) => {
    const [platform, setPlatform] = React.useState('all');
    const [contest, setContest] = React.useState('all');
    const platformdata = [... new Set(platformList)];

    const handleChangeContest = (event) => {
        handleContest(event.target.value);
        setContest(event.target.value)
    };
    const handleChangePlatform = (event) => {
        handlePlatform(event.target.value);
        setPlatform(event.target.value)
    };
    return (
        <div className="navbar">
            <div className="header"><h2>Codez</h2></div>

            <div className='navbar_form'>
                <Box sx={{ minWidth: 220, marginBottom: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="contest-select-label">Contest</InputLabel>
                        <Select
                            labelId="contest-select-label"
                            id="contest-select-label"
                            value={contest}
                            label="Contest"
                            onChange={handleChangeContest}
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="Ongoing">Ongoing</MenuItem>
                            <MenuItem value="Upcoming">Upcoming</MenuItem>

                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 220, marginBottom: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="platform-select-label">Platform</InputLabel>
                        <Select
                            labelId="platform-select-label"
                            id="platform-select-label"
                            value={platform}
                            label="platform"
                            onChange={handleChangePlatform}
                        >
                            <MenuItem value="all">All</MenuItem>
                            {platformdata.map((data, index) => <MenuItem value={data}>{data}</MenuItem>)}

                        </Select>
                    </FormControl>
                </Box>
            </div>

        </div>
    )
}

export default Navbar;