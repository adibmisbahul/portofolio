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
      <div className="bg-zinc-950 flex-col items-center justify-center">
        <div className="flex gap-1 p-3 justify-center">
          {firstTag.map((item) => {
            return (
              <Tag title={item.title} icon={item.icon} bgIcon={item.bgIcon} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
