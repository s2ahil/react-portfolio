import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import { Box, Avatar, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import Profile from "../src/images/profile.jpg";
import "./body.css"
import { Link } from 'react-router-dom';
import { Navbar } from './components';
import SpeedDial from '@mui/material/SpeedDial';
import { useState } from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import EmailIcon from '@mui/icons-material/Email';
import MultipleImageDisplay from './reusable components/MultipleImageDisplay';
import Nextjs from "./images/Nextjs.png"
import ReactImage from "./images/react.jpg"
import Express from "./images/express.png"

const actions = [
    { icon: <LinkedInIcon ></LinkedInIcon>, name: 'linkedln', href: "https://www.linkedin.com/in/sahil-pradhan-46a0a31b7/" },
    { icon: <GitHubIcon></GitHubIcon>, name: 'Github', href: "https://github.com/s2ahil" },
    { icon: <EmailIcon></EmailIcon>, name: "Email", href: "mailto:sahilpradhan411@gmail.com" }

];

const TechStack = [
    {
        Image: ReactImage,
        alt: "React"
    }, {
        Image: Nextjs,
        alt: "Next.js"
    }, {
        Image: Express,
        alt: "Express"
    }
];


export default function body() {



    return (

        <>


            <div style={{

                backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )",
                height: "100%",
                width: "100%",


            }} >
                <Navbar></Navbar>

                <div className='flex_center ' style={{ margin: "0 0 6rem", width: "100%", color: "whitesmoke" }}>
                    <Typography variant="h3" style={{ textAlign: "center" }}>FullStack Web Developer </Typography>
                </div>




                <div className='flex_center' >
                    <Box

                        sx={{
                            display: "flex",

                            flexDirection: "column",

                            '@media (max-width:960px)': {
                                margin: "1rem 1rem 0"
                            },
                            maxWidth: "45rem"


                        }}


                    >


                        <div>
                            <Card sx={{ padding: "0 0 5%", backgroundColor: "whitesmoke", color: "black" }}>


                                <Box sx={{ display: "flex", padding: "2%", backgroundColor: "#1976D2" }}>




                                    <Typography sx={{ fontWeight: 'bold', color: "whitesmoke" }}>Introduction</Typography>


                                </Box>
                                <Divider />
                                <Grid container spacing={2} sx={{ padding: "2%" }}>
                                    <Grid item xs={12} lg={9} order={{ xs: 2, lg: 1 }}>
                                        <Typography  >   Hey, I'm Sahil Pradhan. I'm a full stack developer  based in India. I work mainly with React,Nextjs, express.

                                            <span style={{ display: 'block', marginTop: "2%" }}>You can also find me on  <Link to="https://www.linkedin.com/in/sahil-pradhan-46a0a31b7/">Linkedln</Link> and  <Link to="https://github.com/s2ahil">GitHub</Link>, and I’m happy to chat via email: <Link to="sahilpradhan411@gmail.com" underline="always">sahilpradhan411@gmail.com.</Link> </span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={0} lg={3} order={{ xs: 1, lg: 2 }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Avatar aria-label="profile" sx={{ width: 110, height: 110 }} src={Profile}>

                                            </Avatar>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Card>

                            <Box sx={{ marginTop: "2rem", height: 80, }} >
                                <SpeedDial
                                    ariaLabel="SpeedDial basic example"
                                    sx={{}}
                                    icon={<RecentActorsIcon />}
                                    direction='left'
                                >
                                    {actions.map((action) => (

                                        <SpeedDialAction
                                            href={action.href}
                                            key={action.name}
                                            icon={action.icon}
                                            tooltipTitle={action.name}

                                        />

                                    ))}
                                </SpeedDial>
                            </Box>



                        </div>
                    </Box>





                </div>




                <div style={{ width: "100%",color: "whitesmoke", display: "flex", flexDirection: "column", alignItems: "center" ,paddingTop:"2rem"}}>
                    <div>
                        <Typography variant="h3" id="tech-stack" >Tech Stack </Typography>
                    </div>

                    <div style={{
                        display: "flex",
                        gap: "5rem",
                        height: "30rem",
                        padding: "5rem",
                        flexWrap:"wrap",
                       justifyContent:"center"

                    }}>
                        {
                            TechStack.map((ImageItem) => (
                                <MultipleImageDisplay imgsrc={ImageItem.Image}></MultipleImageDisplay>
                            ))
                        }
                    </div>


                </div>

            </div>


        </>

    )
}