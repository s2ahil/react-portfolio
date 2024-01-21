
import Body from "./body"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Projects,Extras } from "./components/index.js";



function App() {


  return (
    <>
      <Router>
        <Routes >
        <Route path="/" element={<Body />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extras" element={<Extras />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
