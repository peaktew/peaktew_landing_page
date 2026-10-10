import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { DarkModeProvider } from "./components/DarkModeContext"
import { SoundProvider } from "./components/SoundContext"
import SoundToggleButton from "./components/SoundToggleButton"

const AboutPage = lazy(() => import("./pages/aboutPage"))
const TeamPage = lazy(() => import("./pages/teamPage"))
const FeaturesPage = lazy(() => import("./pages/howitworksPage"))
const DownloadPage = lazy(() => import("./pages/downloadPage"))
const ContactPage = lazy(() => import("./pages/contactPage"))
const AccountDeletionPage = lazy(() => import("./pages/accountDeletionPage"))
const StoryPage = lazy(() => import("./pages/storypage"))
const WebtcPage = lazy(() => import("./pages/webtcPage"))
const WebppPage = lazy(() => import("./pages/webppPage"))
const AppppPage = lazy(() => import("./pages/appppPage"))
const ApptcPage = lazy(() => import("./pages/apptcPages"))
const CommunityPage = lazy(() => import("./pages/communityPage"))

function App() {

  return (
    <DarkModeProvider>
      <SoundProvider>
        <div className="flex flex-col min-h-screen bg-white transition-colors duration-300">
          <Navbar />
          <Suspense fallback={<div className="min-h-screen" aria-label="Loading page" />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/how-it-works" element={<FeaturesPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/account-repression" element={<AccountDeletionPage />} />
              <Route path="/our-team" element={<TeamPage />} />
              <Route path="/our-story" element={<StoryPage />} />
              <Route path="/web-terms-conditions" element={<WebtcPage />} />
              <Route path="/web-privacy-policy" element={<WebppPage />} />
              <Route path="/app-terms-conditions" element={<ApptcPage />} />
              <Route path="/app-privacy-policy" element={<AppppPage />} />
              <Route path="/community-guidelines" element={<CommunityPage />} />
            </Routes>
          </Suspense>
          <Footer />
          <SoundToggleButton />
        </div>
      </SoundProvider>
    </DarkModeProvider>
  )
}

export default App
