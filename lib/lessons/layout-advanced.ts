import type { Lesson } from "@/lib/lessons/types"

export const layoutAdvancedLesson: Lesson = {
  slug: "layout-advanced",
  title: "Layout: Auto-fit Grid",
  description:
    "Use auto-fit with minmax to create responsive grids that adapt without breakpoints.",
  concept: "auto-fit + minmax",
  objectives: [
    "Use grid-template-columns with auto-fit and minmax",
    "See how items reflow automatically as space changes",
    "Understand why this removes the need for media queries",
  ],
  hints: [
    "Try changing the minmax minimum from 10rem to 6rem",
    "Add more cards and resize the preview — watch them reflow",
    "What happens if you use auto-fill instead of auto-fit?",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `export default function App() {
  const items = ["Analytics", "Billing", "Settings", "Users", "Logs", "API Keys"];

  return (
    <div className="preview-root">
      <div style={{ maxWidth: "44rem", margin: "0 auto", padding: "1.5rem" }}>
        <h2 style={{ margin: "0 0 0.25rem", fontSize: "1rem", fontWeight: 600 }}>
          Auto-fit Grid
        </h2>
        <p className="muted" style={{ marginBottom: "1rem" }}>
          Resize the preview panel — cards reflow with no breakpoints.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
          gap: "0.75rem",
        }}>
          {items.map((item) => (
            <div key={item} className="card">
              <div className="card-header">
                <div className="card-title">{item}</div>
              </div>
              <div className="card-content">
                <span className="muted">Module</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "1.5rem",
          padding: "1rem",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          background: "var(--card)",
        }}>
          <p style={{ margin: 0, fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
            <strong style={{ color: "var(--foreground)" }}>repeat(auto-fit, minmax(10rem, 1fr))</strong>
            {" "}— each column is at least 10rem wide. As space allows, more
            columns appear. As it shrinks, columns drop to the next row.
          </p>
        </div>
      </div>
    </div>
  );
}
`,
  },
}
