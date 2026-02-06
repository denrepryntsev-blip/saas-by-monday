"use client"

import { useEffect, useState } from "react"

interface SaaSbyMondayLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  animated?: boolean
  className?: string
}

export function SaaSbyMondayLogo({ 
  size = 'md', 
  showText = true, 
  animated = true,
  className = ''
}: SaaSbyMondayLogoProps) {
  const [isLoaded, setIsLoaded] = useState(!animated)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsLoaded(true), 100)
      return () => clearTimeout(timer)
    }
  }, [animated])

  const sizes = {
    sm: { logo: 32, text: 'text-lg' },
    md: { logo: 48, text: 'text-2xl' },
    lg: { logo: 80, text: 'text-4xl' },
    xl: { logo: 120, text: 'text-5xl' }
  }

  const { logo, text } = sizes[size]

  return (
    <div className={`group/logo flex items-center gap-2 ${className}`}>
      {/* Logo Mark */}
      <svg 
        width={logo} 
        height={logo} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-500"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(70, 210, 125, 0.3))'
        }}
      >
        {/* Second Slash (Shadow/Echo) - behind */}
        <path 
          className={`slash-echo transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-[-50px]'} group-hover/logo:translate-x-[4px] group-hover/logo:-translate-y-[4px]`}
          d="M55 85 L80 25" 
          stroke="rgba(124, 220, 159, 0.6)" 
          strokeWidth="6" 
          strokeLinecap="round"
          style={{
            transitionDelay: animated ? '0.2s' : '0s'
          }}
        />
        {/* First Slash (Base) - front */}
        <path 
          className={`slash-base transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-[50px]'} group-hover/logo:-translate-y-[2px] group-hover/logo:drop-shadow-[0_0_8px_rgba(70,210,125,1)]`}
          d="M35 85 L60 25" 
          stroke="#46d27d" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            transitionDelay: animated ? '0.1s' : '0s'
          }}
        />
        {/* The Spark (Top Right) */}
        <path 
          className={`spark transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} group-hover/logo:animate-spark-live group-hover/logo:drop-shadow-[0_0_15px_rgba(201,185,255,1)]`}
          d="M82 15 L86 22 L82 29 L78 22 Z" 
          fill="#c9b9ff"
          style={{
            transformOrigin: '82px 22px',
            transitionDelay: animated ? '0.5s' : '0s'
          }}
        />
      </svg>

      {/* Logo Text */}
      {showText && (
        <div className={`font-bold tracking-tight ${text}`}>
          <span className="text-foreground">SaaSby</span>
          <span className="text-primary">Monday</span>
        </div>
      )}
    </div>
  )
}

// Standalone icon version for favicons, etc.
export function SaaSbyMondayIcon({ size = 40 }: { size?: number }) {
  return (
    <div className="group/icon">
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300"
      >
        {/* Second Slash (Shadow/Echo) - behind */}
        <path 
          className="transition-all duration-300 group-hover/icon:translate-x-[2px] group-hover/icon:-translate-y-[2px]"
          d="M55 85 L80 25" 
          stroke="rgba(124, 220, 159, 0.6)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        {/* First Slash (Base) - front */}
        <path 
          className="transition-all duration-300 group-hover/icon:-translate-y-[1px] group-hover/icon:drop-shadow-[0_0_6px_rgba(70,210,125,0.8)]"
          d="M35 85 L60 25" 
          stroke="#46d27d" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* The Spark (Top Right) */}
        <path 
          className="transition-all duration-300 group-hover/icon:animate-spark-live group-hover/icon:drop-shadow-[0_0_12px_rgba(201,185,255,0.8)]"
          d="M82 15 L86 22 L82 29 L78 22 Z" 
          fill="#c9b9ff"
          style={{ transformOrigin: '82px 22px' }}
        />
      </svg>
    </div>
  )
}

