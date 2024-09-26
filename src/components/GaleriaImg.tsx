import Image from "next/image";

export default function GaleriaImg({ view, setView, imgLinks }) {
  return (
    <div
      style={
        view === 3
          ? {
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw",
              zIndex: 10,
              opacity: 1,
            }
          : {
              top: "calc(20vw*5/4 + 20vw)",
              left: 0,
              height: "calc(20vw * 56/71)",
              width: "20vw",
            }
      }
      className={`${
        view === 0 ? "opacity-100" : "opacity-0"
      } flex items-center transition-all duration-500 max-h-screen bg-black absolute`}
    >
      <div
        onClick={() => setView((view) => (view === 3 ? 0 : 3))}
        className={` aspect-[71/56] mx-auto relative ${
          view ? "" : ""
        } transition-all duration-500 md:h-full w-full md:w-max`}
      >
        <Image
          fill={true}
          objectFit="contain"
          src={imgLinks.medium}
          alt="galeria images"
          className=""
          loader={() => (view === 3 ? imgLinks.sharp : imgLinks.medium)}
        />
      </div>
    </div>
  );
}
