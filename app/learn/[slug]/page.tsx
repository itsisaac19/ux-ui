import { notFound } from "next/navigation"

import { LessonShell } from "@/components/workshop/lesson-shell"
import { getLesson, lessons } from "@/lib/lessons/registry"

type LessonPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }))
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { slug } = await params
  const lesson = getLesson(slug)

  if (!lesson) {
    return { title: "Lesson not found" }
  }

  return {
    title: lesson.title,
    description: lesson.description,
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params
  const lesson = getLesson(slug)

  if (!lesson) {
    notFound()
  }

  return <LessonShell lesson={lesson} />
}
