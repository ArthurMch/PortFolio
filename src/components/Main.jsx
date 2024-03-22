import Nav from "./Nav";
import Hero from "./Hero";
import Project from "./Project";
import Hobbies from "./Hobbies";
import Footer from "./Footer";
import Skills from './Skills';


const Main = () => {
  return (
    <div className="bg-indigo-600">
        <Nav/>
        <Hero/>
        <Project/>
        <Skills/>
        <Hobbies/>
        <Footer/>
    </div>
  )
}

export default Main 