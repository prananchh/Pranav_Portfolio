"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "AI-Powered Google Classroom Assistant",
      description:
        "Built a comprehensive AI chatbot using Google ADK that connects to Classroom/Drive/Calendar to answer questions, summarize materials, manage assignments, and draft communications for teachers and students.",
      github: "https://github.com/prananchh/ClassroomChatBot",
      technologies: ["Python", "Streamlit", "Google ADK", "Gemini AI", "OAuth 2.0", "Google APIs"],
      gradient: "from-pink-500 to-purple-500",
    },
    {
      id: 2,
      title: "Lip Reader - Visual Speech Recognition",
      description:
        "Developed a deep learning model that converts mouth-only video into text using Conv3D → BiLSTM with CTC. Trained and deployed in Colab/TensorFlow for visual speech recognition.",
      github: "https://github.com/prananchh/Lip-Reader",
      technologies: ["Python", "TensorFlow", "Keras", "Deep Learning", "Computer Vision", "Neural Networks"],
      gradient: "from-purple-500 to-orange-500",
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description:
        "Built this portfolio website from scratch using modern web technologies with smooth animations, particle effects, responsive design, and PDF resume generation.",
      github: "https://github.com/prananchh/Pranav_Portfolio",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "jsPDF", "Canvas API"],
      gradient: "from-orange-500 to-pink-500",
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
      { threshold: 0.2 },
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
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white relative z-10 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-fade-in-up">Featured Projects</h2>
          <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">A showcase of my recent work and innovations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-card-id={project.id}
              className={`transform transition-all duration-1000 ease-out ${
                visibleCards.includes(project.id)
                  ? "translate-y-0 opacity-100 scale-100 rotate-0"
                  : "translate-y-20 opacity-0 scale-95 rotate-3"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden group">
                {/* Gradient Header with Animation */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                </div>

                <CardHeader className="pb-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group-hover:scale-105 transition-transform duration-300"
                  >
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-all duration-300 cursor-pointer hover:text-blue-600">
                      {project.title}
                    </CardTitle>
                  </a>
                </CardHeader>

                <CardContent className="flex flex-col h-full">
                  <CardDescription className="text-gray-600 leading-relaxed mb-4 flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </CardDescription>

                  {/* Technologies with Staggered Animation */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-100 hover:to-pink-100 hover:text-purple-700 transition-all duration-300 text-xs transform hover:scale-110 hover:-translate-y-1 ${
                            visibleCards.includes(project.id) ? "animate-badge-in" : ""
                          }`}
                          style={{ 
                            animationDelay: `${(index * 200) + (techIndex * 100)}ms`,
                            animationFillMode: 'both'
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link Button with Hover Effects */}
                  <div className="mt-auto pt-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-medium text-sm relative overflow-hidden group`}
                    >
                      {/* Button Background with Shimmer */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-100 group-hover:opacity-90 transition-opacity duration-300`}></div>
                      
                      {/* Button Content */}
                      <div className="relative z-10 flex items-center">
                        <Github size={16} className="mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        <span>View on GitHub</span>
                        <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action with Animation */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6 animate-fade-in-up animation-delay-500">Interested in seeing more of my work?</p>
          <a 
            href="https://github.com/prananchh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 rounded-full bg-transparent font-medium text-lg relative overflow-hidden group"
          >
            {/* Button Background */}
            <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            
            {/* Button Content */}
            <div className="relative z-10 flex items-center">
              <Github size={22} className="mr-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">Visit My GitHub</span>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-full"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
