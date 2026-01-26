export default function Tag(props) {
  const { icon, title, bgIcon = "bg-purple-800" } = props;
  return (
    <div className="flex items-center justify-center px-6 py-3 border rounded-full backdrop-blur-xs bg-white/10  border-zinc-600 backdrop-brightness-80 gap-2">
      
      <icon className={`${bgIcon} p-2 rounded-full`}>{icon}</icon>
      <h2>{title}</h2>
    </div>
  );
}
