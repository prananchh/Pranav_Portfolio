"use client"

import { useState } from "react"
import { X, Download, ExternalLink } from "lucide-react"

const resumeData = {
  name: "Pranav Chopra",
  availability: "Summer Full-Time Internships (May to August 2025)",
  contact: {
    phone: "437-213-4288",
    email: "pranav.chopra06@gmail.com",
    linkedin: "www.linkedin.com/in/pchopr2",
    github: "https://github.com/prananchh",
  },
  education: {
    university: "University of Western Ontario",
    degree: "Bachelor of Software Engineering, Co-op",
    location: "London, Ontario",
  },
  skills: {
    programming:
      "Dart, Kotlin, Flutter, Python, Java, C, HTML5/CSS3, JavaScript, C++, SQL, Node.js, Arduino, Latex, Kubernetes",
    software:
      "Data Structures and Algorithms, Cloud Computing (Azure Portal), Version Control, VS Code, Idle, AWS, MVVM, Generative AI, Predictive Analysis",
    technologies:
      ".NET, Power Platforms, Git, GitHub, CAD, MS Word, MS Excel, Computer Vision, React, Django, Flask, OpenCV, MediaPipe, Agile, Collaborative Development Environments, Figma, Miro, Adobe CC, Photoshop, AutoCad, GoogleAnalytics, Microsoft Office Products, Unity",
  },
  experience: [
    {
      title: "Software Engineering Intern",
      company: "Canadian Musicians Co-op",
      period: "June 2025 - September",
      achievements: [
        "Developed and integrated an audio-input classification model into the web app backend, powering real-time singing feedback (pitch, timing, vibrato/clarity).",
        "Designed and trained a CNN from scratch using TensorFlow/Keras, including end-to-end audio preprocessing and batching.",
        "Achieved 99% validation accuracy and 98% test accuracy on a held-out dataset, demonstrating strong generalization.",
        "Designed for rollout to 300+ musicians at the Canadian Musicians Co-operative, enabling scalable, real-time coaching across the cohort.",
      ],
    },
    {
      title: "Full Stack Software Developer",
      company: "Tech for Social Impact",
      period: "Feb 2025 - Present",
      achievements: [
        "Developed a responsive UI with React (web) and React Native (mobile), optimizing state management and component reusability.",
        "Designed RESTful APIs with Node.js and Express, integrating Firebase/Supabase for real-time data sync and authentication. Configured CI/CD pipelines and deployed via Vercel, Firebase Hosting, and App Store/Play Store",
        "Engineered core features including mood tracking, guided meditations, therapist scheduling, and real-time chat support.",
        "Utilized Git, Docker, and Chrome Developer Tools for version control, debugging, and containerized development",
      ],
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "",
      period: "October 2024 - Present",
      achievements: [
        "Recently designed and launched a user-centric CPA website that boosted business by 20% through clear information architecture, fast load times, and streamlined contact/lead flows.",
        "Built a full-stack app with React + Next.js (routing, SSR, API routes), TypeScript, and Tailwind CSS—delivering a fast, component-driven UI and clean developer ergonomics.",
        "Implemented Node.js/Express REST APIs and Next.js API endpoints (email via Nodemailer), integrated external APIs, and deployed on Firebase/Google Cloud with secure env secrets and production monitoring.",
      ],
    },
  ],
  projects: [
    {
      title: "AI-Powered Google Classroom Assistant",
      date: "March 2025",
      description:
        "Built a comprehensive AI chatbot using Google ADK that connects to Classroom/Drive/Calendar to answer questions, summarize materials, manage assignments, and draft communications for teachers and students.",
      tech: "Built in Python with a Streamlit UI and Google ADK agents, powered by Gemini via google-generativeai/litellm, and integrated with Google Classroom, Drive, and Calendar through google-api-python-client and google-auth (OAuth 2.0).",
      impact:
        "Improved student experience by 28% time-to-answer (3.6→2.6 min), +12% on-time submissions, and +15% CSAT over a 4-week pilot",
      github: "https://github.com/prananchh/ClassroomChatBot",
    },
    {
      title: "Lip Reader - Visual Speech Recognition",
      date: "February 2025",
      description:
        "Developed a deep learning model that converts mouth-only video into text using Conv3D → BiLSTM with CTC. Trained and deployed in Colab/TensorFlow for visual speech recognition.",
      tech: "Built in Python with TensorFlow and Keras, implementing Conv3D neural networks and BiLSTM with CTC for visual speech recognition without audio input.",
      impact:
        "Created an innovative computer vision solution for lip reading with potential applications in accessibility and silent communication.",
      github: "https://github.com/prananchh/Lip-Reader",
    },
    {
      title: "Personal Portfolio Website",
      date: "January 2025",
      description:
        "Built this portfolio website from scratch using modern web technologies with smooth animations, particle effects, responsive design, and PDF resume generation.",
      tech: "Built with Next.js, React, Tailwind CSS, JavaScript, jsPDF for PDF generation, and Canvas API for interactive particle effects.",
      impact:
        "Demonstrates full-stack development skills with modern web technologies and showcases professional presentation capabilities.",
      github: "https://github.com/prananchh/Pranav_Portfolio",
    },
  ],
}

