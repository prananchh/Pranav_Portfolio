"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["hero", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold gradient-text">Pranav Chopra</div>
          </div>
        </div>
      </nav>
    )
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
          >
            Pranav Chopra
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors duration-200 hover:text-purple-600 ${
                activeSection === "about" ? "text-purple-600" : "text-gray-700"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`text-sm font-medium transition-colors duration-200 hover:text-purple-600 ${
                activeSection === "experience" ? "text-purple-600" : "text-gray-700"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm font-medium transition-colors duration-200 hover:text-purple-600 ${
                activeSection === "projects" ? "text-purple-600" : "text-gray-700"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors duration-200 hover:text-purple-600 ${
                activeSection === "contact" ? "text-purple-600" : "text-gray-700"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-pink-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
