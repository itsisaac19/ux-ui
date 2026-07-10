import type { Lesson } from "@/lib/lessons/types"

export const typographyLesson: Lesson = {
  slug: "typography",
  title: "Typography",
  description:
    "Font size, weight, line height, and responsive scaling create readable hierarchy without extra decoration.",
  concept: "type hierarchy",
  objectives: [
    "Create clear visual hierarchy with size and weight alone",
    "Use line-height for comfortable reading",
    "Apply clamp() for responsive font sizing",
  ],
  hints: [
    "Try changing the heading weight to 400 — does it still feel like a heading?",
    "Set line-height to 1.0 on the paragraph — notice the cramped feeling",
    "Resize the preview panel to see clamp() in action",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `export default function App() {
  return (
    <div className="preview-root">
      <div style={{ maxWidth: "36rem", margin: "0 auto", padding: "1.5rem" }}>
        <h1 style={{
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          margin: 0,
        }}>
          Good typography is invisible
        </h1>

        <p style={{
          fontSize: "1rem",
          lineHeight: 1.6,
          color: "var(--muted-foreground)",
          marginTop: "0.75rem",
        }}>
          When type is set well, readers focus on the content, not the
          formatting. Size creates hierarchy. Weight adds emphasis. Line
          height gives the text room to breathe.
        </p>

        <div style={{
          marginTop: "1.5rem",
          padding: "1rem",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          background: "var(--card)",
        }}>
          <p style={{ margin: 0, fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
            <strong style={{ color: "var(--foreground)" }}>clamp(1.5rem, 4vw, 2.25rem)</strong>
            {" "}— the heading scales between 1.5rem and 2.25rem based on
            viewport width. No breakpoints needed.
          </p>
        </div>
      </div>
    </div>
  );
}
`,
  },
}
