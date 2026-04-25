import './App.css'
import Home from "./views/Home.jsx";
import StoriesPage from "./views/Stories.jsx"; // სახელი შევუცვალე, რომ ფოლდერში არ აერიოს
import Features from "./views/Features.jsx";
import Pricing from "./views/Pricing.jsx";
import Header from "./Stories/Header/Header.jsx";
import Footer from "./Stories/Footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
