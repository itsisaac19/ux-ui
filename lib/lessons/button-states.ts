import type { Lesson } from "@/lib/lessons/types"

export const buttonStatesLesson: Lesson = {
  slug: "button-states",
  title: "Button States",
  description:
    "A button can be idle, loading, disabled, or successful — each state communicates something different.",
  concept: "feedback",
  objectives: [
    "Understand why visual feedback matters on interaction",
    "Cycle a button through idle → loading → success states",
    "Prevent duplicate submissions with disabled state",
  ],
  hints: [
    "Try removing the disabled prop — what happens if you click multiple times?",
    "Change the timeout to simulate a slower network",
    "Add an error state after loading",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `import { useState } from "react";
import { Button } from "./components/ui";

export default function App() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit() {
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <div className="preview-root stack">
      <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
        Submit Feedback
      </h2>
      <p className="muted">
        Click submit and watch the button respond to each phase.
      </p>

      <div className="row">
        <Button
          onClick={handleSubmit}
          disabled={status !== "idle"}
        >
          {status === "idle" && "Submit"}
          {status === "loading" && "Submitting…"}
          {status === "success" && "✓ Done"}
        </Button>
      </div>

      <div className="state-panel">
        <strong>State inspector</strong>
        <div className="mono">status = "{status}"</div>
      </div>
    </div>
  );
}
`,
  },
}
