export default function LayoutOne(props) {
  const { children } = props;
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center gap-4  bg-zinc-950 ">
      <div className="absolute size-60 pl-[2vw] rounded-full bg-purple-600 blur-[180px] left-1/12 top-1/2"></div>
      <div className="absolute size-60 pl-[2vw] rounded-full bg-blue-700 blur-[180px] right-1/5"></div>
      {children}
    </div>
  );
}
