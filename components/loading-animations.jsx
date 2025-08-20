"use client"

import { useState, useEffect } from "react"

// Page loading animation component
export function PageLoader({ isLoading, children }) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 flex items-center justify-center z-50">
        <div className="text-center">
          {/* Animated logo */}
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 animate-spin"></div>
            <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
              <span className="text-2xl font-bold gradient-text">PC</span>
            </div>
          </div>

          {/* Loading text */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold gradient-text animate-pulse">Loading Portfolio</h2>
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>{children}</div>
  )
}

// Skeleton loading components
export function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
      </div>
      <div className="flex space-x-2 mt-4">
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={`space-y-2 animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded" style={{ width: `${Math.random() * 40 + 60}%` }} />
      ))}
    </div>
  )
}
