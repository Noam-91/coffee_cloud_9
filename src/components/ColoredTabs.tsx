import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import classes from './ColoredTabs.module.scss'
import {constants} from "../shared/appConstants";

export default function ColorTabs() {
    const [value, setValue] = React.useState('Coffee Beans');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Tabs
                className={classes.Tabs}
                value={value}
                onChange={handleChange}
                textColor={'secondary'}
                sx={{
                    '& .MuiTabs-indicator': { backgroundColor: constants.orangeColor },
                    '& .MuiTab-root': { color: constants.orangeColor },
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                aria-label="Coffee Products"
            >
                <Tab value="Coffee Beans" label="Beans" sx={{ width: '15%' }} />
                <Tab value="Coffee Drinks" label="Drinks" />
                <Tab value="Coffee Makers" label="Coffee Makers" />
                <Tab value="Mugs & Bottles" label="Mugs & Bottles" />
                <Tab value="Others" label="Others" />
            </Tabs>
        </Box>
    );
}