"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Lip Reader",
      description:
        "Built a visual speech recognition model that converts mouth-only video into text (Conv3D → BiLSTM with CTC), trained and deployed in Colab/TensorFlow.",
      github: "https://github.com/prananchh/Lip-Reader",
      technologies: ["Python", "TensorFlow", "Keras"],
      gradient: "from-pink-500 to-purple-500",
    },
    {
      id: 2,
      title: "LearnBridge",
      description:
        "Built a Google ADK based Google Classroom AI Chatbot for learning (courses, assignments), drive (files), gmail (notifications), calendar.",
      github: "https://github.com/prananchh/ClassroomChatBot",
      technologies: ["JavaScript", "Node.js", "YAML", "Express", "OAuth 2.0", "Vertex AI (Gemini)"],
      gradient: "from-purple-500 to-orange-500",
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description:
        "Built this portfolio website from scratch using modern web technologies with smooth animations, particle effects, and responsive design.",
      github: "https://github.com/prananchh/personal-portfolio",
      technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">A showcase of my recent work and innovations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-card-id={project.id}
              className={`transform transition-all duration-1000 ${
                visibleCards.includes(project.id)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col h-full">
                  <CardDescription className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-100 hover:to-pink-100 hover:text-purple-700 transition-all duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className={`w-full border-2 bg-gradient-to-r ${project.gradient} border-transparent text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group-hover:shadow-purple-200`}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View on GitHub
                        <ExternalLink size={14} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Interested in seeing more of my work?</p>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 rounded-full bg-transparent"
            asChild
          >
            <a href="https://github.com/prananchh" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
