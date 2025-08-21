"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"

export default function ExperienceSection() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  const experiences = [
    {
      id: 1,
      title: "AI/ML Engineer",
      company: "Canadian Musicians Co-op",
      period: "June 2025 - September 2025",
      current: true,
      github: "https://github.com/OMCI-Source-Code/omci-ai-vocal-coach-",
      description:
        "Built and integrated a TensorFlow/Keras CNN audio classifier into a vocal-coaching web app backend, delivering real-time feedback on pitch, timing, vibrato, and clarity. Achieved 99% validation accuracy and 98% test accuracy on a held-out dataset, with an end-to-end audio preprocessing and batching pipeline for low-latency inference. Designed for rollout to 300+ musicians at the Canadian Musicians Co-operative, enabling scalable, real-time coaching across the cohort.",
      technologies: ["TensorFlow", "Keras", "Python", "CNN"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Tech for Social Impact",
      period: "Feb 2025 - Present",
      current: false,
      github: "https://github.com/shivalisharma1/EmbraceHer",
      description:
        "Developed a responsive UI with React (web) and React Native (mobile), optimizing state management and component reusability. Designed RESTful APIs with Node.js and Express, integrating Firebase/Supabase for real-time data sync and authentication. Configured CI/CD pipelines and deployed via Vercel, Firebase Hosting, and App Store/Play Store. Engineered core features including mood tracking, guided meditations, therapist scheduling, and real-time chat support. Utilized Git, Docker, and Chrome Developer Tools for version control, debugging, and containerized development.",
      technologies: ["JavaScript", "React.js", "Next.js"],
    },
    {
      id: 3,
      title: "Freelance Full-Stack Developer",
      company: "Freelancing",
      period: "October 2024 - Present",
      current: false,
      github: null,
      description:
        "Recently designed and launched a user-centric CPA website that boosted business by 20% through clear information architecture, fast load times, and streamlined contact/lead flows. Built a full-stack app with React + Next.js (routing, SSR, API routes), TypeScript, and Tailwind CSS—delivering a fast, component-driven UI and clean developer ergonomics. Implemented Node.js/Express REST APIs and Next.js API endpoints (email via Nodemailer), integrated external APIs, and deployed on Firebase/Google Cloud with secure env secrets and production monitoring.",
      technologies: ["Firebase", "Vercel", "Next.js", "API Routing"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number.parseInt(entry.target.dataset.cardId)
            setVisibleCards((prev) => [...new Set([...prev, cardId])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const cards = document.querySelectorAll("[data-card-id]")
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen flex items-center justify-center bg-gray-50 relative z-10 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-xl text-gray-600">My professional journey in software development</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-orange-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-card-id={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:justify-between`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full z-10"></div>

                {/* Experience Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 transform transition-all duration-1000 ${
                    visibleCards.includes(exp.id)
                      ? "translate-y-0 opacity-100"
                      : index % 2 === 0
                        ? "translate-x-10 opacity-0"
                        : "-translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-gray-800 mb-1">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-purple-600 mb-2">
                            {exp.company}
                          </CardDescription>
                        </div>
                        {exp.current && (
                          <Badge className="bg-gradient-to-r from-green-400 to-green-600 text-white">Current</Badge>
                        )}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 hover:from-pink-200 hover:to-purple-200 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* GitHub Link */}
                      {exp.github && (
                        <a 
                          href={exp.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 text-sm border border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 bg-transparent rounded-md transition-colors duration-200"
                        >
                          <Github size={16} className="mr-2" />
                          View Project
                          <ExternalLink size={14} className="ml-2" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
