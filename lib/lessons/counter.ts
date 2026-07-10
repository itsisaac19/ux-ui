import type { Lesson } from "@/lib/lessons/types"

export const counterLesson: Lesson = {
  slug: "counter",
  title: "Counter with useState",
  description:
    "Learn how React remembers values between renders with useState.",
  concept: "useState",
  objectives: [
    "Declare state with useState(initialValue)",
    "Read state in JSX",
    "Update state with the setter function",
  ],
  hints: [
    "Try changing the initial count from 0 to 10.",
    "Add a Reset button that calls setCount(0).",
    "Notice: setCount(count + 1) uses the value from the current render.",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `import { useState } from "react";
import { Button } from "./components/ui";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="preview-root stack">
      <div>
        <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>Counter</h2>
        <p className="muted">Click the buttons to update local component state.</p>
      </div>

      <div className="row">
        <Button variant="outline" onClick={() => setCount(count - 1)}>
          −
        </Button>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>

      <div className="state-panel">
        <strong>State inspector</strong>
        <div className="mono">count = {count}</div>
      </div>
    </div>
  );
}
`,
  },
}
