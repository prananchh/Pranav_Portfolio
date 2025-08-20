"use client"

import { useState, useCallback } from "react"

// Enhanced button with micro interactions
export function InteractiveButton({ children, onClick, variant = "primary", size = "md", className = "", ...props }) {
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState([])

  const handleMouseDown = useCallback(() => {
    setIsPressed(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsPressed(false)
  }, [])

  const handleRipple = useCallback(
    (e) => {
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

      if (onClick) onClick(e)
    },
    [onClick],
  )

  const baseClasses = "relative overflow-hidden transition-all duration-200 focus:outline-none focus:ring-4"
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white hover:shadow-lg focus:ring-purple-300",
    secondary:
      "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white bg-transparent focus:ring-purple-300",
    ghost: "text-gray-700 hover:text-pink-500 hover:bg-pink-50 focus:ring-pink-300",
  }
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        isPressed ? "scale-95" : "hover:scale-105"
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleRipple}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white opacity-30 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animationDuration: "0.6s",
          }}
        />
      ))}
    </button>
  )
}

// Hover card with micro interactions
export function HoverCard({ children, className = "", hoverScale = 1.05 }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`transition-all duration-300 cursor-pointer ${className}`}
      style={{
        transform: `scale(${isHovered ? hoverScale : 1}) translateY(${isHovered ? "-4px" : "0"})`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

// Magnetic button effect
export function MagneticButton({ children, strength = 0.3, className = "", ...props }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (e) => {
      const button = e.currentTarget
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      setPosition({ x: deltaX, y: deltaY })
    },
    [strength],
  )

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  return (
    <button
      className={`transition-transform duration-200 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  )
}
