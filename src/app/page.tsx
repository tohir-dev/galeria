"use client";
import Image from "next/image";
import { useState } from "react";

export type SearchResult = { public_id: string };
export default function Home() {
  const [view, setView] = useState(0);
  console.log(view);

  // constresult = (await cloudinary.v2.search
  //   .expression()
  //   .max_results(50)
  //   .execute()) as { resources: SearchResult[] };
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="relative">
        <div
          style={
            view === 1
              ? {
                  top: 0,
                  left: 0,
                  height: "100vh",
                  width: "100vw",
                  zIndex: 10,
                  opacity: 1,
                }
              : {
                  top: 0,
                  left: 0,
                  height: "calc(20vw*5/4)",
                  width: "20vw",
                }
          }
          className={`${
            view === 0 ? "opacity-100" : "opacity-0"
          } flex items-center transition-all duration-500 max-h-screen bg-black absolute`}
        >
          <div
            onClick={() => setView((view) => (view === 1 ? 0 : 1))}
            className={` aspect-[4/5] mx-auto ${
              view ? "h-full" : "w-full"
            } transition-all duration-500`}
          >
            <Image
              fill={true}
              objectFit="contain"
              src="https://i.ibb.co/NSbfjRs/mendezmendezart-1837138020157337605.jpg"
              alt="galeria images"
              className=""
            />
          </div>
        </div>
        <div
          style={
            view === 2
              ? {
                  top: 0,
                  left: 0,
                  height: "100vh",
                  width: "100vw",
                  zIndex: 10,
                  opacity: 1,
                }
              : {
                  top: "calc(20vw*5/4)",
                  left: 0,
                  height: "20vw",
                  width: "20vw",
                }
          }
          className={`${
            view === 0 ? "opacity-100" : "opacity-0"
          } flex items-center transition-all duration-500 max-h-screen bg-black absolute`}
        >
          <div
            onClick={() => setView((view) => (view === 2 ? 0 : 2))}
            className={` aspect-[5/5] mx-auto ${
              view ? "h-full" : "w-full"
            } transition-all duration-500`}
          >
            <Image
              fill={true}
              objectFit="contain"
              src="https://i.ibb.co/JmRyybN/Luca-Ponsato-Art-1838233197378785500.jpg"
              alt="galeria images"
              className=""
            />
          </div>
        </div>
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
        <div
          onClick={() => setView(1)}
          className="h-full relative aspect-[4/5]"
        >
          <Image
            fill={true}
            objectFit="contain"
            src="https://i.ibb.co/NSbfjRs/mendezmendezart-1837138020157337605.jpg"
            alt="galeria images"
            className=""
          />
        </div>
        <div
          onClick={() => setView(2)}
          className="h-full relative aspect-[5/5]"
        >
          <Image
            fill={true}
            objectFit="contain"
            src="https://i.ibb.co/JmRyybN/Luca-Ponsato-Art-1838233197378785500.jpg"
            alt="galeria images"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
