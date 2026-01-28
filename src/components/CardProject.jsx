import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import TagText from "./TagText";

const ActionCircle = () => {
  return (
    <div className="flex gap-2">
      <div className="size-3 rounded-full bg-yellow-600"></div>
      <div className="size-3 rounded-full bg-green-600"></div>
      <div className="size-3 rounded-full bg-red-600"></div>
    </div>
  );
};

export default function CardProject() {
  const dataCard = [
    {
      cardTitle: "Petroleum Monitoring Sistem",
      image: Image1,
      tag: ["React", "Docker", "Express.js", "PostgreSql"],
    },
  ];

  return (
    <>
      {dataCard.map((item, index) => {
        return (
          <div className="flex flex-col gap-4 backdrop-blur-xs bg-white/10  border border-zinc-600 rounded-2xl px-6 py-5 ">
            <header className="header flex justify-between items-center">
              <ActionCircle />
              <p className="font-semibold">{item.cardTitle}</p>
            </header>
            <main className="">
              <img src={item.image} alt="" />
            </main>
            <footer className="flex gap-2 flex-wrap">
              {item.tag.map((value) => {
                return <TagText title={value} />;
              })}
            </footer>
          </div>
        );
      })}
    </>
  );
}
