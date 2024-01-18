import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavbarItems = ["Home", "🚧Projects", "🚧Resume", "🚧Extras"];

const Navbar = () => {
    const theme = useTheme();

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
                {NavbarItems.map((item, index) => (
                    <Typography key={index} sx={{
                        fontWeight: 'bold',
                        fontSize: "1.5rem",
                        '&:hover': {
                                textDecoration: 'underline', // Add the desired hover effect
                                cursor: 'pointer',
                                color: "#00c04b", // Change color on hover
                            },
                        color:"whitesmoke",
                        '@media (max-width: 600px)': {
                            gap: "1rem", // Set your alternative background color here
                            fontSize: "1rem"
                        },

                    }}>
                        {item}
                    </Typography>
                ))}
            </Box>
        </div>
    );
};

export default Navbar;