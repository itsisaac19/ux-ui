export type Lesson = {
  slug: string
  title: string
  description: string
  concept: string
  objectives: string[]
  hints: string[]
  files: Record<string, string>
  activeFile?: string
}
