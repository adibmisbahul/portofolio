export default function Tag(props) {
  const {
    icon,
    title,
    bgIcon,
    paddingX = "xl:px-6",
    paddingY = "xl:py-3",
    paddingIcon = "p-2",
  } = props;
  return (
    <div
      className={`flex items-center justify-center px-3 py-1 border rounded-full backdrop-blur-xs bg-white/10  border-zinc-600 backdrop-brightness-80 gap-2 hover:backdrop-brightness-130 cursor-pointer text-center ${paddingX} ${paddingY} `}
    >
      <icon className={` ${bgIcon} md:${paddingIcon} rounded-full`}>
        {icon}
      </icon>
      <h2 className="text-white text-sm md:text-xl">{title}</h2>
    </div>
  );
}
