 import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './index.css'
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Project";
import Footer from "./pages/Footer";

function App() {


  return (
  
<main className="h-[100vh] bg-slate-300/20" >
  <Router>
    <Navbar/>
    <Routes>
      <Route>
        <Route path="/"  element={<Home />}></Route>
      </Route>
      <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
    </Routes>
  </Router>
</main>
 
  )
}

export default App
