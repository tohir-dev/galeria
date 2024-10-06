import Image from "next/image";

export default function GaleriaImg({
  view,
  setView,
  imgData,
}: {
  view: number;
  setView: React.Dispatch<React.SetStateAction<number>>;
  imgData: {
    index: number;
    medium: string;
    sharp: string;
    ARheight: number;
    ARwidth: number;
  };
}) {
  return (
    <div
      style={{ aspectRatio: imgData.ARwidth / imgData.ARheight }}
      onClick={() =>
        setView((view) => (view === imgData.index ? 0 : imgData.index))
      }
      className={` mx-auto relative ${
        view === imgData.index ? "w-screen h-screen md:w-max p-4" : ""
      } transition-all duration-200 h-full max-w-[100vw] max-h-[100vh]`}
    >
      <div
        className={` relative flex justify-center items-center w-full h-full ${
          view === imgData.index ? " border border-[8px] rounded-[33px]" : ""
        } `}
      >
      {view === imgData.index &&
        <div className="absolute w-16 h-4 rounded-full z-10 bg-black/100 top-4"></div>}
        <Image
          fill={true}
          objectFit="cover"
          src={imgData.medium}
          alt="galeria images"
          className={`  ${view === imgData.index ? " rounded-[25px] border" : ""} `}
          loader={() =>
            view === imgData.index ? imgData.sharp : imgData.medium
          }
        />
      </div>
    </div>
  );
}
