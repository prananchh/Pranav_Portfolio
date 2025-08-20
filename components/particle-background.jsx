"use client"

import { useEffect, useRef, useCallback, useMemo } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const isReducedMotion = useRef(false)

  const particleConfig = useMemo(
    () => ({
      maxParticles: 80,
      connectionDistance: 120,
      mouseInfluence: 100,
      colors: [
        "236, 72, 153", // Pink
        "139, 92, 246", // Purple
        "249, 115, 22", // Orange
      ],
      speed: 0.3,
      friction: 0.99,
    }),
    [],
  )

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const particles = []

    // Check for reduced motion preference
    isReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let resizeTimeout
    const resizeCanvas = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        initParticles()
      }, 100)
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * particleConfig.speed
        this.vy = (Math.random() - 0.5) * particleConfig.speed
        this.radius = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.4 + 0.2
        this.color = particleConfig.colors[Math.floor(Math.random() * particleConfig.colors.length)]
        this.originalVx = this.vx
        this.originalVy = this.vy
      }

      update() {
        // Skip complex calculations if reduced motion is preferred
        if (isReducedMotion.current) {
          this.x += this.originalVx * 0.5
          this.y += this.originalVy * 0.5
        } else {
          this.x += this.vx
          this.y += this.vy

          // Bounce off edges with slight randomness
          if (this.x < 0 || this.x > canvas.width) {
            this.vx *= -1
            this.vx += (Math.random() - 0.5) * 0.1
          }
          if (this.y < 0 || this.y > canvas.height) {
            this.vy *= -1
            this.vy += (Math.random() - 0.5) * 0.1
          }

          const dx = mouseRef.current.x - this.x
          const dy = mouseRef.current.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < particleConfig.mouseInfluence) {
            const force = (particleConfig.mouseInfluence - distance) / particleConfig.mouseInfluence
            const angle = Math.atan2(dy, dx)
            this.vx += Math.cos(angle) * force * 0.02
            this.vy += Math.sin(angle) * force * 0.02
          }

          // Apply friction
          this.vx *= particleConfig.friction
          this.vy *= particleConfig.friction
        }

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()
      }
    }

    const area = canvas.width * canvas.height
    const density = isReducedMotion.current ? 20000 : 15000
    const particleCount = Math.min(Math.floor(area / density), particleConfig.maxParticles)

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }
    particlesRef.current = particles
  }, [particleConfig])

  const drawConnections = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return // Skip connections for reduced motion

    const ctx = canvas.getContext("2d")
    const particles = particlesRef.current
    if (!particles) return

    const maxConnections = 3 // Limit connections per particle for performance

    for (let i = 0; i < particles.length; i++) {
      let connectionCount = 0

      for (let j = i + 1; j < particles.length && connectionCount < maxConnections; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < particleConfig.connectionDistance) {
          const opacity = ((particleConfig.connectionDistance - distance) / particleConfig.connectionDistance) * 0.15
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
          connectionCount++
        }
      }
    }
  }, [particleConfig])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const particles = particlesRef.current

    // Initialize
    initParticles()

    let frameCount = 0
    const animate = () => {
      frameCount++

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections every other frame for better performance
      if (frameCount % 2 === 0) {
        drawConnections()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    let mouseMoveTimeout
    const handleMouseMove = (e) => {
      clearTimeout(mouseMoveTimeout)
      mouseMoveTimeout = setTimeout(() => {
        mouseRef.current.x = e.clientX
        mouseRef.current.y = e.clientY
      }, 16) // ~60fps throttling
    }

    // Event listeners
    window.addEventListener("resize", initParticles)
    window.addEventListener("mousemove", handleMouseMove)

    // Initialize animation
    animate()

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", initParticles)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [initParticles, drawConnections])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}
