"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import LoadingSkeleton from "@/components/loading-skeleton"
import ParticleBackground from "@/components/particle-background"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { PageLoader } from "@/components/loading-animations"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading time for smooth page transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <PageLoader isLoading={isLoading}>
      <main className="min-h-screen bg-white relative gpu-accelerated">
        <LoadingSkeleton />
        <ParticleBackground />
        <Navigation />

        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </PageLoader>
  )
}
