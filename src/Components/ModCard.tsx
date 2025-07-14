import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Box } from '@mui/material';

export default function ModCard(props: any) {
    const [modImage, setModImage] = useState();
    const [modTitle, setModTitle] = useState();
    const [modDesc, setModDesc] = useState();
    const [downloads, setDownloads] = useState();
    const [comments, setComments] = useState();

    return (
        <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
        <CardMedia
            sx={{ height: 200, backgroundPosition: 'top' }}
            image={props.image}
            title={props.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {props.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {props.desc}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>                  
            <Button size="small">More</Button>
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="subtitle1" component="div">{props.downloads}</Typography>
            <Typography variant="subtitle1" component="div">{props.comments}</Typography>
        </CardActions>
        </Card>
    );
}
