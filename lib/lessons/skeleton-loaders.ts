import type { Lesson } from "@/lib/lessons/types"

export const skeletonLoadersLesson: Lesson = {
  slug: "skeleton-loaders",
  title: "Skeleton Loaders",
  description:
    "Skeletons hold layout space while data loads, preventing jumps and signaling that content is coming.",
  concept: "loading UX",
  objectives: [
    "Show a skeleton placeholder while data is being fetched",
    "Preserve layout stability — no content jumps",
    "Transition smoothly from skeleton to real content",
  ],
  hints: [
    "Try changing the delay to see how the skeleton feels at different speeds",
    "Add a second card that loads independently",
    "What happens if you remove the skeleton and show nothing?",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `import { useState, useEffect } from "react";

function Skeleton({ width = "100%", height = "1rem" }: { width?: string; height?: string }) {
  return (
    <div
      className="skeleton"
      style={{ width, height, borderRadius: "calc(var(--radius) - 2px)" }}
    />
  );
}

type User = { name: string; email: string; role: string };

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser({ name: "Alice Chen", email: "alice@company.com", role: "Engineer" });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preview-root stack">
      <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
        User Profile
      </h2>

      <div className="card">
        <div className="card-header" style={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
          {user ? (
            <div className="card-title">{user.name}</div>
          ) : (
            <Skeleton width="8rem" height="1.1rem" />
          )}
          {user ? (
            <div className="card-description">{user.email}</div>
          ) : (
            <Skeleton width="12rem" height="0.85rem" />
          )}
        </div>
        <div className="card-content">
          {user ? (
            <span className="badge">{user.role}</span>
          ) : (
            <Skeleton width="5rem" height="1.25rem" />
          )}
        </div>
      </div>

      <div className="state-panel">
        <strong>State inspector</strong>
        <div className="mono">user = {user ? JSON.stringify(user) : "null"}</div>
      </div>
    </div>
  );
}
`,
  },
}
