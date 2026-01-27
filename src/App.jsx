import "./App.css";
import Tag from "./components/Tag";
import { IoMdCode } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import LayoutOne from "./layouts/layoutOne";
import { WiStars } from "react-icons/wi";
import Navbar from "./components/Navbar";
import TagText from "./components/TagText";
import Layout from "./layouts/Layout";
import Card from "./components/Card";

function App() {
  const TagTextItem = [
    { id: 1, title: "React" },
    { id: 2, title: "Javascript" },
    { id: 3, title: "Sql" },
    { id: 4, title: "Esp 32" },
    { id: 5, title: "Mikrotik" },
  ];

  const tagSeries = [{ tag: "se", title: "react" }];
  return (
    <>
      <LayoutOne>
        {/* <Navbar /> */}
        <Tag
          title="Available for new projects"
          icon={<WiStars size={25} color="rgb(168, 0, 183)" />}
          paddingIcon={"p-0"}
          paddingX={"p-2"}
          paddingY={"p-0"}
        />
        <div className="flex gap-2 ">
          <Tag
            icon={<IoMdCode />}
            title={"Software engineer"}
            bgIcon={"bg-purple-800"}
          />
          <Tag
            icon={<FaMicrochip />}
            title="Iot System"
            bgIcon={"bg-blue-400"}
          />
          <Tag
            icon={<FaNetworkWired />}
            title="Network Egineering"
            bgIcon={"bg-rose-600"}
          />
        </div>
        <div className="text-white flex flex-col gap-1 items-center">
          <h1 className="font-semibold text-8xl">Crafting Digital</h1>
          <h1 className="font-semibold text-8xl m-1 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ">
            Experiences
          </h1>
          <p className="w-2/3 mt-10 font-semibold text-zinc-400">
            A multi-disciplinary engineer crafting robust software, intelligent
            IoT systems, and reliable network infrastructure with a passion for
            innovation.
          </p>
        </div>
      </LayoutOne>
      <Layout>
        <div className="">
          <h1 className="font-semibold text-6xl">Multi-Domain</h1>
          <h1 className="font-semibold text-6xl m-1 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ">
            exprestis
          </h1>
        </div>
        <div className="flex gap-2 sm:flex flex-col ">
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
      </Layout>
    </>
  );
}

export default App;
