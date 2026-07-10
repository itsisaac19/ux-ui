import { counterLesson } from "@/lib/lessons/counter"
import { controlledInputLesson } from "@/lib/lessons/controlled-input"
import { liftingStateLesson } from "@/lib/lessons/lifting-state"
import { sandpackSharedFiles } from "@/lib/lessons/sandpack-shared"
import { toggleLesson } from "@/lib/lessons/toggle"
import type { Lesson } from "@/lib/lessons/types"

export const lessons: Lesson[] = [
  counterLesson,
  toggleLesson,
  controlledInputLesson,
  liftingStateLesson,
]

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug)
}

export function getLessonFiles(lesson: Lesson): Record<string, string> {
  return {
    ...sandpackSharedFiles,
    ...lesson.files,
  }
}

export const defaultLessonSlug = lessons[0]?.slug ?? "counter"
