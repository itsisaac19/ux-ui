"use client"

import { Info } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LessonNav } from "@/components/workshop/lesson-nav"
import { SandpackLesson } from "@/components/workshop/sandpack-lesson"
import type { Lesson } from "@/lib/lessons/types"

type LessonShellProps = {
  lesson: Lesson
}

export function LessonShell({ lesson }: LessonShellProps) {
  return (
    <div className="flex h-svh flex-col overflow-hidden bg-background">
      <header className="flex h-10 shrink-0 items-center justify-between border-b px-2">
        <div className="flex items-center gap-2">
          <LessonNav />
          <h1 className="text-sm font-semibold">{lesson.title}</h1>
        </div>
        <Popover>
          <PopoverTrigger className="inline-flex size-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground">
            <Info className="size-4" />
          </PopoverTrigger>
          <PopoverContent align="end" className="w-80 max-h-[70vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold">Objectives</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {lesson.objectives.map((objective) => (
                    <li key={objective} className="flex gap-2">
                      <span aria-hidden className="text-foreground">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Try this</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {lesson.hints.map((hint) => (
                    <li key={hint} className="flex gap-2">
                      <span aria-hidden className="text-foreground">→</span>
                      <span>{hint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </header>

      <main className="min-h-0 flex-1">
        <section className="h-full min-h-0 overflow-hidden">
          <SandpackLesson lesson={lesson} />
        </section>
      </main>
    </div>
  )
}
