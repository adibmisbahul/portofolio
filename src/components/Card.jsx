export default function Card(props) {
  const { icon, title, description, children, bgIcon } = props;
  return (
    <div
      className={`flex items-center justify-center border border-zinc-600 rounded-xl bg-white/20 gap-5 hover:${bgIcon} cursor-pointer`}
    >
      <main className="flex flex-col items-start p-10 gap-4">
        <span className={`p-4 ${bgIcon} rounded-md`}>{icon}</span>
        <h1 className="text-white text-xl font-semibold">{title}</h1>
        <p className=" text-start">{description}</p>
        <footer className="flex gap-1 flex-wrap">{children}</footer>
      </main>
    </div>
  );
}