export default function ResumeModal({ isOpen, onClose }) {
  const [isDownloading, setIsDownloading] = useState(false)

  if (!isOpen) return null

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Dynamic import of jsPDF to avoid SSR issues
      const { jsPDF } = await import('jspdf')
      
      const doc = new jsPDF()
      
      // Set font and colors
      doc.setFont("helvetica")
      doc.setFontSize(24)
      doc.setTextColor(139, 92, 246) // Purple color
      
      // Header
      doc.text(resumeData.name, 20, 30)
      
      doc.setFontSize(12)
      doc.setTextColor(100, 100, 100)
      doc.text(resumeData.availability, 20, 40)
      
      // Contact Information
      doc.setFontSize(14)
      doc.setTextColor(139, 92, 246)
      doc.text("Contact Information", 20, 55)
      
      doc.setFontSize(10)
      doc.setTextColor(80, 80, 80)
      doc.text(`Phone: ${resumeData.contact.phone}`, 20, 65)
      doc.text(`Email: ${resumeData.contact.email}`, 20, 72)
      doc.text(`LinkedIn: ${resumeData.contact.linkedin}`, 20, 79)
      doc.text(`GitHub: ${resumeData.contact.github}`, 20, 86)
      
      // Education
      doc.setFontSize(14)
      doc.setTextColor(139, 92, 246)
      doc.text("Education", 20, 100)
      
      doc.setFontSize(10)
      doc.setTextColor(80, 80, 80)
      doc.text(resumeData.education.university, 20, 110)
      doc.text(resumeData.education.degree, 20, 117)
      doc.text(resumeData.education.location, 20, 124)
      
      // Skills
      doc.setFontSize(14)
      doc.setTextColor(139, 92, 246)
      doc.text("Skills", 20, 140)
      
      doc.setFontSize(10)
      doc.setTextColor(80, 80, 80)
      
      // Split long skill text into multiple lines
      const splitText = (text, maxWidth) => {
        const words = text.split(', ')
        const lines = []
        let currentLine = ''
        
        words.forEach(word => {
          if ((currentLine + word).length * 3 < maxWidth) {
            currentLine += (currentLine ? ', ' : '') + word
          } else {
            if (currentLine) lines.push(currentLine)
            currentLine = word
          }
        })
        if (currentLine) lines.push(currentLine)
        return lines
      }
      
      let yPos = 150
      doc.text("Programming:", 20, yPos)
      yPos += 7
      const programmingLines = splitText(resumeData.skills.programming, 170)
      programmingLines.forEach(line => {
        doc.text(line, 25, yPos)
        yPos += 7
      })
      
      yPos += 3
      doc.text("Software Skills:", 20, yPos)
      yPos += 7
      const softwareLines = splitText(resumeData.skills.software, 170)
      softwareLines.forEach(line => {
        doc.text(line, 25, yPos)
        yPos += 7
      })
      
      yPos += 3
      doc.text("Technologies:", 20, yPos)
      yPos += 7
      const techLines = splitText(resumeData.skills.technologies, 170)
      techLines.forEach(line => {
        doc.text(line, 25, yPos)
        yPos += 7
      })
      
      // Experience
      doc.setFontSize(14)
      doc.setTextColor(139, 92, 246)
      doc.text("Technical Experience", 20, yPos + 10)
      yPos += 20
      
      doc.setFontSize(10)
      doc.setTextColor(80, 80, 80)
      
      resumeData.experience.forEach(exp => {
        doc.setFontSize(12)
        doc.setTextColor(139, 92, 246)
        doc.text(`${exp.title} - ${exp.company || 'Freelance'}`, 20, yPos)
        
        doc.setFontSize(10)
        doc.setTextColor(100, 100, 100)
        doc.text(exp.period, 20, yPos + 7)
        
        yPos += 15
        doc.setTextColor(80, 80, 80)
        
        exp.achievements.forEach(achievement => {
          const achievementLines = splitText(achievement, 160)
          achievementLines.forEach(line => {
            doc.text(`• ${line}`, 25, yPos)
            yPos += 7
          })
          yPos += 3
        })
        
        yPos += 5
      })
      
      // Projects
      doc.setFontSize(14)
      doc.setTextColor(139, 92, 246)
      doc.text("Projects", 20, yPos + 10)
      yPos += 20
      
      doc.setFontSize(10)
      doc.setTextColor(80, 80, 80)
      
      resumeData.projects.forEach(project => {
        doc.setFontSize(12)
        doc.setTextColor(139, 92, 246)
        doc.text(project.title, 20, yPos)
        
        doc.setFontSize(10)
        doc.setTextColor(100, 100, 100)
        doc.text(project.date, 20, yPos + 7)
        
        yPos += 15
        doc.setTextColor(80, 80, 80)
        
        const descLines = splitText(project.description, 160)
        descLines.forEach(line => {
          doc.text(line, 25, yPos)
          yPos += 7
        })
        
        if (project.tech) {
          yPos += 3
          const techLines = splitText(project.tech, 160)
          techLines.forEach(line => {
            doc.text(line, 25, yPos)
            yPos += 7
          })
        }
        
        if (project.impact) {
          yPos += 3
          doc.setTextColor(139, 92, 246)
          doc.text(project.impact, 25, yPos)
          yPos += 7
        }
        
        yPos += 5
      })
      
      // Save the PDF
      doc.save("Pranav_Chopra_Resume.pdf")
      
    } catch (error) {
      console.error('Error generating PDF:', error)
      // Fallback to text download if PDF generation fails
      const resumeText = `
${resumeData.name}
Work Availability: ${resumeData.availability}

Contact Information:
Phone: ${resumeData.contact.phone}
Email: ${resumeData.contact.email}
LinkedIn: ${resumeData.contact.linkedin}
GitHub: ${resumeData.contact.github}

Education:
${resumeData.education.university}
${resumeData.education.degree}
${resumeData.education.location}

Skills:
Programming: ${resumeData.skills.programming}
Software Skills: ${resumeData.skills.software}
Technologies/Frameworks: ${resumeData.skills.technologies}

Technical Experience:
${resumeData.experience
  .map(
    (exp) => `
${exp.title} - ${exp.company} | ${exp.period}
${exp.achievements.map((achievement) => `• ${achievement}`).join("\n")}
`,
  )
  .join("\n")}

Projects:
${resumeData.projects
  .map(
    (project) => `
${project.title} | ${project.date}
${project.description}
${project.tech || ""}
${project.impact || ""}
`,
  )
  .join("\n")}
      `.trim()

      const blob = new Blob([resumeText], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Pranav_Chopra_Resume.txt"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
    
    setTimeout(() => setIsDownloading(false), 1000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white">
          <h2 className="text-2xl font-bold">Resume - {resumeData.name}</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all duration-200 disabled:opacity-50"
            >
              <Download size={18} />
              {isDownloading ? "Downloading..." : "Download"}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Contact & Availability */}
          <div className="mb-6">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{resumeData.name}</h1>
              <p className="text-lg text-purple-600 font-medium">Work Availability: {resumeData.availability}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <span>{resumeData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <span>{resumeData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">LinkedIn:</span>
                <a
                  href={`https://${resumeData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Profile <ExternalLink size={12} className="inline" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">GitHub:</span>
                <a
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Profile <ExternalLink size={12} className="inline" />
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-purple-200 pb-1">Education</h3>
            <div>
              <h4 className="font-semibold text-gray-700">{resumeData.education.university}</h4>
              <p className="text-gray-600">{resumeData.education.degree}</p>
              <p className="text-gray-500 text-sm">{resumeData.education.location}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-purple-200 pb-1">Skills</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Programming:</h4>
                <p className="text-gray-600 text-sm">{resumeData.skills.programming}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Software Skills:</h4>
                <p className="text-gray-600 text-sm">{resumeData.skills.software}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Technologies/Frameworks:</h4>
                <p className="text-gray-600 text-sm">{resumeData.skills.technologies}</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-purple-200 pb-1">
              Technical Experience
            </h3>
            <div className="space-y-4">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-purple-300 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-gray-700">
                      {exp.title}
                      {exp.company && ` - ${exp.company}`}
                    </h4>
                    <span className="text-sm text-purple-600 font-medium">{exp.period}</span>
                  </div>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-purple-200 pb-1">Projects</h3>
            <div className="space-y-4">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="border-l-4 border-orange-300 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-gray-700">{project.title}</h4>
                    <span className="text-sm text-orange-600 font-medium">{project.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                  {project.tech && <p className="text-gray-600 text-sm mb-2">{project.tech}</p>}
                  {project.impact && <p className="text-purple-600 text-sm font-medium">{project.impact}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
