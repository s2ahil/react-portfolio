import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ({ Image, Name, Desc, LiveLink, Repo }) {
  return (
    <Card sx={{
      maxWidth: 345,
      minHeight:380,
      '&:hover': {
        backgroundColor: '#1976D2', // Change this to your desired color
        color: 'white', // Change this to your desired text color
        transition: 'background-color 0.5s, color 0.5s', // Add transitions for a smoother effect
      },
    }}

    >
      <CardMedia
      width={300}
      height={200}
        component="img"
        alt={Name}
       
        image={Image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {Name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ fontWeight: "bold" }}>
          {Desc}
        </Typography>
      </CardContent>

      <CardActions>
        <div style={{ width: "100%" }}>
          <Button size="small" href={LiveLink} style={{ color: "black" }}>LiveLink</Button>
          <Button size="small" href={Repo} style={{ color: "black" }}>Repo Link</Button>

        </div>
      </CardActions>
    </Card>
  );
}


