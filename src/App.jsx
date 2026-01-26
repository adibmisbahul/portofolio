import "./App.css";
import Tag from "./components/Tag";
import { IoMdCode } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center gap-4 bg-neutral-950">
      <div className="absolute w-96 aspect-square rounded-full bg-radial from-pink-400 from-10% to-fuchsia-700 blur-2xl brightness-100 z-10"></div>
      <div className="flex gap-2 ">
        <Tag icon={<IoMdCode />} title={"Software engineer"} />
        <Tag icon={<FaMicrochip />} title="Iot System" bgIcon={"bg-blue-400"} />
        <Tag
          icon={<FaNetworkWired />}
          title="Network Egineering"
          bgIcon={"bg-rose-600"}
        />
      </div>
      <div className="text-white">
        <h1 className="font-semibold text-8xl">Crafting Digital</h1>
        <h1 className="font-semibold text-7xl mt-2"> Experiences</h1>
      </div>
    </div>
  );
}

export default App;
