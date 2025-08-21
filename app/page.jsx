"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
