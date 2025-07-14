import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ModCard from './ModCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 12, md: 20 }} sx={{ mt: '1em' }}>
                
                <Grid key="jaunt" size={{ xs: 2, sm: 4, md: 4 }}>
                    <ModCard 
                        image="src/assets/modimages/jaunt.png"
                        title="Jaunt: Entity Movement System"
                        desc="Library providing an extended entity riding system with additional control patterns and stamina"
                        downloads="1252"
                        comments="16"
                    />
                </Grid>

                <Grid key="bloodshedweapons" size={{ xs: 2, sm: 4, md: 4 }}>
                    <ModCard 
                        image="src/assets/modimages/bloodshed.png"
                        title="Bloodshed Weapons"
                        desc="Custom weapons designed for use with Bloodshed Combat Enhancement Mod"
                    />
                </Grid>

                <Grid key="bloodshed" size={{ xs: 2, sm: 4, md: 4 }}>
                    <ModCard 
                        image="src/assets/modimages/bloodshed2.png"
                        title="Bloodshed"
                        desc="Bloodshed: A vanilla combat enhancement mod adding defense blocking and stamina"
                    />
                </Grid>

                <Grid key="beesmoker" size={{ xs: 2, sm: 4, md: 4 }}>
                    <ModCard 
                        image="src/assets/modimages/beesmoker.png"
                        title="Bee Smoker"
                        desc="Adds a bee smoker to prevent bee mob spawn"
                    />
                </Grid>

                <Grid key="equus" size={{ xs: 2, sm: 4, md: 4 }}>
                    <ModCard 
                        image="src/assets/modimages/equus.png"
                        title="Equus: Wild Horses"
                        desc="This mod adds a fictional breed of horses inspired by the eurasian wild horses and feral horses"
                    />
                </Grid>

                <Grid key="monoceros" size={{ xs: 2, sm: 4, md: 4 }}>
                    <ModCard 
                        image="src/assets/modimages/monoceros.png"
                        title="Monoceros"
                        desc="A mod that adds a unicorn as described by Ctesias around 400BC"
                    />
                </Grid>

                <Grid key="genelib" size={{ xs: 2, sm: 4, md: 4 }}>
                    <ModCard 
                        image="src/assets/modimages/default.png"
                        title="Genelib"
                        desc="A library for other mods to calculate genetic inheritance"
                    />
                </Grid>

                <Grid key="tentbag" size={{ xs: 2, sm: 4, md: 4 }}>
                    <ModCard 
                        image="src/assets/modimages/tentbag.png"
                        title="TentBag Reworked"
                        desc="Adds a tent bag for Vintage Story with scaling hunger cost based on tent complexity"
                    />
                </Grid>                

                <Grid key="meltcaster" size={{ xs: 2, sm: 4, md: 4 }}>
                    <ModCard 
                        image="src/assets/modimages/meltcaster.png"
                        title="Meltcaster"
                        desc="Allows you to melt and recast items into other items. Recipes are fully json configurable!"
                    />
                </Grid>
            </Grid>
        </Box>
  );
}