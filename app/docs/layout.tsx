"use client"
import React from "react"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { source } from '@/lib/source';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      themeSwitch={{
        enabled: false,
      }}
      tree={source.getPageTree()}>
      {children}
    </DocsLayout>
  )
}