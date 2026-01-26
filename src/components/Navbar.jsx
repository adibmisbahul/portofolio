export default function Navbar() {
  return (
    <div className="navbar shadow-sm rounded-md bg-white/10 backdrop-blur-xs border border-zinc-600">
      <button className="btn">Adib</button>
      <div className="flex gap-2 ">
        <a class="link">about</a>
        <a class="link">skills</a>
        <a class="link">project</a>
      </div>
    </div>
  );
}
