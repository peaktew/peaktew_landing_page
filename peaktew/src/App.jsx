import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./pages/landingPage"
import AboutPage from "./pages/aboutPage"
import TeamPage from "./pages/teamPage"
import FeaturesPage from "./pages/howitworksPage"
import DownloadPage from "./pages/downloadPage"
import ContactPage from "./pages/contactPage"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import StoryPage from "./pages/storypage"
import WebtcPage from './pages/webtcPage'
import WebppPage from './pages/webppPage'
import AppppPage from "./pages/appppPage"
import ApptcPage from "./pages/apptcPages"
import CommunityPage from "./pages/communityPage"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />{/* pt-20 gives space for fixed navbar */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/how-it-works" element={<FeaturesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route path="/web-terms-conditions" element={<WebtcPage />} />
          <Route path="/web-privacy-policy" element={<WebppPage />} />
          <Route path="/app-terms-conditions" element={<ApptcPage />} />
          <Route path="/app-privacy-policy" element={<AppppPage />} />
          <Route path="/community-guidelines" element={<CommunityPage />} />
        </Routes>
      <Footer />
    </div>
   
  )
}

export default App
