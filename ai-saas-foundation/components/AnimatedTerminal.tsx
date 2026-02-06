"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { 
  Bot, 
  User, 
  Sparkles, 
  Globe, 
  ChevronRight, 
  ChevronDown, 
  Terminal, 
  FileCode, 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  Mic, 
  Image as ImageIcon, 
  Paperclip, 
  ArrowUp, 
  Infinity as InfinityIcon,
  ExternalLink,
  Command,
  FileText,
  Search,
  LayoutDashboard,
  ListTodo,
  Users,
  Settings,
  Bell,
  Search as SearchIcon
} from "lucide-react"

// ============================================
// TYPES
// ============================================

type Phase = 'idle' | 'typing' | 'processing' | 'generating' | 'confirming' | 'executing' | 'ready'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  blocks?: Block[]
  streamingText?: string
  isStreaming?: boolean
}

type BlockType = 'text' | 'action' | 'code' | 'terminal' | 'status'

interface Block {
  type: BlockType
  title?: string
  content?: string | string[]
  status?: 'pending' | 'running' | 'completed' | 'failed'
  isCollapsed?: boolean
  language?: string
  diff?: {
    original: number
    modified: number
  }
}

// ============================================
// SCENARIO DATA
// ============================================

const SCENARIO = [
  // 1. User Request
  {
    type: 'user_typing',
    text: 'Clone my SaaS template from GitHub',
    duration: 1500
  },
  {
    type: 'user_submit',
    id: 'msg-1'
  },
  // 2. Agent Response (Cloning)
  {
    type: 'agent_response',
    id: 'msg-2',
    content: "I'll clone the repository for you.",
    blocks: [
      {
        type: 'terminal',
        title: 'Terminal',
        content: [
          'git clone https://github.com/your-org/ai-saas-foundation.git',
          "Cloning into 'ai-saas-foundation'...",
          'remote: Enumerating objects: 247, done.',
          'Receiving objects: 100% (247/247), 1.24 MiB | 12.4 MiB/s, done.',
          '✓ Repository cloned successfully'
        ],
        status: 'running'
      }
    ]
  },
  {
    type: 'block_update',
    messageId: 'msg-2',
    blockIndex: 0,
    update: { status: 'completed' },
    delay: 1500
  },
  // 3. Agent Follow-up
  {
    type: 'agent_response',
    id: 'msg-3',
    content: "Should I install dependencies?",
    delay: 500
  },
  // 4. User Confirm
  {
    type: 'user_typing',
    text: 'Yes, go ahead',
    duration: 1000,
    delay: 800
  },
  {
    type: 'user_submit',
    id: 'msg-4'
  },
  // 5. Agent Install & Setup
  {
    type: 'agent_response',
    id: 'msg-5',
    content: "Installing dependencies and setting up the environment...",
    blocks: [
      {
        type: 'terminal',
        title: 'Terminal',
        content: [
          'npm install',
          'added 187 packages in 4.2s',
          '✓ Dependencies installed'
        ],
        status: 'running'
      }
    ]
  },
  {
    type: 'block_update',
    messageId: 'msg-5',
    blockIndex: 0,
    update: { status: 'completed' },
    delay: 1200
  },
  {
    type: 'add_block',
    messageId: 'msg-5',
    block: {
      type: 'terminal',
      title: 'Terminal',
      content: [
        'cp .env.example .env.local',
        'npx supabase db push',
        '✓ Database ready'
      ],
      status: 'running'
    },
    delay: 500
  },
  {
    type: 'block_update',
    messageId: 'msg-5',
    blockIndex: 1,
    update: { status: 'completed' },
    delay: 1200
  },
  // 6. Start Server
  {
    type: 'add_block',
    messageId: 'msg-5',
    block: {
      type: 'terminal',
      title: 'Terminal',
      content: [
        'npm run dev',
        '▲ Next.js 15.0.0',
        '- Local: http://localhost:3000',
        '✓ Ready in 1.8s'
      ],
      status: 'running'
    },
    delay: 500
  },
  {
    type: 'block_update',
    messageId: 'msg-5',
    blockIndex: 2,
    update: { status: 'completed' },
    delay: 1500
  },
  // 7. Agent Question
  {
    type: 'agent_response',
    id: 'msg-6',
    content: "Server is running. What would you like to build today?",
    delay: 500
  },
  // 8. User Idea
  {
    type: 'user_typing',
    text: 'A task management app with team collaboration',
    duration: 2000,
    delay: 800
  },
  {
    type: 'user_submit',
    id: 'msg-7'
  },
  // 9. Agent Clarification 1
  {
    type: 'agent_response',
    id: 'msg-8',
    content: "Got it. Should users be able to assign tasks to specific team members?",
    delay: 500
  },
  // 10. User Answer 1
  {
    type: 'user_typing',
    text: 'Yes, and they should get notifications when assigned',
    duration: 1500,
    delay: 600
  },
  {
    type: 'user_submit',
    id: 'msg-9'
  },
  // 11. Agent Clarification 2
  {
    type: 'agent_response',
    id: 'msg-10',
    content: "Understood. What about task priorities and deadlines?",
    delay: 500
  },
  // 12. User Answer 2
  {
    type: 'user_typing',
    text: 'Yes, we need High/Medium/Low priorities and due dates',
    duration: 1800,
    delay: 600
  },
  {
    type: 'user_submit',
    id: 'msg-11'
  },
  // 13. Agent Implementation
  {
    type: 'agent_response',
    id: 'msg-12',
    content: "Perfect. I'll create the database schema, API routes, and components for tasks and team collaboration.",
    blocks: [
      {
        type: 'action',
        title: 'Explored codebase',
        content: 'Found existing auth and UI components',
        status: 'completed',
        isCollapsed: true
      },
      {
        type: 'code',
        title: 'app/tasks/page.tsx',
        content: [
          'export default function TasksPage() {',
          '+  const [tasks, setTasks] = useState<Task[]>([])',
          '+',
          '+  return (',
          '+    <div className="container mx-auto p-6">',
          '+      <div className="flex justify-between mb-6">',
          '+        <h1 className="text-2xl font-bold">Team Tasks</h1>',
          '+        <CreateTaskButton />',
          '+      </div>',
          '+      <TaskList tasks={tasks} />',
          '+    </div>',
          '+  )',
          '}'
        ],
        diff: { original: 0, modified: 10 },
        status: 'completed'
      },
      {
        type: 'status',
        content: '✓ Database schema updated',
        status: 'completed'
      },
      {
        type: 'status',
        content: '✓ API routes created',
        status: 'completed'
      },
      {
        type: 'status',
        content: '✓ Components implemented',
        status: 'completed'
      }
    ],
    delay: 1000
  },
  // 14. Ready message with localhost link
  {
    type: 'agent_response',
    id: 'msg-ready',
    content: "Your task management app is ready! Open http://localhost:3000 to see it in action.",
    delay: 800
  },
  // 15. Show localhost link and cursor click
  {
    type: 'show_localhost_link',
    delay: 400
  },
  // 16. Browser Preview
  {
    type: 'browser_preview',
    delay: 500
  }
]

