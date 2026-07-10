"use client"

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"

import { useContainerHeight } from "@/hooks/use-container-height"
import type { Lesson } from "@/lib/lessons/types"
import { getLessonFiles } from "@/lib/lessons/registry"

type SandpackLessonProps = {
  lesson: Lesson
}

export function SandpackLesson({ lesson }: SandpackLessonProps) {
  const { ref, height } = useContainerHeight()

  return (
    <div ref={ref} className="workshop-sandpack-container">
      {height > 0 ? (
        <>
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
              recompileMode: "immediate",
              recompileDelay: 200,
              autorun: true,
            }}
          >
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
                showRefreshButton
              />
            </SandpackLayout>
          </SandpackProvider>
        </>
      ) : null}
    </div>
  )
}
