import "./App.css";
import { Route,Routes } from "react-router-dom"; 
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from  "./components/Skills";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const[sidebar,setsidebar] = useState(false);
  return (
    <div className="bg-violet-400 scroll-smooth relative min-h-screen flex flex-col min-w-full">
        <Navbar sidebar={sidebar} setsidebar={setsidebar}/>
        
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
        </Routes>
        <Sidebar sidebar={sidebar} setsidebar={setsidebar}/>
        <Footer/>
    </div>
    
  );
}

export default App;
