export default function LessonLoading() {
  return (
    <div className="flex h-svh flex-col overflow-hidden bg-background">
      <header className="flex h-10 shrink-0 items-center gap-2 border-b px-2">
        <div className="h-5 w-5 animate-pulse rounded bg-muted" />
        <div className="h-4 w-32 animate-pulse rounded bg-muted" />
      </header>

      <main className="flex min-h-0 flex-1">
        <div className="flex flex-1">
          <div className="flex-1 animate-pulse bg-muted/30" />
          <div className="flex-1 animate-pulse bg-muted/10" />
        </div>
      </main>
    </div>
  )
}
