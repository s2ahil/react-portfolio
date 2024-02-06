import React from 'react'
import resume from "../resume/resume.pdf"
import {Link} from "react-router-dom"



const Resume = () => {
    return (
        <div>

            <div style={{ position: "absolute", color: "white", padding: "2rem" }}>
                <Link to="/" style={{ color: "whitesmoke" }} >Home</Link>
            </div>



            <div
                style={{
                    backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )",
                    height: "100%", // Use 100vh for full viewport height
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",

                }}
            >
                <div style={{ display: "flex", justifyContent: "center", color: "whitesmoke" }}>
                    <h1>RESUME</h1>
                </div>


                <div style={{
                     display: "flex",
                     justifyContent: "center"
                }}>
                    <iframe src={resume} width="800rem" height="800rem" />
                </div>





            </div>
        </div>
    )
}

export default Resume