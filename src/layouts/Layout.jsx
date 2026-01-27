export default function Layout(props) {
  const { children } = props;
  return (
    <div className="w-full h-dvh bg-zinc-950 relative overflow-hidden ">
      <div className="z-10 flex gap-2 flex-col justify-center items-center px-10 h-full relative">
        {children}
      </div>
      <div class="absolute z-0 size-200 brightness-20 bg-violet-700 top-1/6 rounded-r-full blur-[200px]"></div>
      <div class="absolute z-0 size-200 brightness-20 bg-sky-700 top-0 right-0 rounded-full blur-[200px]"></div>
    </div>
  );
}
