import { Children } from "react";

export default function Layout(props) {
  const { children } = props;
  return (
    <div class="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black relative m-0 p-[1rem] flex flex-col justify-center items-center gap-2">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.35),transparent_60%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),transparent_60%)]"></div>
      {children}
    </div>
  );
}
