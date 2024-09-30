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
        view ? "" : ""
      } transition-all duration-200 md:h-full w-full md:w-max`}
    >
      <Image
        fill={true}
        objectFit="contain"
        src={imgData.medium}
        alt="galeria images"
        className="p-[2px]"
        loader={() => (view === imgData.index ? imgData.sharp : imgData.medium)}
      />
    </div>
  );
}
