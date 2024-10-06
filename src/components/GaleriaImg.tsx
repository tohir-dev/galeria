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
      } transition-all duration-200 h-full max-w-screen`}
    >
      <Image
        fill={true}
        objectFit="cover"
        src={imgData.medium}
        alt="galeria images"
        className="p-[2px] "
        loader={() => (view === imgData.index ? imgData.sharp : imgData.medium)}
      />
    </div>
  );
}
