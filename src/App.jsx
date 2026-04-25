import './App.css'
import Home from "./Home/Home.jsx";
import StoriesPage from "./Stories/Stories.jsx"; 
import Features from "./Features/Features.jsx";
import Pricing from "./Pricing/Pricing.jsx";
import Header from "./Home/Header/Header.jsx";
import Footer from "./Home/Footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
