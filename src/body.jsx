import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import { Button, Box, Avatar, Grid, Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import Profile from "../src/images/profile.jpg";

import { Link } from 'react-router-dom';



const HcircleStyle = {
    borderRadius: "0 0 50px 50px ",
    width: 120,
    height: 50,
    backgroundColor: "#6F2CF5",
    position: "relative", // Position the circle absolutely
    top: "1%", // Center vertically
    zIndex: "-1"

}
export default function body() {

    return (

        <>

            <div >

                <Box sx={{ marginLeft: "25%", marginRight: "25%" }} style={{
                    display: "flex",
                    flexDirection: "column",


                }}>

                    <Box style={{ display: "flex", justifyContent: "space-between", padding: "2%", marginTop: "8%", paddingBottom: "8%", }}>

                        <div style={{ display: "flex", gap: "5px" }}>
                        
                            <Box style={{
                                display: "flex",
                                width: "25px",
                                height: "25px",
                           
                                backgroundColor: "#FF5700",
                                borderRadius: "50%"
                            }} >
                            </Box>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Sahil Pradhan</Typography>
                        </div>

                        <Typography variant='h6'>Home</Typography>

                    </Box>
                    <div>
                        <Card sx={{ padding: "5%", backgroundColor: "#F3F4F6" }}>


                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ marginRight: "2%" }}>

                                    <Typography display="inline"> <svg style={{ fontWeight: "" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-1-circle" viewBox="0 0 16 16" >
                                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />

                                    </svg></Typography>
                                </Typography>

                                <Typography sx={{ fontWeight: 'bold' }}>Introduction</Typography>

                            </Box>
                            <Divider />
                            <Grid container spacing={2} sx={{ marginTop: "2%" }}>
                                <Grid item xs={12} lg={9} order={{ xs: 2, lg: 1 }}>
                                    <Typography  >    Hey, I'm Sahil Pradhan. I'm a full stack developer  based in India. I work mainly with javascript, React, express.

                                        <span style={{ display: 'block', marginTop: "2%" }}>You can also find me on  <Link to="https://www.linkedin.com/in/sahil-pradhan-46a0a31b7/">Linkedln</Link> and  <Link to="https://github.com/s2ahil">GitHub</Link>, and I’m happy to chat via email: <Link to="sahilpradhan411@gmail.com" underline="always">sahilpradhan411@gmail.com.</Link> </span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={0} lg={3} order={{ xs: 1, lg: 2 }}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Avatar aria-label="recipe" sx={{ width: 110, height: 110 }} src={Profile}>

                                        </Avatar>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Card>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box style={HcircleStyle} >
                            </Box>
                        </div>

                    </div>
                </Box>
            </div>


        </>

    )
}