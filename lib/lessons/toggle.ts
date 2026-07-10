import type { Lesson } from "@/lib/lessons/types"

export const toggleLesson: Lesson = {
  slug: "toggle",
  title: "Boolean state with Switch",
  description:
    "Model on/off UI with a boolean in state and wire it to a Switch.",
  concept: "boolean state",
  objectives: [
    "Store a boolean with useState(false)",
    "Pass checked and onCheckedChange to a controlled Switch",
    "Derive UI from state instead of duplicating it",
  ],
  hints: [
    "Flip the initial value to true and see the preview update.",
    "Add a second Switch that controls the same state.",
    "Try rendering different text when notifications is true vs false.",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `import { useState } from "react";
import { Badge, Field, Label, Switch } from "./components/ui";

export default function App() {
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="preview-root stack">
      <div>
        <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
          Notification settings
        </h2>
        <p className="muted">Boolean state is perfect for toggles and feature flags.</p>
      </div>

      <div className="row" style={{ justifyContent: "space-between" }}>
        <Field style={{ flex: 1 }}>
          <Label htmlFor="notifications">Email notifications</Label>
          <span className="muted">
            {notifications ? "You will receive updates." : "Notifications are off."}
          </span>
        </Field>
        <Switch
          id="notifications"
          checked={notifications}
          onCheckedChange={setNotifications}
        />
      </div>

      <Badge>{notifications ? "Enabled" : "Disabled"}</Badge>

      <div className="state-panel">
        <strong>State inspector</strong>
        <div className="mono">notifications = {String(notifications)}</div>
      </div>
    </div>
  );
}
`,
  },
}
