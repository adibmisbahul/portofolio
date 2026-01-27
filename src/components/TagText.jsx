import React from "react";

export default function TagText(props) {
  const { title, paddingX, paddingY, textColor } = props;
  return (
    <div
      className={`flex items-center justify-center ${paddingX} ${paddingY} border rounded-full backdrop-blur-xs bg-white/10  border-zinc-600  backdrop-brightness-80 gap-2 hover:backdrop-brightness-130 cursor-pointer text-center px-4 py-1 `}
    >
      <p className={` ${textColor}`}>{title}</p>
    </div>
  );
}
