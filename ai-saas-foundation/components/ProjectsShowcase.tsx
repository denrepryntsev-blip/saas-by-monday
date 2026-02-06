"use client"

import { TrendingUp, Users, BarChart3, FileText, Calendar, DollarSign, Target, Zap, Brain, Rocket, Clock } from "lucide-react"

interface Project {
  name: string
  description: string
  category: string
  icon: React.ReactNode
  gradient: string
  borderColor: string
  timeSaved: string
}

const projects: Project[] = [
  {
    name: "TaskFlow Pro",
    description: "AI-powered task management that learns your workflow",
    category: "Productivity",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    timeSaved: "3 weeks"
  },
  {
    name: "InvoiceGenius",
    description: "Automated invoicing with smart payment tracking",
    category: "Finance",
    icon: <DollarSign className="w-6 h-6" />,
    gradient: "from-muted/30 to-muted/50",
    borderColor: "border-border",
    timeSaved: "2 weeks"
  },
  {
    name: "TeamSync",
    description: "Real-time collaboration platform for remote teams",
    category: "Collaboration",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    timeSaved: "4 weeks"
  },
  {
    name: "AnalyticsPro",
    description: "Business intelligence dashboard with AI insights",
    category: "Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-muted/30 to-muted/50",
    borderColor: "border-border",
    timeSaved: "5 weeks"
  },
  {
    name: "ContentCraft",
    description: "AI content generator for marketing teams",
    category: "Marketing",
    icon: <FileText className="w-6 h-6" />,
    gradient: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    timeSaved: "2 weeks"
  },
  {
    name: "CustomerHub",
    description: "Complete CRM with automated lead scoring",
    category: "CRM",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-muted/30 to-muted/50",
    borderColor: "border-border",
    timeSaved: "6 weeks"
  },
  {
    name: "FinanceTracker",
    description: "Personal finance management with AI budgeting",
    category: "Finance",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    timeSaved: "3 weeks"
  },
  {
    name: "ProjectPulse",
    description: "Project management with predictive analytics",
    category: "Project Management",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-muted/30 to-muted/50",
    borderColor: "border-border",
    timeSaved: "4 weeks"
  },
  {
    name: "SocialScheduler",
    description: "Multi-platform social media management",
    category: "Social Media",
    icon: <Calendar className="w-6 h-6" />,
    gradient: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    timeSaved: "2 weeks"
  },
  {
    name: "LearningPath",
    description: "AI-powered personalized learning platform",
    category: "Education",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-muted/30 to-muted/50",
    borderColor: "border-border",
    timeSaved: "5 weeks"
  },
  {
    name: "HealthTracker",
    description: "Wellness app with AI health insights",
    category: "Health",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    timeSaved: "3 weeks"
  },
  {
    name: "EventMaster",
    description: "Event planning platform with smart scheduling",
    category: "Events",
    icon: <Calendar className="w-6 h-6" />,
    gradient: "from-muted/30 to-muted/50",
    borderColor: "border-border",
    timeSaved: "2 weeks"
  }
]

export function ProjectsShowcase() {
  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects, ...projects]

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex gap-6 animate-scroll">
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.name}-${index}`}
            className={`flex-shrink-0 w-[320px] rounded-xl border-2 ${project.borderColor} bg-gradient-to-br ${project.gradient} p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} border ${project.borderColor} group-hover:scale-110 transition-transform`}>
                <div className="text-foreground">
                  {project.icon}
                </div>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-background/50 text-muted-foreground border border-border">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Time Saved */}
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">
                  {project.timeSaved}
                </div>
                <div className="text-xs text-muted-foreground">
                  saved on development
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

