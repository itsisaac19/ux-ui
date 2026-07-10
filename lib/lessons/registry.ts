import { buttonStatesLesson } from "@/lib/lessons/button-states"
import { colorContrastLesson } from "@/lib/lessons/color-contrast"
import { explicitStateLesson } from "@/lib/lessons/explicit-state"
import { layoutLesson } from "@/lib/lessons/layout"
import { layoutAdvancedLesson } from "@/lib/lessons/layout-advanced"
import { progressIndicatorsLesson } from "@/lib/lessons/progress-indicators"
import { sandpackSharedFiles } from "@/lib/lessons/sandpack-shared"
import { skeletonLoadersLesson } from "@/lib/lessons/skeleton-loaders"
import { typographyLesson } from "@/lib/lessons/typography"
import type { Lesson } from "@/lib/lessons/types"

export type LessonSection = {
  label: string
  lessons: Lesson[]
}

export const sections: LessonSection[] = [
  {
    label: "UX in Practice",
    lessons: [
      buttonStatesLesson,
      skeletonLoadersLesson,
      progressIndicatorsLesson,
      explicitStateLesson,
    ],
  },
  {
    label: "UI Fundamentals",
    lessons: [layoutLesson, layoutAdvancedLesson, typographyLesson, colorContrastLesson],
  },
]

export const lessons: Lesson[] = sections.flatMap((s) => s.lessons)

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug)
}

export function getLessonFiles(lesson: Lesson): Record<string, string> {
  return {
    ...sandpackSharedFiles,
    ...lesson.files,
  }
}

export const defaultLessonSlug = lessons[0]?.slug ?? "button-states"
