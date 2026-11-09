import React, { lazy, Suspense } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
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
const TermsOfServicePage = lazy(() => import("./pages/termsOfServicePage"))
const PrivacyPolicyPage = lazy(() => import("./pages/privacyPolicyPage"))
const CommunityPage = lazy(() => import("./pages/communityPage"))

function LegalRedirect({ to }) {
  const { search, hash } = useLocation()
  return <Navigate to={{ pathname: to, search, hash }} replace />
}

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
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/web-terms-conditions" element={<LegalRedirect to="/terms-of-service" />} />
              <Route path="/web-privacy-policy" element={<LegalRedirect to="/privacy-policy" />} />
              <Route path="/app-terms-conditions" element={<LegalRedirect to="/terms-of-service" />} />
              <Route path="/app-privacy-policy" element={<LegalRedirect to="/privacy-policy" />} />
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
