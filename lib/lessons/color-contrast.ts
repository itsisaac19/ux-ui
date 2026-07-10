import type { Lesson } from "@/lib/lessons/types"

export const colorContrastLesson: Lesson = {
  slug: "color-contrast",
  title: "Color & Contrast",
  description:
    "Color communicates meaning fast, but low contrast makes text unreadable — accessibility is not optional.",
  concept: "accessibility",
  objectives: [
    "See the difference between good and bad contrast ratios",
    "Understand why low contrast fails users with low vision",
    "Use color intentionally to communicate meaning",
  ],
  hints: [
    "Try changing the 'bad' example to a lighter background — can you find the threshold?",
    "Add a third example with colored text on a colored background",
    "What contrast ratio does WCAG AA require? (4.5:1 for normal text)",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `export default function App() {
  return (
    <div className="preview-root">
      <div style={{ maxWidth: "36rem", margin: "0 auto", padding: "1.5rem" }}>
        <h2 style={{ margin: "0 0 1rem", fontSize: "1rem", fontWeight: 600 }}>
          Contrast Comparison
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{
            padding: "1rem",
            borderRadius: "var(--radius)",
            background: "#171717",
            border: "1px solid var(--border)",
          }}>
            <span className="badge" style={{ background: "#166534", color: "#bbf7d0", marginBottom: "0.5rem" }}>
              Good contrast
            </span>
            <p style={{ margin: "0.5rem 0 0", color: "#fafafa", fontSize: "0.875rem", lineHeight: 1.5 }}>
              This text has a contrast ratio of ~17:1. It is easy to read
              on any screen, in any lighting, for any user.
            </p>
          </div>

          <div style={{
            padding: "1rem",
            borderRadius: "var(--radius)",
            background: "#171717",
            border: "1px solid var(--border)",
          }}>
            <span className="badge" style={{ background: "#7f1d1d", color: "#fca5a5", marginBottom: "0.5rem" }}>
              Bad contrast
            </span>
            <p style={{ margin: "0.5rem 0 0", color: "#333333", fontSize: "0.875rem", lineHeight: 1.5 }}>
              This text has a contrast ratio of ~1.4:1. It looks subtle
              but is nearly invisible to many users.
            </p>
          </div>
        </div>

        <p className="muted" style={{ marginTop: "1rem" }}>
          Good contrast helps everyone — users with low vision, dim screens,
          bright sunlight, or just tired eyes. WCAG AA requires at least 4.5:1
          for normal text.
        </p>
      </div>
    </div>
  );
}
`,
  },
}
