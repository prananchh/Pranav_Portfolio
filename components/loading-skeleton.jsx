"use client"

import { useState, useEffect } from "react"

export default function LoadingSkeleton() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 skeleton rounded-full"></div>
        <div className="w-48 h-6 mx-auto mb-2 skeleton rounded"></div>
        <div className="w-32 h-4 mx-auto skeleton rounded"></div>
      </div>
    </div>
  )
}
