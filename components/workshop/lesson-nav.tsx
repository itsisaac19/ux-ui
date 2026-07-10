"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sections } from "@/lib/lessons/registry"
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
          <SheetTitle>UX/UI Workshop</SheetTitle>
          <SheetDescription>
            Interactive lessons on building great user experiences.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-6.5rem)]">
          <nav className="flex flex-col gap-1 p-3">
            {sections.map((section, i) => (
              <div key={section.label} className="flex flex-col gap-1">
                {i > 0 && <Separator className="my-2" />}
                <p className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {section.label}
                </p>
                {section.lessons.map((lesson) => {
                  const href = `/learn/${lesson.slug}`
                  const isActive = pathname === href

                  return (
                    <Link
                      key={lesson.slug}
                      href={href}
                      className={cn(
                        "block rounded-lg border border-transparent px-3 py-2 transition-colors",
                        isActive
                          ? "border-border bg-muted"
                          : "hover:bg-muted/60"
                      )}
                    >
                      <span className="text-sm font-medium">
                        {lesson.title}
                      </span>
                    </Link>
                  )
                })}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
