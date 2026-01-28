import Tag from "../components/Tag";
import { IoMdCode } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import Card from "../components/Card";
import TagText from "../components/TagText";

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
    <div className="w-full h-full">
      <div className="bg-zinc-950 flex flex-col items-center justify-center h-[100vh] relative z-10 gap-3">
        <div class="absolute -z-10 size-130 brightness-20 bg-violet-700 top-0 rounded-r-full blur-[100px]"></div>
        <div class="absolute -z-10 size-130 brightness-20 bg-sky-700 bottom-0 right-0 rounded-l-full blur-[100px]"></div>
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
        <p className="w-2/3 text-sm  font-semibold text-zinc-400 md:text-xl">
          A multi-disciplinary engineer crafting robust software, intelligent
          IoT systems, and reliable network infrastructure with a passion for
          innovation.
        </p>
      </div>
      <div className=" p-4 flex flex-col items-center justify-center gap-2 bg-zinc-950 relative overflow-hidden">
        <Card
          icon={<IoMdCode />}
          title="Software Engineer"
          description="Full-stack development with modern frameworks, clean architecture, and scalable solutions."
          bgIcon="bg-purple-600"
        >
          <TagText title="React" />
          <TagText title="Express" />
          <TagText title="Postgres Sql" />
          <TagText title="Docker" />
        </Card>
        <Card
          icon={<FaMicrochip />}
          title="Iot System"
          description="Full-stack development with modern frameworks, clean architecture, and scalable solutions."
          bgIcon="bg-blue-600"
        >
          <TagText title="React" />
          <TagText title="Express" />
          <TagText title="Postgres Sql" />
          <TagText title="Docker" />
        </Card>
        <Card
          icon={<FaNetworkWired />}
          title="Network engineer"
          description="Full-stack development with modern frameworks, clean architecture, and scalable solutions."
          bgIcon="bg-rose-600"
        >
          <TagText title="React" />
          <TagText title="Express" />
          <TagText title="Postgres Sql" />
          <TagText title="Docker" />
        </Card>
      </div>
      <div className="p-4 bg-zinc-950 flex flex-col gap-2">
        <h1 className="font-semibold text-6xl m-1 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ">
          Project
        </h1>
        <div class="mockup-window bg-base-100 border border-base-300">
          <div class="grid place-content-center h-80">Hello!</div>
        </div>
      </div>
    </div>
  );
}
