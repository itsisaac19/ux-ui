import Link from "next/link"

import { defaultLessonSlug } from "@/lib/lessons/registry"

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      <nav className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <span className="landing-fade-up text-[13px] font-medium uppercase tracking-[0.06em] text-foreground/90">
          DX Hub AI Summer Camp
        </span>
        <Link
          href={`/learn/${defaultLessonSlug}`}
          style={{ "--landing-delay": "80ms" } as React.CSSProperties}
          className="landing-fade-up group inline-flex items-center gap-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
        >
          Lessons
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5 translate-x-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          >
            <path
              d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </nav>

      <section className="relative flex flex-1 items-center justify-center px-6">
        {/* cool-tinted glow behind the title */}
        <div
          aria-hidden
          style={{
            "--landing-delay": "120ms",
            background:
              "radial-gradient(closest-side, rgba(130,160,235,0.42), rgba(95,125,200,0.20) 55%, transparent 100%)",
          } as React.CSSProperties}
          className="landing-fade-in pointer-events-none fixed left-1/2 top-[40%] z-0 h-[460px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        />

        <div className="relative z-10 -translate-y-[8%] text-center">
          <h1
            style={{ "--landing-delay": "180ms" } as React.CSSProperties}
            className="landing-fade-up text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            UX and UI in Practice
          </h1>

          <p
            style={{ "--landing-delay": "300ms" } as React.CSSProperties}
            className="landing-fade-up mx-auto mt-5 max-w-[34rem] text-base text-foreground/70 sm:text-lg"
          >
            A hands-on look at building interfaces with React.
          </p>

          <div
            style={{ "--landing-delay": "420ms" } as React.CSSProperties}
            className="landing-fade-up mt-8 flex flex-col items-center gap-2.5"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground/60">
              Presented by
            </span>
            <div className="flex items-center gap-3 text-sm font-medium text-foreground/85">
              <span>Isaac Tsai</span>
              <span aria-hidden className="h-3.5 w-px bg-border" />
              <span>Mira Pinto</span>
            </div>
          </div>

          <div
            style={{ "--landing-delay": "540ms" } as React.CSSProperties}
            className="landing-fade-up mt-9"
          >
            <Link
              href={`/learn/${defaultLessonSlug}`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Open the lessons
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
