"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation, animationVariants } from "@/components/enhanced-scroll-animations"
import { HoverCard } from "@/components/micro-interactions"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [progressVisible, setProgressVisible] = useState(false)
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

  const progressBars = [
    { skill: "Frontend Development", percentage: 90, color: "from-pink-500 to-purple-500" },
    { skill: "Backend Development", percentage: 85, color: "from-purple-500 to-orange-500" },
    { skill: "UI/UX Design", percentage: 80, color: "from-pink-500 to-orange-500" },
    { skill: "DevOps", percentage: 75, color: "from-orange-500 to-pink-500" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Delay progress bar animations
          setTimeout(() => {
            setProgressVisible(true)
          }, 500)
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
      className="min-h-screen flex items-center justify-center bg-white relative z-10 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <div
              className="will-change-transform"
              style={animationVariants.fadeInLeft(scrollVisible && animationStage >= 1, 0)}
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I'm a passionate developer with a deep love for creating innovative solutions that bridge the gap
                  between artificial intelligence and practical applications. My journey in software engineering has
                  been driven by curiosity and a desire to solve complex problems through code.
                </p>
                <p>
                  Currently pursuing my Software Engineering Co-op at Western University, I've had the opportunity to
                  work on cutting-edge projects ranging from AI-powered vocal coaching systems to full-stack web
                  applications that make a real impact in people's lives.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest developments in machine learning,
                  contributing to open-source projects, or mentoring fellow developers in their journey to master the
                  art of programming.
                </p>
              </div>
            </div>

            {/* Skills Badges */}
            <div
              className="will-change-transform"
              style={animationVariants.fadeInLeft(scrollVisible && animationStage >= 2, 300)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <HoverCard key={skill} hoverScale={1.1}>
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 hover:from-pink-200 hover:to-purple-200 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Progress Bars */}
          <div
            className="space-y-6 will-change-transform"
            style={animationVariants.fadeInRight(scrollVisible && animationStage >= 3, 500)}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Expertise Level</h3>
            {progressBars.map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{item.skill}</span>
                  <span className="text-gray-600 font-semibold">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1500 ease-out transform origin-left ${
                      scrollVisible && animationStage >= 4 ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{
                      width: `${item.percentage}%`,
                      transitionDelay: `${index * 200}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
