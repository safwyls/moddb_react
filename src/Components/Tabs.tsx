import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Home from './Home';
import AllMods from './AllMods'
import SubmitMod from './SubmitMod'

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Home" />
        <Tab value="two" label="All mods" />
        <Tab value="three" label="Submit a mod" />
      </Tabs>
    </Box>
  );
}
