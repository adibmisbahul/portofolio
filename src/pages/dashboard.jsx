import Tag from "../components/Tag";
import { IoMdCode } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";

export default function Dashboard() {
  const firstTag = [
    { title: "Software Engineer", icon: <IoMdCode />, bgIcon: "bg-purple-600" },
    { title: "Iot System", icon: <FaMicrochip />, bgIcon: "bg-blue-600" },
    {
      title: "Network Engineer",
      icon: <FaNetworkWired />,
      bgIcon: "bg-rose-600",
    },
  ];
  return (
    <div>
      <div className="bg-zinc-950 flex flex-col items-center justify-center h-dvh relative z-10">
        <div class="absolute -z-10 size-100 brightness-20 bg-violet-700 top-0 rounded-r-full blur-[100px]"></div>
        <div class="absolute -z-10 size-100 brightness-20 bg-sky-700 bottom-0 right-0 rounded-l-full blur-[100px]"></div>
        <div className="flex gap-1 p-3 justify-center">
          {firstTag.map((item) => {
            return (
              <Tag title={item.title} icon={item.icon} bgIcon={item.bgIcon} />
            );
          })}
        </div>
        <h1 className="text-5xl font-semibold md:text-8xl md:font-semibold">
          Crafting Digital
        </h1>
        <h1 className="font-semibold text-5xl m-1 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text xl:text-8xl">
          Experiences
        </h1>
        <p className="w-2/3 text-sm mt-10 font-semibold text-zinc-400 md:text-xl">
          A multi-disciplinary engineer crafting robust software, intelligent
          IoT systems, and reliable network infrastructure with a passion for
          innovation.
        </p>
      </div>
    </div>
  );
}