// ============================================
// BLOCK COMPONENTS
// ============================================

function ActionBlock({ block }: { block: Block }) {
  const [isOpen, setIsOpen] = useState(!block.isCollapsed)
  const isRunning = block.status === 'running'
  
  // Determine icon based on title/content
  const getIcon = () => {
    if (block.title?.includes('Terminal')) return <Terminal className="w-3.5 h-3.5" />
    if (block.title?.includes('Explored')) return <Search className="w-3.5 h-3.5" />
    if (block.title?.includes('Reading')) return <FileText className="w-3.5 h-3.5" />
    return <Terminal className="w-3.5 h-3.5" />
  }

  return (
    <div className="rounded-md border border-[#27272a] bg-[#18181b] overflow-hidden my-2 animate-fade-in-up">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-[#27272a] transition-colors text-[#a1a1aa]"
      >
        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        {isRunning ? <Loader2 className="w-3.5 h-3.5 animate-spin text-[#3b82f6]" /> : getIcon()}
        <span className="font-medium">{block.title}</span>
      </button>
      
      {isOpen && block.content && (
        <div className="px-3 py-2 border-t border-[#27272a] font-mono text-[12px] text-[#a1a1aa] bg-[#101010] overflow-x-auto">
          {Array.isArray(block.content) ? (
            block.content.map((line, i) => (
              <div key={i} className="whitespace-pre">{line}</div>
            ))
          ) : (
            <div className="whitespace-pre">{block.content}</div>
          )}
        </div>
      )}
    </div>
  )
}

function DiffBlock({ block }: { block: Block }) {
  if (!Array.isArray(block.content)) return null

  return (
    <div className="rounded-md border border-[#27272a] bg-[#18181b] overflow-hidden my-2 animate-fade-in-up">
      <div className="flex items-center justify-between px-3 py-2 bg-[#27272a]/50 border-b border-[#27272a]">
        <div className="flex items-center gap-2 text-[13px] text-[#e4e4e7]">
          <FileCode className="w-3.5 h-3.5 text-[#3b82f6]" />
          <span>{block.title}</span>
        </div>
        {block.diff && (
          <div className="flex items-center gap-2 text-[12px]">
            <span className="text-[#22c55e]">+{block.diff.modified}</span>
            <span className="text-[#ef4444]">-{block.diff.original}</span>
          </div>
        )}
      </div>
      <div className="font-mono text-[12px] overflow-x-auto">
        {block.content.map((line, i) => {
          const isAdd = line.startsWith('+')
          const isRem = line.startsWith('-')
          return (
            <div 
              key={i} 
              className={`px-3 py-0.5 whitespace-pre ${
                isAdd ? 'bg-[#22c55e]/10 text-[#22c55e]' : 
                isRem ? 'bg-[#ef4444]/10 text-[#ef4444]' : 
                'text-[#a1a1aa]'
              }`}
            >
              {line}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StatusBlock({ block }: { block: Block }) {
  return (
    <div className="flex items-center gap-2 text-[13px] text-[#a1a1aa] py-1 animate-fade-in-up">
      <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e]" />
      <span>{block.content}</span>
    </div>
  )
}

function ChatMessage({ message, isSubmitting, linkClicked }: { message: Message; isSubmitting?: boolean; linkClicked?: boolean }) {
  const isUser = message.role === 'user'
  const displayText = message.isStreaming ? (message.streamingText || '') : message.content

  if (isUser) {
    return (
      <div className={`flex flex-row-reverse gap-3 mb-6 transition-all duration-300 ${
        isSubmitting ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0 animate-fade-in-up'
      }`}>
        <div className="px-4 py-2.5 bg-[#27272a] text-[#e4e4e7] rounded-2xl rounded-tr-sm max-w-[80%] text-[14px] leading-relaxed">
          {message.content}
        </div>
      </div>
    )
  }

  const renderContent = (text: string) => {
    if (!text) return null
    // Якщо це повідомлення про готовність, виділяємо посилання
    if (text.includes('http://localhost:3000')) {
      const parts = text.split('http://localhost:3000')
      return (
        <>
          {parts[0]}
          <span 
            id="localhost-link" 
            className={`text-blue-400 underline decoration-blue-400/30 cursor-pointer inline-block transition-all duration-500 ease-in-out ${
              linkClicked ? 'scale-110 text-blue-300 bg-blue-500/30 px-2 py-0.5 rounded shadow-[0_0_15px_rgba(59,130,246,0.5)]' : ''
            }`}
          >
            http://localhost:3000
          </span>
          {parts[1]}
        </>
      )
    }
    return text
  }

  return (
    <div className="mb-6 animate-fade-in-up">
      <div className="space-y-2">
        {displayText && (
          <div className="text-[#e4e4e7] text-[14px] leading-relaxed">
            {renderContent(displayText)}
            {message.isStreaming && (
              <span className="inline-block w-[2px] h-[16px] bg-[#e4e4e7] ml-1 align-middle animate-pulse" />
            )}
          </div>
        )}
        {!message.isStreaming && message.blocks?.map((block, i) => {
          switch (block.type) {
            case 'action': return <ActionBlock key={i} block={block} />
            case 'code': return <DiffBlock key={i} block={block} />
            case 'status': return <StatusBlock key={i} block={block} />
            case 'terminal': return <ActionBlock key={i} block={block} />
            default: return null
          }
        })}
      </div>
    </div>
  )
}

// ============================================
// LAYOUT COMPONENTS
// ============================================

// 1. Input Area Component
function InputArea({ 
  inputValue, 
  isTyping, 
  cursorVisible,
  isSubmitting
}: { 
  inputValue: string
  isTyping: boolean
  cursorVisible: boolean
  isSubmitting?: boolean
}) {
  return (
    <div className="flex flex-col bg-[#18181b] border-t border-[#27272a] p-3 gap-3">
      {/* Input Field */}
      <div className={`relative min-h-[24px] font-sans text-[15px] leading-relaxed text-[#a1a1aa] transition-opacity ${
        isSubmitting ? 'opacity-0' : 'opacity-100'
      }`}>
        {inputValue || (
          <span className="text-[#52525b]">Plan, @ for context, / for commands</span>
        )}
        {cursorVisible && !isSubmitting && (
          <span className="inline-block w-[2px] h-[18px] bg-[#a1a1aa] align-middle ml-[1px] -mt-[2px]" />
        )}
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between mt-2">
        {/* Left: Mode Selectors */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#27272a] hover:bg-[#3f3f46] transition-colors text-xs font-medium text-[#e4e4e7]">
            <InfinityIcon className="w-3.5 h-3.5" />
            <span>Agent</span>
            <ChevronDown className="w-3 h-3 text-[#a1a1aa]" />
          </button>
          <button className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-[#27272a] transition-colors text-xs font-medium text-[#a1a1aa]">
            <span>Auto</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="text-[#52525b] hover:text-[#a1a1aa] transition-colors">
            <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">@</div>
          </button>
          <button className="text-[#52525b] hover:text-[#a1a1aa] transition-colors">
            <Globe className="w-4 h-4" />
          </button>
          <button className="text-[#52525b] hover:text-[#a1a1aa] transition-colors">
            <ImageIcon className="w-4 h-4" />
          </button>
          <button className="text-[#52525b] hover:text-[#a1a1aa] transition-colors">
            <Mic className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// 2. Footer Component
function Footer() {
  return (
    <div className="px-4 py-1.5 bg-[#18181b] border-t border-[#27272a] flex items-center justify-between text-[11px] text-[#52525b]">
      <div className="flex items-center gap-2">
        <Command className="w-3 h-3" />
        <span>You've used 54% of your included API usage</span>
      </div>
    </div>
  )
}

// 3. Browser Preview - Dashboard Layout
function BrowserPreview({ visible, scrollProgress }: { visible: boolean; scrollProgress: number }) {
  if (!visible) return null
  
  return (
    <div className="absolute inset-0 bg-white z-20 flex flex-col animate-fade-in">
      {/* Chrome Toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#f1f3f4] border-b border-gray-300">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-white rounded-md px-3 py-1.5 mx-2 border border-gray-300 shadow-sm">
          <Globe className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700 font-medium">localhost:3000</span>
        </div>
      </div>
      
      {/* Dashboard Layout */}
      <div className="flex-1 overflow-hidden relative bg-gray-50">
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(-${scrollProgress * 40}%)` }}
        >
          {/* Header */}
          <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg" />
              <div className="w-32 h-4 bg-gray-300 rounded" />
            </div>
            <div className="flex-1 max-w-md mx-8">
              <div className="h-9 bg-gray-100 rounded-lg flex items-center gap-2 px-3">
                <SearchIcon className="w-4 h-4 text-gray-400" />
                <div className="w-24 h-3 bg-gray-300 rounded" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
            </div>
          </div>
          
          {/* Main Layout */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 p-4">
              <div className="space-y-1">
                {[
                  { icon: LayoutDashboard, label: 'Dashboard' },
                  { icon: ListTodo, label: 'Tasks' },
                  { icon: Users, label: 'Team' },
                  { icon: Settings, label: 'Settings' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <item.icon className="w-4 h-4 text-gray-600" />
                    <div className="w-16 h-3 bg-gray-300 rounded" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-6 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg mb-3" />
                    <div className="w-20 h-5 bg-gray-300 rounded mb-2" />
                    <div className="w-16 h-3 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
              
              {/* Tasks List */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="w-32 h-5 bg-gray-400 rounded" />
                </div>
                <div className="divide-y divide-gray-100">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="px-4 py-3 flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                      <div className="flex-1 space-y-2">
                        <div className="w-48 h-4 bg-gray-300 rounded" />
                        <div className="w-32 h-3 bg-gray-200 rounded" />
                      </div>
                      <div className="w-16 h-6 bg-blue-100 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Team Section */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="w-28 h-5 bg-gray-400 rounded mb-4" />
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 bg-blue-100 rounded-full" />
                  ))}
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-600 border border-gray-200">
                    +3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export function AnimatedTerminal() {
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [phase, setPhase] = useState<Phase>('idle')
  const [messages, setMessages] = useState<Message[]>([])
  const [browserVisible, setBrowserVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Link click animation state
  const [linkClicked, setLinkClicked] = useState(false)
  
  const chatEndRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<{ cancel: boolean }>({ cancel: false })
  const [isPaused, setIsPaused] = useState(false)
  const isPausedRef = useRef(false)
  const inputValueRef = useRef("")

  // Sync ref with state
  useEffect(() => {
    isPausedRef.current = isPaused
  }, [isPaused])

  // Sync inputValue with ref
  useEffect(() => {
    inputValueRef.current = inputValue
  }, [inputValue])

  // Cursor blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Auto scroll logic (fixed to only scroll chat container)
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [messages])

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  // Wait while paused
  const waitWhilePaused = useCallback(async () => {
    while (isPausedRef.current) {
      await sleep(100)
      if (animationRef.current.cancel) return false
    }
    return true
  }, [])

  // Human-like typing function (для користувача) - ще 20% швидше
  const typeAsHuman = useCallback(async (text: string) => {
    for (let i = 0; i <= text.length; i++) {
      if (animationRef.current.cancel) break
      if (!(await waitWhilePaused())) break
      
      setInputValue(text.slice(0, i))
      
      // Варіативна швидкість друку (ще 20% швидше: 32-96ms)
      let delay = 32 + Math.random() * 64
      
      // Пауза після коми, крапки або пробілу (іноді) - теж швидше
      const char = text[i - 1]
      if (char === ',' || char === '.') {
        delay += 130 + Math.random() * 130 // пауза 130-260ms
      } else if (char === ' ' && Math.random() > 0.7) {
        delay += 65 + Math.random() * 95 // іноді пауза після пробілу
      }
      
      await sleep(delay)
    }
  }, [waitWhilePaused])

  // Agent-like streaming function (порційно, по словах/фразах)
  const streamText = useCallback(async (text: string, messageId: string) => {
    // Розбиваємо на частини (слова/фрази)
    const words = text.split(' ')
    let currentText = ''
    
    for (let i = 0; i < words.length; i++) {
      if (animationRef.current.cancel) break
      if (!(await waitWhilePaused())) break
      
      // Додаємо слово з пробілом
      currentText += (i > 0 ? ' ' : '') + words[i]
      
      setMessages(prev => prev.map(msg => {
        if (msg.id === messageId) {
          return {
            ...msg,
            streamingText: currentText,
            isStreaming: i < words.length - 1
          }
        }
        return msg
      }))
      
      // Варіативна затримка між словами
      const delay = 50 + Math.random() * 100
      await sleep(delay)
    }
    
    // Завершуємо streaming
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        return {
          ...msg,
          streamingText: text,
          isStreaming: false
        }
      }
      return msg
    }))
  }, [waitWhilePaused])

  const runAnimation = useCallback(async () => {
    animationRef.current.cancel = false

    while (!animationRef.current.cancel) {
      // Reset
      setMessages([])
      setInputValue("")
      setBrowserVisible(false)
      setScrollProgress(0)
      setPhase('idle')
      setIsSubmitting(false)
      setLinkClicked(false)
      
      await sleep(1000)

      for (const step of SCENARIO) {
        if (animationRef.current.cancel) break
        if (!(await waitWhilePaused())) break

        if (step.delay) await sleep(step.delay)

        switch (step.type) {
          case 'user_typing':
            setIsTyping(true)
            const text = step.text || ""
            await typeAsHuman(text)
            setIsTyping(false)
            break

          case 'user_submit':
            const currentInput = inputValueRef.current
            if (currentInput) {
              // Animation: fade out input
              setIsSubmitting(true)
              await sleep(200)
              
              // Add message to chat
              setMessages(prev => [...prev, {
                id: step.id || Date.now().toString(),
                role: 'user',
                content: currentInput
              }])
              
              // Clear input
              setInputValue("")
              inputValueRef.current = ""
              setIsSubmitting(false)
              await sleep(100)
            }
            break

          case 'agent_response':
            // Add message with empty content first
            const msgId = step.id || Date.now().toString()
            setMessages(prev => [...prev, {
              id: msgId,
              role: 'assistant',
              content: step.content || "",
              blocks: step.blocks as Block[],
              isStreaming: true,
              streamingText: ''
            }])
            
            // Stream the text
            if (step.content) {
              await streamText(step.content, msgId)
            }
            
            // Show blocks after streaming
            if (step.blocks && step.blocks.length > 0) {
              await sleep(300)
            }
            break

          case 'block_update':
            setMessages(prev => prev.map(msg => {
              if (msg.id === step.messageId && msg.blocks) {
                const newBlocks = [...msg.blocks]
                if (newBlocks[step.blockIndex as number]) {
                  const update = step.update as Partial<Block>
                  newBlocks[step.blockIndex as number] = {
                    ...newBlocks[step.blockIndex as number],
                    ...update
                  } as Block
                }
                return { ...msg, blocks: newBlocks }
              }
              return msg
            }))
            break

          case 'add_block':
            setMessages(prev => prev.map(msg => {
              if (msg.id === step.messageId) {
                return {
                  ...msg,
                  blocks: [...(msg.blocks || []), step.block as Block]
                }
              }
              return msg
            }))
            break

          case 'show_localhost_link':
            // Пауза перед кліком (коротша для динамічності)
            await sleep(500)
            
            // Анімація натискання на посилання (тригерить CSS transition)
            setLinkClicked(true)
            await sleep(800) // Тримаємо натиснутим
            
            // Скидаємо перед переходом у браузер
            setLinkClicked(false)
            await sleep(200)
            break

          case 'browser_preview':
            setBrowserVisible(true)
            // Animate scroll
            for (let i = 0; i <= 100; i++) {
              if (animationRef.current.cancel) break
              setScrollProgress(i / 100)
              await sleep(50)
            }
            break
        }
      }

      if (animationRef.current.cancel) break
      await sleep(5000)
    }
  }, [waitWhilePaused, streamText, typeAsHuman])

  useEffect(() => {
    runAnimation()
    return () => {
      animationRef.current.cancel = true
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div 
      ref={containerRef}
      className="group relative w-full max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Window Frame */}
      <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-[#27272a] bg-[#101010] flex flex-col h-[500px] relative">
        
        {/* Title Bar */}
        <div className="flex items-center px-4 py-3 bg-[#101010] border-b border-[#27272a]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#27272a]" />
            <div className="w-3 h-3 rounded-full bg-[#27272a]" />
            <div className="w-3 h-3 rounded-full bg-[#27272a]" />
          </div>
          <div className="flex-1 text-center text-[13px] font-medium text-[#52525b]">
            Cursor Agent
          </div>
          <div className="w-[52px]" /> {/* Spacer for centering */}
        </div>

        {/* Chat Area */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-4 font-sans text-[14px] relative dark-scrollbar"
        >
          {messages.length === 0 && phase === 'idle' ? (
            <div className="flex items-center justify-center h-full text-[#27272a] text-sm">
              <span>Ready to build</span>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((msg) => (
                <ChatMessage 
                  key={msg.id} 
                  message={msg}
                  isSubmitting={isSubmitting && msg.role === 'user' && msg.id === messages[messages.length - 1]?.id}
                  linkClicked={linkClicked && msg.id === 'msg-ready'}
                />
              ))}
                </div>
              )}
            </div>
            
        {/* Input Area */}
        <InputArea 
          inputValue={inputValue}
          isTyping={isTyping}
          cursorVisible={cursorVisible}
          isSubmitting={isSubmitting}
        />

        {/* Footer */}
        <Footer />

        {/* Browser Preview Overlay */}
        <BrowserPreview visible={browserVisible} scrollProgress={scrollProgress} />
      </div>
    </div>
  )
}
