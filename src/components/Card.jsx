import TagText from "./TagText";
import { IoMdCode } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";

export default function Card() {
  const dataCard = [
    {
      icon: <IoMdCode color="white" />,
      title: "Sofware Engineer",
      bgIcon: "bg-violet-600",
      description:
        "Full-stack development with modern frameworks, clean architecture, and scalable solutions.",
      tag: ["React", "Express", "Postgres Sql", "Docker"],
    },
    {
      icon: <FaMicrochip color="white" />,
      title: "Iot System",
      bgIcon: "bg-blue-600",
      description:
        "Embedded programming, sensor integration, and smart device ecosystems for automation.",
      tag: ["Esp 32", "MQTT", "python", "Arduino"],
    },
    {
      icon: <FaNetworkWired color="white" />,
      title: "Network Engineer",
      bgIcon: "bg-rose-600",
      description:
        "Network design, security implementation, and infrastructure optimization",
      tag: ["Mikrotik", "Cisco", "Firewall", , "Vpn"],
    },
  ];
  return (
    <>
      {dataCard.map((item) => {
        return (
          <div
            className={`flex items-center justify-center border border-zinc-600 rounded-xl bg-white/20 gap-5 cursor-pointer `}
          >
            <main className="flex flex-col items-start p-10 gap-4">
              <span className={`p-4 ${item.bgIcon} rounded-md`}>
                {item.icon}
              </span>
              <h1 className="text-white text-xl font-semibold">{item.title}</h1>
              <p className=" text-start">{item.description}</p>
              <footer className="flex gap-1 flex-wrap">
                {item.tag.map((value) => {
                  return <TagText title={value} />;
                })}
              </footer>
            </main>
          </div>
        );
      })}
    </>
  );
}
