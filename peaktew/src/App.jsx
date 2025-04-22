import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./pages/landingPage"
import AboutPage from "./pages/aboutPage"
import TeamPage from "./pages/teamPage"
import FeaturesPage from "./pages/features"
import DownloadPage from "./pages/downloadPage"
import ComingSoonPage from "./pages/comingSoonPage"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 gives space for fixed navbar */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/our-team" element={<TeamPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
   
  )
}

export default App
