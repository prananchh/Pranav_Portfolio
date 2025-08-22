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
      // Download the actual resume.pdf file from public folder
      const resumeUrl = '/resume.pdf'
      
      // Create a download link
      const link = document.createElement('a')
      link.href = resumeUrl
      link.download = 'Pranav_Chopra_Resume.pdf'
      link.target = '_blank'
      
      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      console.log('Resume downloaded successfully!')
      
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Fallback to text download if needed
      downloadAsText()
    }
    
    setTimeout(() => setIsDownloading(false), 1000)
  }

  const downloadAsText = () => {
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-[95vw] h-[95vh] max-w-7xl shadow-2xl flex flex-col">
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

        {/* Helpful Info */}
        <div className="px-6 py-3 bg-green-50 border-b border-green-200">
          <p className="text-sm text-green-700">
            You can download my resume by clicking on the "download" button on the top right corner.
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {/* PDF Viewer - Full Size */}
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            className="w-full h-full border-0"
            title="Pranav Chopra Resume"
          />
        </div>
      </div>
    </div>
  )
}
