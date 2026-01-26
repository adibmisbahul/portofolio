import React from "react";

export default function Button() {
  return (
    <button
      class="relative px-6 py-3 rounded-full
  bg-white/15 backdrop-blur-lg
  border border-white/20
  text-white font-medium
  shadow-lg
  hover:bg-white/25 transition"
    >
      <span class="relative z-10">Get Started</span>

      <div
        class="absolute inset-0 rounded-full 
    bg-gradient-to-tr from-white/40 to-transparent 
    opacity-40"
      ></div>
    </button>
  );
}
