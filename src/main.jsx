import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter'; // Defaults to weight 400

import './index.css'
import App from './App.jsx'
import Appc from './Component/Appc.jsx'
import HeroSection from './Component/section/hero.jsx'
import AboutMeSection from './Component/section/about-me.jsx'
import ExperienceSection from './Component/section/experiences.jsx'
import TestimonialsSection from './Component/section/testimonials.jsx'
import ContactSection from './Component/section/contact.jsx'
import WorkSection from './Component/section/work.jsx'
import SkillsSection from './Component/section/skills.jsx'
import Footer from './Component/layout/footer';
import Header from './Component/layout/header';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="font-inter bg-gray text-gray-600 antialiased">
      {/* Your components here */}
      {/* <App></App> */}
    <Header></Header>
    <HeroSection></HeroSection>
    <AboutMeSection></AboutMeSection>
    <SkillsSection></SkillsSection>
    <ExperienceSection></ExperienceSection>
    <WorkSection></WorkSection>
    <TestimonialsSection></TestimonialsSection>
    <ContactSection></ContactSection>
    <Footer></Footer>
    </div>
    
    
    {/* <Nav></Nav> */}
    {/* <Hero></Hero> */}
  </StrictMode>,
)
