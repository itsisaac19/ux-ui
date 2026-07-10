"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { lessons } from "@/lib/lessons/registry"
import { cn } from "@/lib/utils"

export function LessonNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Open lesson menu" />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="w-[min(100vw-2rem,20rem)] p-0">
        <SheetHeader className="border-b">
          <SheetTitle>React Workshop</SheetTitle>
          <SheetDescription>
            Pick a concept to explore state in an interactive editor.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-6.5rem)]">
          <nav className="flex flex-col gap-1 p-3">
            {lessons.map((lesson) => {
              const href = `/learn/${lesson.slug}`
              const isActive = pathname === href

              return (
                <Link
                  key={lesson.slug}
                  href={href}
                  className={cn(
                    "rounded-lg border border-transparent px-3 py-2.5 transition-colors",
                    isActive
                      ? "border-border bg-muted"
                      : "hover:bg-muted/60"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{lesson.title}</span>
                    <Badge variant="secondary">{lesson.concept}</Badge>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {lesson.description}
                  </p>
                </Link>
              )
            })}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
