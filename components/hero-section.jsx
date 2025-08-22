"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { InteractiveButton, MagneticButton } from "@/components/micro-interactions"
import { useScrollAnimation, animationVariants } from "@/components/enhanced-scroll-animations"
import ResumeModal from "@/components/resume-modal"

export default function HeroSection() {
  const [ripples, setRipples] = useState([])
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const {
    elementRef,
    isVisible: scrollVisible,
    animationStage,
  } = useScrollAnimation({
    threshold: 0.2,
    stages: 6,
    staggerDelay: 200,
  })

  const handleRippleClick = (e) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)
  }

  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <section
        ref={elementRef}
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 relative z-10 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div
            className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 p-1 will-change-transform hover:scale-105 transition-transform duration-300 shadow-2xl"
            style={animationVariants.scaleIn(scrollVisible && animationStage >= 1, 0)}
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden shadow-inner">
              <img
                src="/images/profile-photo.jpg"
                alt="Pranav Chopra - AI/ML Engineer & Full Stack Developer"
                className="w-full h-full rounded-full object-cover object-center"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.src = "/placeholder.svg?height=120&width=120"
                }}
              />
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="text-5xl md:text-7xl font-bold gradient-text mb-6 will-change-transform"
            style={animationVariants.fadeInUp(scrollVisible && animationStage >= 2, 200)}
          >
            Pranav Chopra
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-gray-700 font-medium mb-4 will-change-transform"
            style={animationVariants.fadeInUp(scrollVisible && animationStage >= 3, 400)}
          >
            AI/ML Engineer & Full Stack Developer
          </p>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-gray-600 mb-8 will-change-transform"
            style={animationVariants.fadeInUp(scrollVisible && animationStage >= 4, 600)}
          >
            Pursuing Software Engineering Co-op at Western University
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 will-change-transform"
            style={animationVariants.fadeInUp(scrollVisible && animationStage >= 5, 800)}
          >
            <InteractiveButton onClick={scrollToContact} variant="primary" size="lg" className="rounded-full">
              Get In Touch
            </InteractiveButton>

            {/* Download Resume Button */}
            <InteractiveButton
              onClick={() => setIsResumeModalOpen(true)}
              variant="secondary"
              size="lg"
              className="rounded-full"
            >
              Download Resume
            </InteractiveButton>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 mb-12 will-change-transform"
            style={animationVariants.fadeInUp(scrollVisible && animationStage >= 6, 1000)}
          >
            <MagneticButton
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-pink-500"
              strength={0.2}
            >
              <a href="https://github.com/prananchh" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
            </MagneticButton>

            <MagneticButton
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
              strength={0.2}
            >
              <a href="https://www.linkedin.com/in/pchopr2/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </MagneticButton>

            <MagneticButton
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-orange-500"
              strength={0.2}
            >
              <a href="mailto:pranav.chopra06@gmail.com">
                <Mail size={24} />
              </a>
            </MagneticButton>
          </div>

          {/* Animated Arrow */}
          <MagneticButton
            onClick={scrollToContact}
            className="animate-bounce hover:scale-110 transition-transform duration-300 will-change-transform"
            style={animationVariants.fadeInUp(scrollVisible && animationStage >= 6, 1200)}
            strength={0.3}
          >
            <ChevronDown size={32} className="text-purple-500" />
          </MagneticButton>
        </div>
      </section>

      {/* ResumeModal component */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  )
}
