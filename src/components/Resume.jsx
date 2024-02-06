import React from 'react';
import resume from "../resume/resume.pdf";
import { Link } from "react-router-dom";

import { useState } from "react"


const Resume = () => {

    const [page, setPage] = useState(1);

    const pdfURL =resume;
    return (
        <div>
            <div style={{ position: "absolute", color: "white", padding: "2rem" }}>
                <Link to="/" style={{ color: "whitesmoke" }}>Home</Link>
            </div>
            <div style={{
                backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%, rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )",
                minHeight: "100vh", // Use minHeight instead of height for full viewport height
                display: "flex",
                flexDirection: "column",
            }}>
                <div style={{ display: "flex", justifyContent: "center", color: "whitesmoke" }}>
                    <h1>RESUME</h1>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",


                    // Set a minHeight for the iframe container
                }}>
                  <iframe src={resume} height="800rem" width="600rem"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Resume;
