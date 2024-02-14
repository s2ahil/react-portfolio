import React from 'react';
import { Typography, Box } from '@mui/material';

import { Link } from 'react-router-dom';


const NavbarItems = [


    // { page: "Tech Stack", route: "#tech-stack" }, 
    { page: "Projects", route: "/projects" },
    { page: "Resume", route: "/resume" },
    { page: "🚧Extras", route: "" }];

const Navbar = () => {




    return (
        <div>
            <Box
                className='flex_center'


                sx={{
                    gap: "2rem",
                    padding: "6rem 0 6rem",

                    // Set your default background color here
                    '@media (max-width: 600px)': {
                        gap: "1rem", // Set your alternative background color here
                    },
                }}
            >
     <a href="#tech-stack"  >
                <Typography
                    className='hoverEffect'
                   
                    sx={{
                        fontWeight: 'bold',
                        color: "whitesmoke",
                        fontSize:"1.5rem",

                        '&:hover': {
                            cursor: "pointer",
                        },
                        '@media (max-width: 600px)': {
                                gap: "1rem", // Set your alternative background color here
                                fontSize: "1rem"
                            },




                    }}


              

                >

               Tech Stack  </Typography></a>  

                {NavbarItems.map((item, index) => (
                    <Link to={item.route}
                        className='hoverEffect'>
                        <Typography key={index} 
                        sx={{
                            fontWeight: 'bold',
                            fontSize: "1.5rem",

                            color: "whitesmoke",
                            '@media (max-width: 600px)': {
                                gap: "1rem", // Set your alternative background color here
                                fontSize: "1rem"
                            },

                        }}>

                            {item.page}
                        </Typography>
                    </Link>
                ))}
            </Box>
        </div>
    );
};

export default Navbar;