"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation, animationVariants } from "@/components/enhanced-scroll-animations"
import { HoverCard } from "@/components/micro-interactions"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const {
    elementRef,
    isVisible: scrollVisible,
    animationStage,
  } = useScrollAnimation({
    threshold: 0.3,
    stages: 4,
    staggerDelay: 300,
  })

  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "AWS", "Docker"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={elementRef}
      id="about"
      className="min-h-screen flex items-center justify-center bg-white relative z-10 py-20 px-4 overflow-hidden"
    >
      {/* Background Micro-Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes - Subtle */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-purple-200 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg animate-float animation-delay-1000 opacity-25 transform rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 border-2 border-orange-200 rounded-full animate-float animation-delay-2000 opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full animate-float animation-delay-1500 opacity-25"></div>
        
        {/* Additional Floating Shapes - Subtle */}
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-green-200 to-blue-200 rounded-full animate-float animation-delay-300 opacity-20"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 border-2 border-pink-200 rounded-lg animate-float animation-delay-1200 opacity-25 transform -rotate-12"></div>
        
        {/* Animated Grid Pattern - Very Subtle */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Dots - Smaller and Subtle */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse-slow opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse-slow animation-delay-500 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-orange-300 rounded-full animate-pulse-slow animation-delay-1000 opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-blue-300 rounded-full animate-pulse-slow animation-delay-1500 opacity-40"></div>
        
        {/* Animated Lines - Thinner and Subtle */}
        <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent animate-shimmer opacity-25"></div>
        <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent via-pink-200 to-transparent animate-shimmer animation-delay-1000 opacity-25"></div>
        
        {/* Floating Code Symbols - Smaller and Subtle */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-purple-200 text-3xl font-mono animate-float animation-delay-500 opacity-25">{"</>"}</div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-pink-200 text-2xl font-mono animate-float animation-delay-1500 opacity-25">{"{}"}</div>
        
        {/* Subtle Pulsing Circles */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-purple-200 rounded-full animate-ping opacity-15"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-pink-200 rounded-full animate-ping animation-delay-1000 opacity-15"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* About Me Content with Animations */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div
              className="will-change-transform"
              style={animationVariants.fadeInUp(scrollVisible && animationStage >= 1, 0)}
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in-up">About Me</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p className="animate-fade-in-up animation-delay-200">
                  I'm a passionate developer with a deep love for creating innovative solutions that bridge the gap
                  between artificial intelligence and practical applications. My journey in software engineering has
                  been driven by curiosity and a desire to solve complex problems through code.
                </p>
                <p className="animate-fade-in-up animation-delay-400">
                  Currently pursuing my Software Engineering Co-op at Western University, I've had the opportunity to
                  work on cutting-edge projects ranging from AI-powered vocal coaching systems to full-stack web
                  applications that make a real impact in people's lives.
                </p>
                <p className="animate-fade-in-up animation-delay-600">
                  When I'm not coding, you'll find me exploring the latest developments in machine learning,
                  contributing to open-source projects, or mentoring fellow developers in their journey to master the
                  art of programming.
                </p>
              </div>
            </div>

            {/* Skills Badges with Enhanced Animations */}
            <div
              className="will-change-transform"
              style={animationVariants.fadeInUp(scrollVisible && animationStage >= 2, 800)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 animate-fade-in-up animation-delay-800">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <HoverCard key={skill} hoverScale={1.1}>
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 hover:from-pink-200 hover:to-purple-200 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-1 animate-badge-in"
                      style={{ 
                        animationDelay: `${800 + (index * 100)}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {skill}
                    </Badge>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
