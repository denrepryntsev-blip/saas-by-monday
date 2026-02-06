"use client"

import { Sparkles, Heart, MessageCircle, Repeat2, Star, Play, ArrowUp, ArrowDown, Share2, ThumbsUp } from "lucide-react"

type TestimonialType = "twitter" | "reddit" | "linkedin" | "youtube" | "telegram" | "facebook"

interface Testimonial {
  name: string
  username?: string
  avatar?: string
  text: string
  highlight?: string
  screenshot?: string
  timestamp?: string
  likes?: number
  replies?: number
  retweets?: number
  upvotes?: number
  verified?: boolean
  type: TestimonialType
  company?: string
  subreddit?: string
  views?: number
}

const testimonials: Testimonial[] = [
  {
    name: "Jaya B.",
    username: "@jayabuilds",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    text: "I managed to exit & sell for 5 figures in a few weeks. Best investment I've made in so long.",
    highlight: "exit & sell for 5 figures in a few weeks",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&q=80&auto=format",
    timestamp: "Mar 15, 2025",
    likes: 24,
    replies: 3,
    type: "twitter",
  },
  {
    name: "dev_builder",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&q=80",
    text: "Just launched my SaaS using SaaSbyMonday. The Cursor rules are insane - my codebase is still clean after 3 months of AI development. Highly recommend for anyone using Cursor daily.",
    highlight: "Highly recommend",
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=750&fit=crop&q=80&auto=format",
    timestamp: "5 hours ago",
    upvotes: 234,
    replies: 18,
    subreddit: "r/SaaS",
    type: "reddit",
  },
  {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    company: "Senior Developer at TechCorp",
    text: "Finally, a boilerplate that doesn't fall apart after a few AI prompts. The architecture constraints keep everything organized. Game changer!",
    highlight: "doesn't fall apart after a few AI prompts",
    timestamp: "2 days ago",
    likes: 89,
    replies: 9,
    type: "linkedin",
  },
  {
    name: "Marcus T.",
    username: "@marcust",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    text: "I went from fighting with AI-generated spaghetti code to shipping features confidently. The structure and rules make all the difference.",
    highlight: "shipping features confidently",
    screenshot: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=650&fit=crop&q=80&auto=format",
    timestamp: "1d ago",
    likes: 156,
    replies: 8,
    retweets: 23,
    type: "twitter",
  },
  {
    name: "TechReviewer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    text: "SaaSbyMonday Review: If you're using Cursor to build SaaS, this is a must-have. The architecture constraints prevent the usual AI chaos. 5/5 stars.",
    highlight: "must-have",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&q=80&auto=format",
    views: 1234,
    likes: 89,
    timestamp: "1 week ago",
    type: "youtube",
  },
  {
    name: "Elena R.",
    username: "@elenar",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    verified: true,
    text: "Built my first SaaS with this foundation and earned my first $1k in a month. The multi-tenant setup and Stripe integration were already done.",
    highlight: "earned my first $1k in a month",
    screenshot: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=720&fit=crop&q=80&auto=format",
    timestamp: "1d ago",
    likes: 342,
    replies: 45,
    retweets: 67,
    type: "twitter",
  },
  {
    name: "code_wizard",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&q=80",
    text: "Just hit $5k MRR using SaaSbyMonday. The Stripe integration saved me weeks. AMA about the boilerplate!",
    highlight: "$5k MRR",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=680&fit=crop&q=80&auto=format",
    timestamp: "12 hours ago",
    upvotes: 456,
    replies: 67,
    subreddit: "r/SaaS",
    type: "reddit",
  },
  {
    name: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&q=80",
    company: "Founder at StartupXYZ",
    text: "The architecture constraints in SaaSbyMonday are exactly what I needed. My team can now work with Cursor without breaking the codebase structure. Worth every penny.",
    highlight: "Worth every penny",
    screenshot: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=710&fit=crop&q=80&auto=format",
    timestamp: "3 days ago",
    likes: 127,
    replies: 18,
    type: "linkedin",
  },
  {
    name: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80",
    text: "Just shipped my first feature using SaaSbyMonday! The multi-tenant architecture is rock solid. Cursor AI + these rules = perfect combo. Highly recommend for indie hackers! 🚀",
    timestamp: "18:00",
    likes: 27,
    views: 4100,
    type: "telegram",
  },
  {
    name: "David Martinez",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&q=80",
    text: "Finally found a boilerplate that actually works with AI coding! Been using SaaSbyMonday for 2 months and my startup is already generating revenue. The Cursor rules keep everything clean even when AI generates tons of code. Game changer! 🔥",
    highlight: "already generating revenue",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&q=80&auto=format",
    timestamp: "2h",
    likes: 156,
    replies: 23,
    type: "facebook",
  },
]

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function highlightText(text: string, highlight?: string): React.ReactNode {
  if (!highlight) return text

  const parts = text.split(new RegExp(`(${highlight})`, "gi"))
  return parts.map((part, index) => {
    if (part.toLowerCase() === highlight.toLowerCase()) {
      return (
        <span key={index} className="font-semibold" style={{ color: '#fbbf24' }}>
          {part}
        </span>
      )
    }
    return part
  })
}

