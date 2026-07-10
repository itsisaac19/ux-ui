import { redirect } from "next/navigation"

import { defaultLessonSlug } from "@/lib/lessons/registry"

export default function HomePage() {
  redirect(`/learn/${defaultLessonSlug}`)
}
