export default function MockupCode() {
  return (
    <div className="mockup-code w-full flex flex-col items-start bg-white/10 backdrop-blur-sm">
      <pre data-prefix="$">
        <code>cd project</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>npm run dev...</code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>ready in 1305 ms</code>
      </pre>
    </div>
  );
}
