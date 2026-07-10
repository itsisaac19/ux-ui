import type { Lesson } from "@/lib/lessons/types"

export const progressIndicatorsLesson: Lesson = {
  slug: "progress-indicators",
  title: "Progress Indicators",
  description:
    "For long-running actions, show the user that work has started, how far along it is, and let them cancel.",
  concept: "progress",
  objectives: [
    "Simulate a file upload with a progress bar",
    "Give the user a way to cancel mid-action",
    "Show different UI for idle, uploading, and complete states",
  ],
  hints: [
    "Try clicking Cancel midway — what state should the UI return to?",
    "Change the interval speed to simulate a slower upload",
    "Add a failure state at 80% progress",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `import { useState, useRef } from "react";
import { Button } from "./components/ui";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "uploading" | "done">("idle");
  const intervalRef = useRef<number | null>(null);

  function startUpload() {
    setStatus("uploading");
    setProgress(0);
    intervalRef.current = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          window.clearInterval(intervalRef.current!);
          setStatus("done");
          return 100;
        }
        return p + 5;
      });
    }, 150);
  }

  function cancel() {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setStatus("idle");
    setProgress(0);
  }

  function reset() {
    setStatus("idle");
    setProgress(0);
  }

  return (
    <div className="preview-root stack">
      <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
        File Upload
      </h2>
      <p className="muted">
        Simulate uploading a file with visible progress.
      </p>

      {status === "idle" && (
        <Button onClick={startUpload}>Upload File</Button>
      )}

      {status === "uploading" && (
        <div className="stack" style={{ gap: "0.5rem" }}>
          <div className="progress-track">
            <div className="progress-bar" style={{ width: progress + "%" }} />
          </div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <span className="muted">{progress}%</span>
            <Button variant="ghost" onClick={cancel}>Cancel</Button>
          </div>
        </div>
      )}

      {status === "done" && (
        <div className="stack" style={{ gap: "0.5rem" }}>
          <p style={{ margin: 0, color: "var(--foreground)" }}>✓ Upload complete</p>
          <Button variant="outline" onClick={reset}>Upload Another</Button>
        </div>
      )}

      <div className="state-panel">
        <strong>State inspector</strong>
        <div className="mono">status = "{status}"</div>
        <div className="mono">progress = {progress}</div>
      </div>
    </div>
  );
}
`,
  },
}