// Twitter/X - білий фон, чорний текст, іконка X справа вгорі
function TwitterCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:bg-gray-50 transition-all duration-200 shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3 relative">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {testimonial.avatar ? (
            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs font-semibold text-gray-700">{getInitials(testimonial.name)}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-[#0f1419] text-[15px]">{testimonial.name}</span>
            {testimonial.verified && (
              <svg className="w-[18px] h-[18px] text-[#1d9bf0]" viewBox="0 0 22 22" fill="currentColor">
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/>
              </svg>
            )}
            <span className="text-[#536471] text-[15px]">{testimonial.username}</span>
            <span className="text-[#536471] text-[15px]">·</span>
            <span className="text-[#536471] text-[15px]">{testimonial.timestamp}</span>
          </div>
        </div>
        {/* X Logo */}
        <svg className="w-5 h-5 text-[#0f1419]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      
      {/* Text */}
      <p className="text-[#0f1419] text-[15px] leading-5 mb-3">
        {highlightText(testimonial.text, testimonial.highlight)}
      </p>
      
      {/* Screenshot */}
      {testimonial.screenshot && (
        <div className="rounded-2xl overflow-hidden border border-gray-200 mb-3">
          <img src={testimonial.screenshot} alt="" className="w-full" loading="lazy" />
        </div>
      )}
      
      {/* Actions */}
      <div className="flex items-center justify-between text-[#536471] pt-1">
        <button className="flex items-center gap-1 hover:text-[#1d9bf0] transition-colors group">
          <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10 transition-colors">
            <MessageCircle className="w-[18px] h-[18px]" />
          </div>
          <span className="text-[13px]">{testimonial.replies}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-[#00ba7c] transition-colors group">
          <div className="p-2 rounded-full group-hover:bg-[#00ba7c]/10 transition-colors">
            <Repeat2 className="w-[18px] h-[18px]" />
          </div>
          <span className="text-[13px]">{testimonial.retweets}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-[#f91880] transition-colors group">
          <div className="p-2 rounded-full group-hover:bg-[#f91880]/10 transition-colors">
            <Heart className="w-[18px] h-[18px]" />
          </div>
          <span className="text-[13px]">{testimonial.likes}</span>
        </button>
        <button className="hover:text-[#1d9bf0] transition-colors group">
          <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10 transition-colors">
            <Share2 className="w-[18px] h-[18px]" />
          </div>
        </button>
      </div>
    </div>
  )
}

