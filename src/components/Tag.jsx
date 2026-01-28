export default function Tag(props) {
  const {
    icon,
    title,
    bgIcon,
    paddingX = "md:px-6",
    paddingY = "md:py-3",
    paddingIcon = "p-1",
  } = props;

  return (
    <div
      className={`flex items-center justify-center px-2 py-3 border rounded-full backdrop-blur-xs bg-white/10  border-zinc-600 backdrop-brightness-80 gap-1 hover:backdrop-brightness-130 cursor-pointer text-center ${paddingX} ${paddingY} `}
    >
      <icon className={`none ${bgIcon} rounded-full ${paddingIcon} `}>
        {icon}
      </icon>
      <h2 className="text-white text-[10px] md:text-xl">{title}</h2>
    </div>
  );
}
