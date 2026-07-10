import type { Lesson } from "@/lib/lessons/types"

export const layoutLesson: Lesson = {
  slug: "layout",
  title: "Layout",
  description:
    "Consistent spacing, grid structure, and max widths make interfaces feel polished and scannable.",
  concept: "CSS grid",
  objectives: [
    "Use CSS grid to create a predictable column structure",
    "Apply consistent gap, padding, and max-width",
    "Understand how layout choices affect perceived quality",
  ],
  hints: [
    "Try changing the grid to 2 columns — does it still feel balanced?",
    "Remove the max-width — what happens on a wide screen?",
    "Change the gap to 0 — notice how cramped it feels",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `export default function App() {
  return (
    <div className="preview-root">
      <div style={{
        maxWidth: "40rem",
        margin: "0 auto",
        padding: "1.5rem",
      }}>
        <h2 style={{ margin: "0 0 1rem", fontSize: "1rem", fontWeight: 600 }}>
          Dashboard
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.75rem",
        }}>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Users</div>
            </div>
            <div className="card-content">
              <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>1,204</span>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">Revenue</div>
            </div>
            <div className="card-content">
              <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>$8.2k</span>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">Orders</div>
            </div>
            <div className="card-content">
              <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>342</span>
            </div>
          </div>
        </div>

        <p className="muted" style={{ marginTop: "1rem" }}>
          Three equal columns, consistent gap, max-width container, and padding
          — small CSS choices that make the layout feel intentional.
        </p>
      </div>
    </div>
  );
}
`,
  },
}
