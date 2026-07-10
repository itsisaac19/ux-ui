import type { Lesson } from "@/lib/lessons/types"

export const controlledInputLesson: Lesson = {
  slug: "controlled-input",
  title: "Controlled inputs",
  description:
    "Keep form fields in sync with React state so the UI is always the source of truth.",
  concept: "controlled components",
  objectives: [
    "Bind value and onChange on an input",
    "Store strings in state",
    "Render live feedback from the same state object",
  ],
  hints: [
    "Add a placeholder to the name field.",
    "Try clearing the message — state updates on every keystroke.",
    "Add validation: disable Submit when name is empty.",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  Input,
  Label,
  Textarea,
} from "./components/ui";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="preview-root">
      <Card>
        <CardHeader>
          <CardTitle>Contact us</CardTitle>
          <CardDescription>
            Controlled inputs read from state and write back on every change.
          </CardDescription>
        </CardHeader>

        <CardContent className="stack">
          <Field>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Alex"
            />
          </Field>

          <Field>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell us what you are building..."
            />
          </Field>
        </CardContent>

        <CardFooter>
          <Button disabled={!name.trim()}>Submit</Button>
          <Button variant="ghost" onClick={() => {
            setName("");
            setMessage("");
          }}>
            Reset
          </Button>
        </CardFooter>
      </Card>

      <div className="state-panel">
        <strong>State inspector</strong>
        <div className="mono">name = {JSON.stringify(name)}</div>
        <div className="mono">message = {JSON.stringify(message)}</div>
      </div>
    </div>
  );
}
`,
  },
}
