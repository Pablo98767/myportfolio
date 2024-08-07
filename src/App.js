import React from "react";
import About from "./components/About";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import Login from "./components/login";
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
  
    </main>
    
   
     
  );
}
