"use client";
import GaleriaImg from "@/components/GaleriaImg";
import Image from "next/image";
import { useState } from "react";

export type imgData = {
  index: number;
  medium: string;
  sharp: string;
  ARheight: number;
  ARwidth: number;
};

export type SearchResult = { public_id: string };
export default function Home() {
  const [view, setView] = useState(0);

  // constresult = (await cloudinary.v2.search
  //   .expression()
  //   .max_results(50)
  //   .execute()) as { resources: SearchResult[] };

  const galleryData1 = [
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
      medium: "https://i.ibb.co/hydXxZF/incalstory-1774385396723466746.jpg",
      sharp: "https://i.ibb.co/7XpgxRt/incalstory-1774385396723466746.jpg",
      ARheight: 5,
      ARwidth: 4,
    },
    {
      index: 3,
      medium:
        "https://i.ibb.co/JmRyybN/Luca-Ponsato-Art-1838233197378785500.jpg",
      sharp:
        "https://i.ibb.co/k5g99rp/Luca-Ponsato-Art-1838233197378785500.jpg",
      ARheight: 1,
      ARwidth: 1,
    },
  ];

  const galleryData2 = [
    {
      index: 4,
      medium: "https://i.ibb.co/WD91jYc/horrorsthetics-1836606838793531531.jpg",
      sharp: "https://i.ibb.co/k3nFvWh/horrorsthetics-1836606838793531531.jpg",
      ARheight: 76,
      ARwidth: 67,
    },
    {
      index: 5,
      medium: "https://i.ibb.co/d676QYT/imit0r-1833967003041734726.jpg",
      sharp: "https://i.ibb.co/7VbVGmf/imit0r-1833967003041734726.jpg",
      ARheight: 181,
      ARwidth: 128,
    },
    {
      index: 6,
      medium: "https://i.ibb.co/QQGPV4H/Ifihas-R5-1838208305547649039.jpg",
      sharp: "https://i.ibb.co/bmnsVkv/Ifihas-R5-1838208305547649039.jpg",
      ARheight: 56,
      ARwidth: 71,
    },
  ];

  const galleryData3 = [
    {
      index: 7,
      medium:
        "https://i.ibb.co/JmRyybN/Luca-Ponsato-Art-1838233197378785500.jpg",
      sharp:
        "https://i.ibb.co/k5g99rp/Luca-Ponsato-Art-1838233197378785500.jpg",
      ARheight: 1,
      ARwidth: 1,
    },
    {
      index: 8,
      medium: "https://i.ibb.co/hydXxZF/incalstory-1774385396723466746.jpg",
      sharp: "https://i.ibb.co/7XpgxRt/incalstory-1774385396723466746.jpg",
      ARheight: 5,
      ARwidth: 4,
    },
    {
      index: 9,
      medium:
        "https://i.ibb.co/NSbfjRs/mendezmendezart-1837138020157337605.jpg",
      sharp: "https://i.ibb.co/xHdwjZD/mendezmendezart-1837138020157337605.jpg",
      ARheight: 5,
      ARwidth: 4,
    },
  ];

  function sumAspectRatios(index: number, array: imgData[]) {
    // Ensure index is within the array bounds
    // index = Math.min(index, galleryData1.length - 1);

    // Calculate the sum of fractions
    console.log(index);
    if (index > array.length * 2) {
      index = index - array.length * 2;
    } else if (index > array.length) {
      index = index - array.length;
    }

    if (index === 1) {
      return 0;
    }
    let sum = 0;
    for (let i = 1; i < index; i++) {
      sum += array[i - 1].ARheight / array[i - 1].ARwidth;
      console.log(i, array[i - 1].ARheight, array[i - 1].ARwidth);
    }

    console.log(sum);

    return sum;
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="relative  w-screen h-screen">
        <div className="relative w-[25vw]">
          {galleryData1.map((data) => (
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
                      top: `calc(25vw*${sumAspectRatios(
                        data.index,
                        galleryData1
                      )})`,
                      left: 0,
                      height: `calc(25vw * ${data.ARheight / data.ARwidth})`,
                      width: "25vw",
                    }
              }
              className={`${
                view === 0 ? "opacity-100" : "opacity-0"
              } flex items-center transition-all duration-200 max-h-screen bg-black absolute`}
            >
              <GaleriaImg view={view} setView={setView} imgData={data} />
            </div>
          ))}
        </div>
        <div
          style={{ left: view > 3 ? "0" : "25vw" }}
          className="absolute w-[25vw] transition-all duration-200"
        >
          {galleryData2.map((data) => (
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
                      top: `calc(25vw * ${sumAspectRatios(
                        data.index,
                        galleryData2
                      )})`,
                      left: 0,
                      height: `calc(25vw * ${data.ARheight / data.ARwidth})`,
                      width: "25vw",
                    }
              }
              className={`${
                view === 0 ? "opacity-100" : "opacity-0"
              } flex items-center transition-all duration-200 max-h-screen bg-black absolute`}
            >
              <GaleriaImg view={view} setView={setView} imgData={data} />
            </div>
          ))}
        </div>
        <div
          style={{ right: view > 6 ? "0" : "25vw" }}
          className="absolute w-[25vw] transition-all duration-200"
        >
          {galleryData3.map((data) => (
            <div
              key={data.index}
              style={
                view === data.index
                  ? {
                      top: 0,
                      right: 0,
                      height: "100vh",
                      width: "100vw",
                      zIndex: 10,
                      opacity: 1,
                    }
                  : {
                      top: `calc(25vw * ${sumAspectRatios(
                        data.index,
                        galleryData3
                      )})`,
                      right: 0,
                      height: `calc(25vw * ${data.ARheight / data.ARwidth})`,
                      width: "25vw",
                    }
              }
              className={`${
                view === 0 ? "opacity-100" : "opacity-0"
              } flex items-center transition-all duration-200 max-h-screen bg-black absolute`}
            >
              <GaleriaImg view={view} setView={setView} imgData={data} />
            </div>
          ))}
        </div>
      </div>
      <div
        style={
          view !== 0
            ? {
                bottom: 0,
              }
            : {
                bottom: "-5rem",
              }
        }
        className="transition-all duration-200 h-20 flex w-screen overflow-x-scroll absolute z-20"
      >
        {galleryData1.map((data) => (
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
        {galleryData2.map((data) => (
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