// Reddit - світлий фон, upvote/downvote зліва
function RedditCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white border border-[#ccc] rounded-lg hover:border-[#898989] transition-all duration-200">
      <div className="flex gap-2 p-2">
        {/* Upvote/Downvote */}
        <div className="flex flex-col items-center pt-1 px-1">
          <button className="text-[#878a8c] hover:text-[#ff4500] hover:bg-[#f6f7f8] rounded p-1 transition-colors">
            <ArrowUp className="w-5 h-5" strokeWidth={2} />
          </button>
          <span className="text-xs font-bold text-[#1c1c1c] my-1">{testimonial.upvotes}</span>
          <button className="text-[#878a8c] hover:text-[#7193ff] hover:bg-[#f6f7f8] rounded p-1 transition-colors">
            <ArrowDown className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 py-1">
          <div className="flex items-center gap-1 text-xs text-[#7c7c7c] mb-1">
            <span className="font-bold text-[#1c1c1c] hover:underline cursor-pointer">{testimonial.subreddit}</span>
            <span>•</span>
            <span>Posted by u/{testimonial.name}</span>
            <span>•</span>
            <span>{testimonial.timestamp}</span>
          </div>
          
          <p className="text-sm text-[#1c1c1c] leading-[1.4] mb-2">
            {highlightText(testimonial.text, testimonial.highlight)}
          </p>
          
          {testimonial.screenshot && (
            <div className="rounded overflow-hidden mb-2">
              <img src={testimonial.screenshot} alt="" className="w-full" loading="lazy" />
            </div>
          )}
          
          <div className="flex items-center gap-2 text-xs text-[#878a8c] font-bold">
            <button className="flex items-center gap-1 hover:bg-[#f6f7f8] px-2 py-1 rounded transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>{testimonial.replies} Comments</span>
            </button>
            <button className="flex items-center gap-1 hover:bg-[#f6f7f8] px-2 py-1 rounded transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// LinkedIn - білий фон, професійний стиль
function LinkedInCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white border border-[#d4d4d8] rounded-lg hover:shadow-md transition-all duration-200">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-[#0a66c2] flex items-center justify-center flex-shrink-0 overflow-hidden">
            {testimonial.avatar ? (
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-sm font-semibold text-white">{getInitials(testimonial.name)}</span>
            )}
          </div>
          <div className="flex-1">
            <div className="font-semibold text-[#000000e6] text-sm hover:underline cursor-pointer">
              {testimonial.name}
            </div>
            {testimonial.company && (
              <div className="text-xs text-[#00000099] leading-4">{testimonial.company}</div>
            )}
            <div className="text-xs text-[#00000099] mt-1">{testimonial.timestamp}</div>
          </div>
        </div>
        
        {/* Text */}
        <p className="text-sm text-[#000000e6] leading-5 mb-3">
          {highlightText(testimonial.text, testimonial.highlight)}
        </p>
        
        {/* Screenshot */}
        {testimonial.screenshot && (
          <div className="rounded overflow-hidden mb-3 -mx-4">
            <img src={testimonial.screenshot} alt="" className="w-full" loading="lazy" />
          </div>
        )}
        
        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-[#0000001f]">
          <button className="flex items-center gap-2 text-[#00000099] hover:bg-[#0000000a] px-3 py-2 rounded transition-colors">
            <ThumbsUp className="w-5 h-5" />
            <span className="text-sm font-semibold">{testimonial.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-[#00000099] hover:bg-[#0000000a] px-3 py-2 rounded transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-semibold">{testimonial.replies} comments</span>
          </button>
          <button className="flex items-center gap-2 text-[#00000099] hover:bg-[#0000000a] px-3 py-2 rounded transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

// YouTube - коментар під відео
function YouTubeCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
      {/* Video Thumbnail */}
      {testimonial.screenshot && (
        <div className="relative aspect-video bg-black">
          <img src={testimonial.screenshot} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
              <Play className="w-7 h-7 text-white ml-1" fill="white" />
            </div>
          </div>
        </div>
      )}
      
      <div className="p-3">
        {/* Comment */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-[#065fd4] flex items-center justify-center flex-shrink-0 overflow-hidden">
            {testimonial.avatar ? (
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs font-semibold text-white">{getInitials(testimonial.name)}</span>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm text-[#0f0f0f]">{testimonial.name}</span>
              <span className="text-xs text-[#606060]">{testimonial.timestamp}</span>
            </div>
            <p className="text-sm text-[#0f0f0f] leading-5 mb-2">
              {highlightText(testimonial.text, testimonial.highlight)}
            </p>
            <div className="flex items-center gap-4 text-xs text-[#606060]">
              <span>{testimonial.views} views</span>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[#0000001a]">
          <button className="flex items-center gap-2 text-[#606060] hover:text-[#0f0f0f] transition-colors">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-xs font-semibold">{testimonial.likes}</span>
          </button>
          <button className="text-xs font-semibold text-[#606060] hover:text-[#0f0f0f] transition-colors">
            Reply
          </button>
        </div>
      </div>
    </div>
  )
}

// Telegram - світло-зелений фон, характерний стиль
function TelegramCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[#f4f4f5] rounded-xl p-4 hover:bg-[#e9e9ea] transition-all duration-200 border border-transparent">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-[#2aabee] flex items-center justify-center flex-shrink-0 overflow-hidden">
          {testimonial.avatar ? (
            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs font-semibold text-white">{getInitials(testimonial.name)}</span>
          )}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[#2aabee] text-sm mb-1">{testimonial.name}</div>
          <p className="text-sm text-[#000000] leading-5 whitespace-pre-line mb-2">
            {highlightText(testimonial.text, testimonial.highlight)}
          </p>
          <div className="flex items-center justify-between text-xs text-[#707579]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-red-500" fill="currentColor" />
                {testimonial.likes}
              </span>
              <span>{testimonial.views} views</span>
            </div>
            <span>{testimonial.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Facebook - білий фон, синій акцент, характерний стиль
function FacebookCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white border border-[#dddfe2] rounded-lg hover:shadow-md transition-all duration-200">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start gap-2 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center flex-shrink-0 overflow-hidden">
            {testimonial.avatar ? (
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs font-semibold text-white">{getInitials(testimonial.name)}</span>
            )}
          </div>
          <div className="flex-1">
            <div className="font-semibold text-[#050505] text-[15px] hover:underline cursor-pointer">
              {testimonial.name}
            </div>
            <div className="text-[13px] text-[#65676b]">{testimonial.timestamp}</div>
          </div>
        </div>
        
        {/* Text */}
        <p className="text-[15px] text-[#050505] leading-5 mb-3">
          {highlightText(testimonial.text, testimonial.highlight)}
        </p>
        
        {/* Screenshot */}
        {testimonial.screenshot && (
          <div className="rounded-lg overflow-hidden -mx-4 mb-3">
            <img src={testimonial.screenshot} alt="" className="w-full" loading="lazy" />
          </div>
        )}
        
        {/* Stats */}
        <div className="flex items-center justify-between text-[#65676b] text-[13px] py-2 border-t border-[#dddfe2]">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <div className="w-[18px] h-[18px] bg-[#1877f2] rounded-full flex items-center justify-center">
                <ThumbsUp className="w-[10px] h-[10px] text-white" fill="white" />
              </div>
            </div>
            <span>{testimonial.likes}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{testimonial.replies} comments</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-around pt-1 border-t border-[#dddfe2]">
          <button className="flex items-center justify-center gap-2 text-[#65676b] hover:bg-[#f2f3f5] px-4 py-2 rounded transition-colors flex-1">
            <ThumbsUp className="w-[18px] h-[18px]" />
            <span className="text-[15px] font-semibold">Like</span>
          </button>
          <button className="flex items-center justify-center gap-2 text-[#65676b] hover:bg-[#f2f3f5] px-4 py-2 rounded transition-colors flex-1">
            <MessageCircle className="w-[18px] h-[18px]" />
            <span className="text-[15px] font-semibold">Comment</span>
          </button>
          <button className="flex items-center justify-center gap-2 text-[#65676b] hover:bg-[#f2f3f5] px-4 py-2 rounded transition-colors flex-1">
            <Share2 className="w-[18px] h-[18px]" />
            <span className="text-[15px] font-semibold">Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="px-6 py-20 border-t border-border relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#c9b9ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-6xl relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            What builders are saying
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from developers who are shipping faster with structured foundations
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              {testimonial.type === "twitter" && <TwitterCard testimonial={testimonial} />}
              {testimonial.type === "reddit" && <RedditCard testimonial={testimonial} />}
              {testimonial.type === "linkedin" && <LinkedInCard testimonial={testimonial} />}
              {testimonial.type === "youtube" && <YouTubeCard testimonial={testimonial} />}
              {testimonial.type === "telegram" && <TelegramCard testimonial={testimonial} />}
              {testimonial.type === "facebook" && <FacebookCard testimonial={testimonial} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
