"use client"

import { useCallback, useEffect, useState } from "react"
import { RotateCw } from "lucide-react"
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  useSandpack,
} from "@codesandbox/sandpack-react"

import { useContainerHeight } from "@/hooks/use-container-height"
import type { Lesson } from "@/lib/lessons/types"
import { getLessonFiles } from "@/lib/lessons/registry"

type SandpackLessonProps = {
  lesson: Lesson
}

function SandpackContent({
  height,
  editorWidth,
  isDragging,
  onMouseDown,
}: {
  height: number
  editorWidth: number
  isDragging: boolean
  onMouseDown: (e: React.MouseEvent) => void
}) {
  const { sandpack } = useSandpack()
  const [codeReady, setCodeReady] = useState(false)
  const [previewReady, setPreviewReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCodeReady(true), 600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (sandpack.status === "running") {
      const timer = setTimeout(() => setPreviewReady(true), 400)
      return () => clearTimeout(timer)
    }
  }, [sandpack.status])

  function handleRerun() {
    setPreviewReady(false)
    sandpack.runSandpack()
    setTimeout(() => setPreviewReady(true), 600)
  }

  return (
    <div style={{ position: "relative", height }}>
      <SandpackLayout
        className="workshop-sandpack-layout"
        style={{ height }}
      >
        <SandpackCodeEditor
          showTabs
          showLineNumbers
          showInlineErrors
          wrapContent
          closableTabs={false}
        />
        <SandpackPreview
          showOpenInCodeSandbox={false}
          showRefreshButton={false}
        />
      </SandpackLayout>

      {/* Code skeleton */}
      <div
        className="absolute top-0 left-0 bottom-0 z-20 border-r border-border bg-[#1e1e1e] p-4 transition-opacity duration-300"
        style={{
          width: `${editorWidth}%`,
          opacity: codeReady ? 0 : 1,
          pointerEvents: codeReady ? "none" : "auto",
        }}
      >
        <div className="mb-4 h-3 w-20 animate-pulse rounded bg-muted" />
        <div className="space-y-2">
          <div className="h-3 w-[90%] animate-pulse rounded bg-muted" />
          <div className="h-3 w-[75%] animate-pulse rounded bg-muted" />
          <div className="h-3 w-[60%] animate-pulse rounded bg-muted" />
          <div className="h-3 w-[85%] animate-pulse rounded bg-muted" />
          <div className="h-3 w-[40%] animate-pulse rounded bg-muted" />
          <div className="h-3 w-[70%] animate-pulse rounded bg-muted" />
          <div className="h-3 w-[55%] animate-pulse rounded bg-muted" />
          <div className="h-3 w-[80%] animate-pulse rounded bg-muted" />
        </div>
      </div>

      {/* Preview skeleton */}
      <div
        className="absolute top-0 bottom-0 right-0 z-20 bg-[#0a0a0a] p-6"
        style={{
          left: `${editorWidth}%`,
          opacity: previewReady ? 0 : 1,
          pointerEvents: previewReady ? "none" : "auto",
          transition: previewReady ? "opacity 300ms ease" : "none",
        }}
      >
        <div className="space-y-3">
          <div className="h-4 w-32 animate-pulse rounded bg-muted/70" />
          <div className="h-3 w-48 animate-pulse rounded bg-muted/60" />
          <div className="mt-4 h-8 w-24 animate-pulse rounded bg-muted/70" />
        </div>
      </div>

      {/* Re-run button in editor tab bar area */}
      <button
        type="button"
        onClick={handleRerun}
        className={`absolute top-2 z-30 inline-flex h-6 cursor-pointer items-center gap-1 rounded-md px-2 text-xs font-medium transition-colors ${
          sandpack.editorState === "dirty"
            ? "bg-primary text-primary-foreground hover:bg-primary/80"
            : "text-foreground/70 hover:bg-white/10 hover:text-foreground"
        }`}
        style={{ right: `calc(${100 - editorWidth}% + 0.5rem)` }}
      >
        <RotateCw className="size-3" />
        Re-run
      </button>

      {isDragging && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 9,
            cursor: "col-resize",
          }}
        />
      )}
      <div
        className="workshop-resize-handle"
        style={{ left: `${editorWidth}%` }}
        onMouseDown={onMouseDown}
      />
    </div>
  )
}

export function SandpackLesson({ lesson }: SandpackLessonProps) {
  const { ref, height } = useContainerHeight()
  const [editorWidth, setEditorWidth] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)

    const onMouseMove = (ev: MouseEvent) => {
      const layout = document.querySelector(".workshop-sandpack-layout")
      if (!layout) return
      const rect = layout.getBoundingClientRect()
      const pct = ((ev.clientX - rect.left) / rect.width) * 100
      setEditorWidth(Math.min(Math.max(pct, 20), 80))
    }

    const onMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
  }, [])

  return (
    <div ref={ref} className="workshop-sandpack-container">
      {height > 0 && (
        <div className="absolute inset-0">
          <style>{`
            .workshop-sandpack-root,
            .workshop-sandpack-layout,
            .workshop-sandpack-layout > .sp-stack {
              height: ${height}px !important;
              max-height: ${height}px !important;
              min-height: 0 !important;
            }

            .workshop-sandpack-layout .sp-code-editor,
            .workshop-sandpack-layout .sp-preview-container {
              flex: 1 1 auto !important;
              min-height: 0 !important;
            }

            .workshop-sandpack-layout .sp-preview-iframe {
              height: 100% !important;
              min-height: 0 !important;
            }

            .workshop-sandpack-layout > .sp-stack:first-child {
              flex: 0 0 ${editorWidth}% !important;
            }

            .workshop-sandpack-layout > .sp-stack:last-child {
              flex: 1 1 0% !important;
            }
          `}</style>
          <SandpackProvider
            key={lesson.slug}
            className="workshop-sandpack-root"
            style={{ height, width: "100%" }}
            template="react-ts"
            theme="dark"
            files={getLessonFiles(lesson)}
            options={{
              activeFile: lesson.activeFile ?? "/App.tsx",
              visibleFiles: [lesson.activeFile ?? "/App.tsx"],
              recompileMode: "delayed",
              recompileDelay: 99999,
              autorun: true,
            }}
          >
            <SandpackContent
              height={height}
              editorWidth={editorWidth}
              isDragging={isDragging}
              onMouseDown={onMouseDown}
            />
          </SandpackProvider>
        </div>
      )}
    </div>
  )
}
