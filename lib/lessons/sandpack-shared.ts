export const sandpackSharedFiles: Record<string, string> = {
  "/styles.css": `* {
  box-sizing: border-box;
}

:root {
  --background: #0a0a0a;
  --foreground: #fafafa;
  --card: #171717;
  --card-foreground: #fafafa;
  --primary: #fafafa;
  --primary-foreground: #171717;
  --secondary: #262626;
  --secondary-foreground: #fafafa;
  --muted: #262626;
  --muted-foreground: #a3a3a3;
  --border: rgba(255, 255, 255, 0.1);
  --input: rgba(255, 255, 255, 0.15);
  --ring: #737373;
  --radius: 0.625rem;
}

body {
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--background);
  color: var(--foreground);
  -webkit-font-smoothing: antialiased;
}

.preview-root {
  min-height: 100%;
  padding: 1.5rem;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

.muted {
  color: var(--muted-foreground);
  font-size: 0.875rem;
}

.mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.8125rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  height: 2rem;
  padding: 0 0.75rem;
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid transparent;
  background: transparent;
  color: var(--foreground);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-default {
  background: var(--primary);
  color: var(--primary-foreground);
}

.btn-default:hover:not(:disabled) {
  opacity: 0.9;
}

.btn-outline {
  border-color: var(--border);
  background: var(--background);
}

.btn-outline:hover:not(:disabled) {
  background: var(--muted);
}

.btn-secondary {
  background: var(--secondary);
  color: var(--secondary-foreground);
}

.btn-secondary:hover:not(:disabled) {
  opacity: 0.9;
}

.btn-ghost:hover:not(:disabled) {
  background: var(--muted);
}

.input,
.textarea {
  width: 100%;
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid var(--input);
  background: color-mix(in srgb, var(--background) 30%, var(--muted));
  color: var(--foreground);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  outline: none;
}

.input:focus,
.textarea:focus {
  border-color: var(--ring);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 30%, transparent);
}

.textarea {
  min-height: 5rem;
  resize: vertical;
}

.label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.375rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.card {
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--card-foreground);
  overflow: hidden;
}

.card-header {
  padding: 1rem 1rem 0.5rem;
}

.card-title {
  font-size: 0.9375rem;
  font-weight: 600;
}

.card-description {
  margin-top: 0.25rem;
  color: var(--muted-foreground);
  font-size: 0.8125rem;
}

.card-content {
  padding: 0 1rem 1rem;
}

.card-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.price {
  color: var(--muted-foreground);
  font-size: 0.875rem;
  font-variant-numeric: tabular-nums;
}

.card-footer {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--border);
  background: color-mix(in srgb, var(--muted) 50%, transparent);
}

.badge {
  display: inline-flex;
  align-items: center;
  height: 1.25rem;
  padding: 0 0.5rem;
  border-radius: 9999px;
  background: var(--secondary);
  color: var(--secondary-foreground);
  font-size: 0.75rem;
  font-weight: 500;
}

.switch {
  position: relative;
  width: 2.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  border: 1px solid var(--border);
  background: var(--input);
  cursor: pointer;
  transition: background 150ms ease;
}

.switch[data-checked="true"] {
  background: var(--primary);
}

.switch-thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background: var(--foreground);
  transition: transform 150ms ease;
}

.switch[data-checked="true"] .switch-thumb {
  transform: translateX(1rem);
  background: var(--primary-foreground);
}

.state-panel {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: calc(var(--radius) - 2px);
  border: 1px dashed var(--border);
  background: color-mix(in srgb, var(--muted) 35%, transparent);
}

.state-panel strong {
  display: block;
  margin-bottom: 0.375rem;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted-foreground);
}
`,

  "/components/ui.tsx": `import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary" | "ghost";
};

export function Button({
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant} \${className}\`.trim()}
      {...props}
    />
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="input" {...props} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="textarea" {...props} />;
}

export function Label({
  className = "",
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={\`label \${className}\`.trim()} {...props} />;
}

export function Field({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={\`field \${className}\`.trim()} {...props} />;
}

export function Badge({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={\`badge \${className}\`.trim()} {...props} />;
}

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mergeClass("card", className)} {...props} />;
}

export function CardHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mergeClass("card-header", className)} {...props} />;
}

export function CardTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mergeClass("card-title", className)} {...props} />;
}

export function CardDescription({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mergeClass("card-description", className)} {...props} />;
}

export function CardContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mergeClass("card-content", className)} {...props} />;
}

export function CardFooter({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mergeClass("card-footer", className)} {...props} />;
}

function mergeClass(base: string, extra: string) {
  return extra ? \`\${base} \${extra}\`.trim() : base;
}

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
};

export function Switch({ checked, onCheckedChange, id }: SwitchProps) {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={checked}
      data-checked={checked ? "true" : "false"}
      className="switch"
      onClick={() => onCheckedChange(!checked)}
    >
      <span className="switch-thumb" />
    </button>
  );
}
`,

  "/index.tsx": `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`,
}
