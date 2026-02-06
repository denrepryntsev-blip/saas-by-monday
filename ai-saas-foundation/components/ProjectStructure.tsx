"use client"

import { useState } from "react"
import { Folder, File, ChevronRight, ChevronDown, FileCode, FileText, Settings, Database } from "lucide-react"

interface FileNode {
  name: string
  type: 'file' | 'folder'
  icon?: React.ReactNode
  children?: FileNode[]
}

const projectStructure: FileNode[] = [
  {
    name: 'docs',
    type: 'folder',
    icon: <Folder className="w-4 h-4" />
  },
  {
    name: 'src',
    type: 'folder',
    icon: <Folder className="w-4 h-4" />,
    children: [
      {
        name: 'app',
        type: 'folder',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { name: '(admin)', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: '(marketing)', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'api', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'auth', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'android-chrome-192x192.png', type: 'file', icon: <File className="w-4 h-4" /> },
          { name: 'android-chrome-512x512.png', type: 'file', icon: <File className="w-4 h-4" /> },
          { name: 'apple-touch-icon.png', type: 'file', icon: <File className="w-4 h-4" /> },
          { name: 'favicon-16x16.png', type: 'file', icon: <File className="w-4 h-4" /> },
          { name: 'favicon-32x32.png', type: 'file', icon: <File className="w-4 h-4" /> },
          { name: 'favicon.ico', type: 'file', icon: <File className="w-4 h-4" /> },
          { name: 'globals.css', type: 'file', icon: <FileText className="w-4 h-4" /> },
          { name: 'layout.tsx', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'siteConfig.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> }
        ]
      },
      {
        name: 'components',
        type: 'folder',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { name: 'dialogs', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'habits', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'marketing', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'navigations', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'ui', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'AppInitializer.tsx', type: 'file', icon: <FileCode className="w-4 h-4" /> }
        ]
      },
      {
        name: 'context',
        type: 'folder',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { name: 'ConfirmProvider.tsx', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'QueryClientProviderWrapper.tsx', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'ToastContext.tsx', type: 'file', icon: <FileCode className="w-4 h-4" /> }
        ]
      },
      {
        name: 'hooks',
        type: 'folder',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { name: 'use-local-storage.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'use-mobile.tsx', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'useConfirm.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'useHabits.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'useScroll.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> }
        ]
      },
      {
        name: 'lib',
        type: 'folder',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { name: 'api', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'auth', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'db', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'helpers', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'supabase', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'tenants', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'validation', type: 'folder', icon: <Folder className="w-4 h-4" /> },
          { name: 'utils.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> }
        ]
      },
      {
        name: 'store',
        type: 'folder',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { name: 'appStore.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'useDialogStore.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> }
        ]
      },
      {
        name: 'types',
        type: 'folder',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { name: 'formatters.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> }
        ]
      },
      {
        name: 'utils',
        type: 'folder',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { name: 'constants.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'formatters.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> },
          { name: 'middleware.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> }
        ]
      }
    ]
  },
  { name: 'middleware.ts', type: 'file', icon: <FileCode className="w-4 h-4" /> },
  {
    name: 'supabase',
    type: 'folder',
    icon: <Folder className="w-4 h-4" />,
    children: [
      {
        name: 'migrations',
        type: 'folder',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { name: '0002_rls.sql', type: 'file', icon: <Database className="w-4 h-4" /> },
          { name: '0003_user_tenant_trigger.sql', type: 'file', icon: <Database className="w-4 h-4" /> },
          { name: 'README.md', type: 'file', icon: <FileText className="w-4 h-4" /> }
        ]
      }
    ]
  },
  { name: '.cursorrules', type: 'file', icon: <Settings className="w-4 h-4" /> },
  { name: '.env.example', type: 'file', icon: <FileText className="w-4 h-4" /> },
  { name: '.gitignore', type: 'file', icon: <FileText className="w-4 h-4" /> },
  { name: 'README.md', type: 'file', icon: <FileText className="w-4 h-4" /> },
  { name: 'components.json', type: 'file', icon: <FileText className="w-4 h-4" /> },
  { name: 'drizzle.config.ts', type: 'file', icon: <Settings className="w-4 h-4" /> },
  { name: 'eslint.config.mjs', type: 'file', icon: <Settings className="w-4 h-4" /> },
  { name: 'next.config.ts', type: 'file', icon: <Settings className="w-4 h-4" /> },
  { name: 'package-lock.json', type: 'file', icon: <FileText className="w-4 h-4" /> },
  { name: 'package.json', type: 'file', icon: <FileText className="w-4 h-4" /> },
  { name: 'postcss.config.js', type: 'file', icon: <Settings className="w-4 h-4" /> },
  { name: 'project.prd.example.json', type: 'file', icon: <FileText className="w-4 h-4" /> },
  { name: 'tailwind.config.js', type: 'file', icon: <Settings className="w-4 h-4" /> },
  { name: 'tsconfig.json', type: 'file', icon: <Settings className="w-4 h-4" /> }
]


export function ProjectStructure() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['src']))

  const toggleNode = (path: string) => {
    const newExpanded = new Set(expanded)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpanded(newExpanded)
  }

  const renderNode = (node: FileNode, path: string = ''): React.ReactNode => {
    const currentPath = path ? `${path}/${node.name}` : node.name
    const isExpanded = expanded.has(currentPath)

    return (
      <div key={currentPath}>
        <div
          className="flex items-center gap-1.5 py-1 px-2 hover:bg-gray-800/30 rounded cursor-pointer group transition-colors"
          onClick={node.type === 'folder' ? () => toggleNode(currentPath) : undefined}
        >
          {node.type === 'folder' ? (
            isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
            )
          ) : (
            <span className="w-3.5" />
          )}
          <span className="text-gray-400 flex-shrink-0">
            {node.icon || (node.type === 'folder' ? <Folder className="w-4 h-4" /> : <File className="w-4 h-4" />)}
          </span>
          <span className={`text-sm font-mono ${
            node.type === 'folder' 
              ? 'text-blue-400' 
              : node.name.endsWith('.ts') || node.name.endsWith('.tsx')
              ? 'text-cyan-400'
              : node.name.endsWith('.json') || node.name.endsWith('.md') || node.name.endsWith('.css')
              ? 'text-yellow-400'
              : node.name.endsWith('.js') || node.name.endsWith('.mjs')
              ? 'text-yellow-300'
              : node.name.endsWith('.sql')
              ? 'text-green-400'
              : node.name.endsWith('.png') || node.name.endsWith('.ico')
              ? 'text-purple-300'
              : node.name === '.cursorrules' || node.name === '.env.example' || node.name === '.gitignore'
              ? 'text-purple-400'
              : 'text-gray-300'
          }`}>
            {node.name}
          </span>
        </div>
        {node.type === 'folder' && node.children && isExpanded && (
          <div className="ml-4">
            {node.children.map((child) => renderNode(child, currentPath))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-[#0d1117] rounded-xl border border-gray-800/50 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800/50">
        <Folder className="w-4 h-4 text-blue-400" />
        <span className="text-sm font-medium text-gray-300">Project Structure</span>
      </div>

      {/* Tree View */}
      <div className="p-4 font-mono text-sm max-h-[400px] overflow-y-auto dark-scrollbar">
        {projectStructure.map((node) => renderNode(node))}
      </div>
    </div>
  )
}

