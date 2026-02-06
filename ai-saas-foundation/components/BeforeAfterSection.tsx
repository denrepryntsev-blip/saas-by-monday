"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Check } from "lucide-react"

interface ProblemItem {
  title: string
  text: string
}

interface SolutionItem {
  title: string
  text: string
}

interface BeforeAfterSectionProps {
  problems: ProblemItem[]
  solutions: SolutionItem[]
}

export function BeforeAfterSection({ problems, solutions }: BeforeAfterSectionProps) {
  const [splitPosition, setSplitPosition] = useState(100) // Початковий стан - показуємо проблеми
  const [absoluteLinePosition, setAbsoluteLinePosition] = useState<number | null>(null) // Абсолютна позиція лінії в пікселях відносно секції
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  // Визначення типу пристрою
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Розрахунок початкової абсолютної позиції лінії відносно секції
  useEffect(() => {
    const updateAbsolutePosition = () => {
      if (containerRef.current && sectionRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const sectionRect = sectionRef.current.getBoundingClientRect()
        
        // Розраховуємо позицію лінії так, щоб вона відповідала місцю обрізання контенту
        const containerLeftInSection = containerRect.left - sectionRect.left
        const absoluteX = containerLeftInSection + (containerRect.width * splitPosition) / 100
        
        // Оновлюємо позицію тільки якщо користувач не взаємодіє (не наводить курсор)
        if (!isHovering && !isDragging) {
          if (absoluteLinePosition === null) {
            setAbsoluteLinePosition(absoluteX)
          } else {
            // Оновлюємо позицію при зміні розміру
            setAbsoluteLinePosition(absoluteX)
          }
        }
      }
    }

    updateAbsolutePosition()
    
    const handleResize = () => {
      requestAnimationFrame(updateAbsolutePosition)
    }
    
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [splitPosition, absoluteLinePosition, isHovering, isDragging])

  // Оновлення позиції з оптимізацією через requestAnimationFrame
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current || !sectionRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const sectionRect = sectionRef.current.getBoundingClientRect()
    
    // Абсолютна позиція курсора відносно секції (включаючи бічні зони)
    const xInSection = clientX - sectionRect.left
    
    // Позиція відносно контейнера (для clip-path)
    const xInContainer = clientX - containerRect.left
    const containerWidth = containerRect.width
    
    // Розраховуємо процент для обрізання контенту (обмежуємо 0-100%)
    let percentage: number
    if (xInContainer < 0) {
      // Курсор в лівій бічній зоні - показуємо тільки рішення
      percentage = 0
    } else if (xInContainer > containerWidth) {
      // Курсор в правій бічній зоні - показуємо тільки проблеми
      percentage = 100
    } else {
      // Курсор в межах контейнера
      percentage = (xInContainer / containerWidth) * 100
    }
    
    // Оновлюємо splitPosition для контенту
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setSplitPosition(percentage)
      // Лінія слідує за курсором навіть в бічних зонах
      setAbsoluteLinePosition(xInSection)
    })
  }, [])

  // Desktop: відстеження курсора
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!isMobile) {
      updatePosition(e.clientX)
    }
  }, [isMobile, updatePosition])

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      setIsHovering(true)
    }
  }, [isMobile])

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setIsHovering(false)
      // Лінія залишається там, де користувач її залишив
    }
  }, [isMobile])

  // Mobile: touch події
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (isMobile && containerRef.current && sectionRef.current) {
      setIsDragging(true)
      const touchX = e.touches[0].clientX
      
      const containerRect = containerRef.current.getBoundingClientRect()
      const sectionRect = sectionRef.current.getBoundingClientRect()
      
      // Абсолютна позиція відносно секції
      const xInSection = touchX - sectionRect.left
      
      // Позиція відносно контейнера (для clip-path)
      const xInContainer = touchX - containerRect.left
      const containerWidth = containerRect.width
      
      // Розраховуємо процент для обрізання контенту
      let percentage: number
      if (xInContainer < 0) {
        percentage = 0
      } else if (xInContainer > containerWidth) {
        percentage = 100
      } else {
        percentage = (xInContainer / containerWidth) * 100
      }
      
      setSplitPosition(percentage)
      setAbsoluteLinePosition(xInSection)
    }
  }, [isMobile])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (isMobile && isDragging && containerRef.current && sectionRef.current) {
      e.preventDefault()
      const touchX = e.touches[0].clientX
      
      const containerRect = containerRef.current.getBoundingClientRect()
      const sectionRect = sectionRef.current.getBoundingClientRect()
      
      // Абсолютна позиція відносно секції
      const xInSection = touchX - sectionRect.left
      
      // Позиція відносно контейнера (для clip-path)
      const xInContainer = touchX - containerRect.left
      const containerWidth = containerRect.width
      
      // Розраховуємо процент для обрізання контенту
      let percentage: number
      if (xInContainer < 0) {
        percentage = 0
      } else if (xInContainer > containerWidth) {
        percentage = 100
      } else {
        percentage = (xInContainer / containerWidth) * 100
      }
      
      setSplitPosition(percentage)
      setAbsoluteLinePosition(xInSection)
    }
  }, [isMobile, isDragging])

  const handleTouchEnd = useCallback(() => {
    if (isMobile) {
      setIsDragging(false)
    }
  }, [isMobile])

  // Кнопки для mobile
  const handleButtonClick = useCallback((position: number) => {
    if (containerRef.current && sectionRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const sectionRect = sectionRef.current.getBoundingClientRect()
      
      // Розраховуємо абсолютну позицію лінії
      const containerLeftInSection = containerRect.left - sectionRect.left
      const absoluteX = containerLeftInSection + (containerRect.width * position) / 100
      
      setSplitPosition(position)
      setAbsoluteLinePosition(absoluteX)
    }
  }, [])

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      setSplitPosition((prev) => Math.max(0, prev - 5))
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      setSplitPosition((prev) => Math.min(100, prev + 5))
    }
  }, [])

  // Cleanup
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="px-6 py-20 border-t border-border relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto max-w-4xl">
        {/* Mobile кнопки */}
        {isMobile && (
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => handleButtonClick(100)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                splitPosition > 75
                  ? "bg-muted text-foreground border border-border"
                  : "bg-muted text-muted-foreground border border-border"
              }`}
              aria-label="Показати проблеми"
              aria-pressed={splitPosition > 75}
            >
              Проблеми
            </button>
            <div className="flex-1 max-w-xs">
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                {/* Індикатор прогресу: зліва проблеми (червоний), справа рішення (зелений) */}
                <div
                  className="absolute top-0 right-0 h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${100 - splitPosition}%` }}
                />
              </div>
            </div>
            <button
              onClick={() => handleButtonClick(0)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                splitPosition < 25
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "bg-muted text-muted-foreground border border-border"
              }`}
              aria-label="Показати рішення"
              aria-pressed={splitPosition < 25}
            >
              Рішення
            </button>
          </div>
        )}

        {/* Контейнер з інтерактивним розділенням */}
        <div
          ref={containerRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Інтерактивне порівняння проблем та рішень. Використовуйте стрілки вліво та вправо для навігації"
          aria-live="polite"
          aria-atomic="false"
          style={{
            willChange: isHovering || isDragging ? "clip-path" : "auto",
          }}
        >
          {/* Блок проблем (ліва частина) */}
          <div className="relative">
            <div
              className="overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - splitPosition}% 0 0)`,
                transition: isDragging || isHovering ? "none" : "clip-path 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: isHovering || isDragging ? "clip-path" : "auto",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                  The problem with vibe-coding
                </h2>
              </div>

              <p className="text-lg text-muted-foreground">
                Cursor and AI feel magical at first — until your project starts falling apart.
              </p>

              <div className="mt-10 space-y-4">
                {problems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-muted/50 p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <span className="text-muted-foreground">✕</span>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Блок рішень (права частина) */}
          <div className="absolute top-0 left-0 w-full">
            <div
              className="overflow-hidden"
              style={{
                clipPath: `inset(0 0 0 ${splitPosition}%)`,
                transition: isDragging || isHovering ? "none" : "clip-path 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: isHovering || isDragging ? "clip-path" : "auto",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                  The SaaSbyMonday solution
                </h2>
              </div>

              <p className="text-lg text-muted-foreground">
                Start with a solid architecture that AI follows.
              </p>

              <div className="mt-10 space-y-4">
                {solutions.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-primary/20 bg-primary/5 p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Вертикальна лінія-розділювач (на рівні секції, виходить за межі контейнера) */}
      {absoluteLinePosition !== null && (
        <div
          className="absolute top-0 bottom-0 pointer-events-none z-10"
          style={{
            left: `${absoluteLinePosition}px`,
            width: '2px',
            transform: "translateX(-50%)",
            transition: isDragging || isHovering ? "none" : "left 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "left",
          }}
        >
        {/* Елегантна тонка лінія з м'яким градієнтом */}
        <div
          className="h-full w-full bg-gradient-to-b from-transparent via-primary to-transparent"
          style={{
            boxShadow: isHovering
              ? "0 0 8px rgba(70, 210, 125, 0.5), 0 0 16px rgba(70, 210, 125, 0.3)"
              : "0 0 4px rgba(70, 210, 125, 0.3)",
            transition: "box-shadow 0.3s ease-out",
            opacity: isHovering ? 0.9 : 0.7,
          }}
        />
        </div>
      )}
    </section>
  )
}

