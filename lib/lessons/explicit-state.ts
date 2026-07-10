import type { Lesson } from "@/lib/lessons/types"

export const explicitStateLesson: Lesson = {
  slug: "explicit-state",
  title: "Explicit State Props",
  description:
    "Make state explicit in your components with props like isLoading, isDisabled, and hasError so the UI always reflects what's happening.",
  concept: "state → UI",
  objectives: [
    "Build a component that accepts explicit state props",
    "Toggle each prop and observe how the UI responds",
    "Understand why explicit state makes components predictable",
  ],
  hints: [
    "Try enabling hasError and isLoading at the same time — which wins?",
    "Add a new prop like isSuccess and render a checkmark",
    "What would this component look like without explicit props?",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `import { useState } from "react";

type SubmitButtonProps = {
  isLoading: boolean;
  isDisabled: boolean;
  hasError: boolean;
  onClick: () => void;
};

function SubmitButton({ isLoading, isDisabled, hasError, onClick }: SubmitButtonProps) {
  const label = isLoading ? "Saving…" : hasError ? "Retry" : "Save Changes";
  const style: React.CSSProperties = {
    background: hasError ? "#7f1d1d" : undefined,
    borderColor: hasError ? "#991b1b" : undefined,
  };

  return (
    <button
      className={hasError ? "btn btn-outline" : "btn btn-default"}
      style={style}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="preview-root stack">
      <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
        Explicit State Props
      </h2>
      <p className="muted">
        Toggle the switches to see how the button responds to each state.
      </p>

      <div className="stack" style={{ gap: "0.75rem" }}>
        <label className="row" style={{ cursor: "pointer" }}>
          <input type="checkbox" checked={isLoading} onChange={(e) => setIsLoading(e.target.checked)} />
          <span style={{ fontSize: "0.875rem" }}>isLoading</span>
        </label>
        <label className="row" style={{ cursor: "pointer" }}>
          <input type="checkbox" checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} />
          <span style={{ fontSize: "0.875rem" }}>isDisabled</span>
        </label>
        <label className="row" style={{ cursor: "pointer" }}>
          <input type="checkbox" checked={hasError} onChange={(e) => setHasError(e.target.checked)} />
          <span style={{ fontSize: "0.875rem" }}>hasError</span>
        </label>
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <SubmitButton
          isLoading={isLoading}
          isDisabled={isDisabled}
          hasError={hasError}
          onClick={() => alert("Clicked!")}
        />
      </div>

      <div className="state-panel">
        <strong>State inspector</strong>
        <div className="mono">isLoading = {String(isLoading)}</div>
        <div className="mono">isDisabled = {String(isDisabled)}</div>
        <div className="mono">hasError = {String(hasError)}</div>
      </div>
    </div>
  );
}
`,
  },
}
