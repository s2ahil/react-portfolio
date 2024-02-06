import React from 'react'
import { ImageCard } from '../reusableComponents/index.js'

import { Link } from 'react-router-dom'



const CardContent = [
  { Image: "https://github.com/s2ahil/PriceWise-nextJs-/assets/101473078/c89d1cf1-9fa2-48c6-90f7-29b430c579e5", Name: "Price wise", LiveLink: "https://price-wise-next-js-delta.vercel.app/", Desc: "website aim to compare prizes of amazon product. tech stack - next js 14", Repo: "https://github.com/s2ahil/PriceWise-nextJs-/tree/main" },
  { Image: "https://github.com/s2ahil/promptShare/assets/101473078/65778eae-3845-4e08-b5f0-ccc756bff7c3", Name: "share prompts", LiveLink: "https://prompt-share-1tuo.vercel.app/", Desc: "Website to share prompts", Repo: "https://github.com/s2ahil/promptShare" },
  { Image: "https://github.com/s2ahil/nit-raipur-2.0/assets/101473078/5b0dd2b1-e323-49fe-a240-a8039e4b0a07", Name: "Kisan Mitra (react + fast api)", LiveLink: "https://nit-raipur-2-0.vercel.app/", Desc: "A chatbot to help farmer resolve their doubts regarding agricultural schemes", Repo: "https://github.com/s2ahil/nit-raipur-2.0" },
  { Image: "https://github.com/s2ahil/pet-me-frontend/assets/101473078/28d69014-e646-4239-8fdf-9bfca5f0ffc0", Name: "Pet Me (react + express)", LiveLink: "https://pet-me-frontend.vercel.app/", Desc: "A platform to rent or get paid to rent pets", Repo: "https://github.com/s2ahil/pet-me-frontend" },
]




const Projects = () => {
  return (

    <>
    <div style={{position:"absolute",color:"white",padding:"2rem"}}>
    <Link to="/" style={{color:"whitesmoke"}} >Home</Link>
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
      <div>
        <div style={{ display: "flex", justifyContent: "center", color: "whitesmoke" }}>
          <h1>PROJECTS</h1>
        </div>
   
          <div style={{ display: "flex",justifyContent:"center",alignItems:"center", flexWrap: 'wrap', gap: "2rem", padding: "2rem" }}>
            {CardContent.map((project, index) => (
              <div key={index} >
                <ImageCard Image={project.Image} Name={project.Name} LiveLink={project.LiveLink} Desc={project.Desc}></ImageCard>
              </div>
            ))}
          </div>
          
      
      </div>
    </div>
    </>
  );
}

export default Projects;

