"use client"

import { useEffect, useRef, useState } from "react"

// Custom hook for enhanced scroll animations
export function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false) // Start as hidden by default
  const [animationStage, setAnimationStage] = useState(0) // Start at stage 0
  const elementRef = useRef(null)

  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true, staggerDelay = 100, stages = 1 } = options

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      // Fallback for browsers without IntersectionObserver
      setIsVisible(true)
      setAnimationStage(1)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Staggered animation stages
          for (let i = 0; i < stages; i++) {
            setTimeout(() => {
              setAnimationStage(i + 1)
            }, i * staggerDelay)
          }

          if (triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          // Only hide if not triggerOnce, otherwise keep visible
          setIsVisible(false)
          setAnimationStage(0)
        }
      },
      { threshold, rootMargin },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, rootMargin, triggerOnce, staggerDelay, stages])

  return { elementRef, isVisible, animationStage }
}

// Enhanced animation variants
export const animationVariants = {
  fadeInUp: (isVisible, delay = 0) => ({
    transform: `translateY(${isVisible ? "0" : "30px"})`,
    opacity: isVisible ? 1 : 0,
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    visibility: isVisible ? "visible" : "hidden",
  }),

  fadeInLeft: (isVisible, delay = 0) => ({
    transform: `translateX(${isVisible ? "0" : "-30px"})`,
    opacity: isVisible ? 1 : 0,
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    visibility: isVisible ? "visible" : "hidden",
  }),

  fadeInRight: (isVisible, delay = 0) => ({
    transform: `translateX(${isVisible ? "0" : "30px"})`,
    opacity: isVisible ? 1 : 0,
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    visibility: isVisible ? "visible" : "hidden",
  }),

  scaleIn: (isVisible, delay = 0) => ({
    transform: `scale(${isVisible ? "1" : "0.9"})`,
    opacity: isVisible ? 1 : 0,
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    visibility: isVisible ? "visible" : "hidden",
  }),

  slideInUp: (isVisible, delay = 0) => ({
    transform: `translateY(${isVisible ? "0" : "50px"})`,
    opacity: isVisible ? 1 : 0,
    transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    visibility: isVisible ? "visible" : "hidden",
  }),
}
