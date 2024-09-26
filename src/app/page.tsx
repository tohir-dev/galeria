"use client";
import GaleriaImg from "@/components/GaleriaImg";
import Image from "next/image";
import { useState } from "react";

export type SearchResult = { public_id: string };
export default function Home() {
  const [view, setView] = useState(0);

  // constresult = (await cloudinary.v2.search
  //   .expression()
  //   .max_results(50)
  //   .execute()) as { resources: SearchResult[] };

  const galleryData = [
    {
      index: 1,
      medium:
        "https://i.ibb.co/NSbfjRs/mendezmendezart-1837138020157337605.jpg",
      sharp: "https://i.ibb.co/xHdwjZD/mendezmendezart-1837138020157337605.jpg",
      ARheight: 5,
      ARwidth: 4,
    },
    {
      index: 2,
      medium:
        "https://i.ibb.co/JmRyybN/Luca-Ponsato-Art-1838233197378785500.jpg",
      sharp:
        "https://i.ibb.co/k5g99rp/Luca-Ponsato-Art-1838233197378785500.jpg",
      ARheight: 1,
      ARwidth: 1,
    },
    {
      index: 3,
      medium: "https://i.ibb.co/QQGPV4H/Ifihas-R5-1838208305547649039.jpg",
      sharp: "https://i.ibb.co/bmnsVkv/Ifihas-R5-1838208305547649039.jpg",
      ARheight: 56,
      ARwidth: 71,
    },
  ];

  function sumAspectRatios(index: number) {
    // Ensure index is within the array bounds
    // index = Math.min(index, galleryData.length - 1);

    // Calculate the sum of fractions
    console.log(index);

    if (index === 1) {
      return 0;
    }
    let sum = 0;
    for (let i = 1; i < index; i++) {
      sum += galleryData[i].ARheight / galleryData[i].ARwidth;
    }
    return sum;
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="relative">
        {galleryData.map((data) => (
          <div
            key={data.index}
            style={
              view === data.index
                ? {
                    top: 0,
                    left: 0,
                    height: "100vh",
                    width: "100vw",
                    zIndex: 10,
                    opacity: 1,
                  }
                : {
                    top: `calc(20vw*${sumAspectRatios(data.index)})`,
                    left: 0,
                    height: `calc(20vw * ${data.ARheight / data.ARwidth})`,
                    width: "20vw",
                  }
            }
            className={`${
              view === 0 ? "opacity-100" : "opacity-0"
            } flex items-center transition-all duration-500 max-h-screen bg-black absolute`}
          >
            <GaleriaImg view={view} setView={setView} imgData={data} />
          </div>
        ))}
      </div>

      <div
        style={
          view !== 0
            ? {
                bottom: 0,
              }
            : {
                bottom: "-4rem",
              }
        }
        className="transition-all duration-500 h-16 flex absolute z-20"
      >
        {galleryData.map((data) => (
          <div
            key={data.index}
            onClick={() => setView(data.index)}
            style={{ aspectRatio: data.ARwidth / data.ARheight }}
            className="h-full relative "
          >
            <Image
              fill={true}
              objectFit="contain"
              src={data.medium}
              alt="galeria images"
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
