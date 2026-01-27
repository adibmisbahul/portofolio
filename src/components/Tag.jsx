export default function Tag(props) {
  const {
    icon,
    title,
    bgIcon,
    paddingX = "px-6",
    paddingY = "py-3",
    paddingIcon = " p-2",
  } = props;
  return (
    <div
      className={`flex items-center justify-center ${paddingX} ${paddingY} border rounded-full backdrop-blur-xs bg-white/10  border-zinc-600 backdrop-brightness-80 gap-2 hover:backdrop-brightness-130 cursor-pointer text-center`}
    >
      <icon className={`${bgIcon} ${paddingIcon} rounded-full`}>{icon}</icon>
      <h2 className="text-white sm:text-sm">{title}</h2>
    </div>
  );
}
