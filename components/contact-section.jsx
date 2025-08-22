"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pranav.chopra06@gmail.com",
      href: "mailto:pranav.chopra06@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pchopr2",
      href: "https://www.linkedin.com/in/pchopr2/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/prananchh",
      href: "https://github.com/prananchh",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center gradient-purple-orange relative z-10 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Let's Work Together
          </h2>
          <p
            className={`text-xl text-white/90 transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and innovation. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center space-y-4 text-white/90 hover:text-white transition-all duration-300 group hover:scale-105"
                >
                  <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                    <info.icon size={32} />
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-lg">{info.label}</p>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
