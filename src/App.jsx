
import Body from "./body"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Projects,Extras ,Resume} from "./components/index.js";



function App() {


  return (
    <>
      <Router>
        <Routes >
        <Route path="/" element={<Body />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/extras" element={<Extras />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
