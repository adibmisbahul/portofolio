import Tag from "../components/Tag";
import { IoMdCode } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import Card from "../components/Card";
import TagText from "../components/TagText";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import imagePetroleum from "../assets/image1.png";

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

  const media = [
    { icon: <FaGithub size={25} />, linkTo: "" },
    { icon: <FaLinkedin color="blue" size={25} />, linkTo: "" },
    { icon: <FaInstagram size={25} />, linkTo: "" },
  ];
  return (
    <div className="w-full h- overflow-x-hidden">
      <div className="bg-zinc-950 flex flex-col items-center justify-center h-[100vh] relative z-10 gap-3 w-full">
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
        <div className="flex gap-2 mt-5">
          {media.map((item) => {
            return <span>{item.icon}</span>;
          })}
        </div>
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
      <div className="p-4 bg-zinc-950 flex flex-col gap-2 relative z-10 overflow-hidden">
        <h1 className="font-semibold text-6xl m-1 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ">
          Project
        </h1>
        <div className="mockup-browser border  w-full  backdrop-blur-xs bg-white/10  border-zinc-600">
          <div className="mockup-browser-toolbar">
            <div className="input bg-transparent">
              Petroleum monitoring system
            </div>
          </div>
          <div className="grid place-content-start h-80 p-2">
            <img src={imagePetroleum} alt="" className="rounded-md" />
            <div className="flex flex-wrap gap-2 mt-2">
              <TagText title="React" />
              <TagText title="Express.js" />
              <TagText title="Postgres Sql" />
            </div>
          </div>
        </div>
        <div class="absolute -z-10 size-100 brightness-40 bg-sky-700 bottom-0 right-0 rounded-l-full blur-[100px]"></div>
      </div>
    </div>
  );
}
