"use client";
import GaleriaImg from "@/components/GaleriaImg";
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
    }, {
      index: 4,
      medium:
        "https://i.ibb.co/GnSYhQq/Mrdodobird-1832589332156445113.jpg",
      sharp:
        "https://i.ibb.co/MZ0wXkm/Mrdodobird-1832589332156445113.jpg",
      ARheight: 5,
      ARwidth: 4,
    },{
      index: 5,
      medium:
        "https://i.ibb.co/WpGrHbV/Luca-Ponsato-Art-1782787802586849362.jpg",
      sharp:
        "https://i.ibb.co/4gKbF61/Luca-Ponsato-Art-1782787802586849362.jpg",
      ARheight: 1,
      ARwidth: 1,
    },{
      index: 6,
      medium:
        "https://i.ibb.co/wpJG5qK/freddiejacobart-1709497297229242612.jpg",
      sharp:
        "https://i.ibb.co/ss5x84F/freddiejacobart-1709497297229242612.jpg",
      ARheight: 5,
      ARwidth: 4,
    },{
      index: 7,
      medium:
        "https://i.ibb.co/KL360QS/nawafers-1838690225985343744.jpg",
      sharp:
        "https://i.ibb.co/pR920s5/nawafers-1838690225985343744.jpg",
      ARheight: 5,
      ARwidth: 4,
    },{
      index: 8,
      medium:
        "https://i.ibb.co/WpGrHbV/Luca-Ponsato-Art-1782787802586849362.jpg",
      sharp:
        "https://i.ibb.co/4gKbF61/Luca-Ponsato-Art-1782787802586849362.jpg",
      ARheight: 1,
      ARwidth: 1,
    },{
      index: 9,
      medium:
        "https://i.ibb.co/wpJG5qK/freddiejacobart-1709497297229242612.jpg",
      sharp:
        "https://i.ibb.co/ss5x84F/freddiejacobart-1709497297229242612.jpg",
      ARheight: 5,
      ARwidth: 4,
    },{
      index: 10,
      medium:
        "https://i.ibb.co/KL360QS/nawafers-1838690225985343744.jpg",
      sharp:
        "https://i.ibb.co/pR920s5/nawafers-1838690225985343744.jpg",
      ARheight: 5,
      ARwidth: 4,
    },
  ];
; const galleryData2 = [
    {
      index: 11,
      medium: "https://i.ibb.co/WD91jYc/horrorsthetics-1836606838793531531.jpg",
      sharp: "https://i.ibb.co/k3nFvWh/horrorsthetics-1836606838793531531.jpg",
      ARheight: 76,
      ARwidth: 67,
    },
    {
      index: 12,
      medium: "https://i.ibb.co/d676QYT/imit0r-1833967003041734726.jpg",
      sharp: "https://i.ibb.co/7VbVGmf/imit0r-1833967003041734726.jpg",
      ARheight: 181,
      ARwidth: 128,
    },
    {
      index: 13,
      medium: "https://i.ibb.co/QQGPV4H/Ifihas-R5-1838208305547649039.jpg",
      sharp: "https://i.ibb.co/bmnsVkv/Ifihas-R5-1838208305547649039.jpg",
      ARheight: 56,
      ARwidth: 71,
    }, {
      index: 14,
      medium: "https://i.ibb.co/L0Pwb9f/anime-twits-1838032002009674128.jpg",
      sharp: "https://i.ibb.co/nw02ZQS/anime-twits-1838032002009674128.jpg",
      ARheight: 819,
      ARwidth: 640,
    },
    {
      index: 15,
      medium: "https://i.ibb.co/QbSHY4T/theelvnth-1837933672298598751.jpg",
      sharp: "https://i.ibb.co/kHbDqtw/theelvnth-1837933672298598751.jpg",
      ARheight: 1,
      ARwidth: 1,
    },
    {
      index: 16,
      medium:
        "https://i.ibb.co/cLTdLCq/blankspac-e-1838030863583613182.jpg",     sharp:
        "https://i.ibb.co/L5pf5JK/blankspac-e-1838030863583613182.jpg",
      ARheight: 1,
      ARwidth: 1,
    },{
      index: 17,
      medium:
      "https://i.ibb.co/8rxyY31/afrogodd-1709670022073696445.jpg",
    sharp: "https://i.ibb.co/k4DLmnN/afrogodd-1709670022073696445.jpg",
    ARheight: 121,
    ARwidth: 64
    }, {
      index: 18,
      medium: "https://i.ibb.co/QbSHY4T/theelvnth-1837933672298598751.jpg",
      sharp: "https://i.ibb.co/kHbDqtw/theelvnth-1837933672298598751.jpg",
      ARheight: 1,
      ARwidth: 1,
    },
    {
      index: 19,
      medium:
        "https://i.ibb.co/cLTdLCq/blankspac-e-1838030863583613182.jpg",     sharp:
        "https://i.ibb.co/L5pf5JK/blankspac-e-1838030863583613182.jpg",
      ARheight: 1,
      ARwidth: 1,
    },{
      index: 20,
      medium:
      "https://i.ibb.co/8rxyY31/afrogodd-1709670022073696445.jpg",
    sharp: "https://i.ibb.co/k4DLmnN/afrogodd-1709670022073696445.jpg",
    ARheight: 121,
    ARwidth: 64
    },
  ];

  const galleryData3 = [{
    index: 21,
    medium: "https://i.ibb.co/QQGPV4H/Ifihas-R5-1838208305547649039.jpg",
    sharp: "https://i.ibb.co/bmnsVkv/Ifihas-R5-1838208305547649039.jpg",
    ARheight: 56,
    ARwidth: 71,
  }, {
    index: 22,
    medium: "https://i.ibb.co/L0Pwb9f/anime-twits-1838032002009674128.jpg",
    sharp: "https://i.ibb.co/nw02ZQS/anime-twits-1838032002009674128.jpg",
    ARheight: 819,
    ARwidth: 640,
  },
  {
    index: 23,
    medium: "https://i.ibb.co/QbSHY4T/theelvnth-1837933672298598751.jpg",
    sharp: "https://i.ibb.co/kHbDqtw/theelvnth-1837933672298598751.jpg",
    ARheight: 1,
    ARwidth: 1,
  },
    {
      index: 24,
      medium: "https://i.ibb.co/WD91jYc/horrorsthetics-1836606838793531531.jpg",
      sharp: "https://i.ibb.co/k3nFvWh/horrorsthetics-1836606838793531531.jpg",
      ARheight: 76,
      ARwidth: 67,
    },
    {
      index: 25,
      medium: "https://i.ibb.co/d676QYT/imit0r-1833967003041734726.jpg",
      sharp: "https://i.ibb.co/7VbVGmf/imit0r-1833967003041734726.jpg",
      ARheight: 181,
      ARwidth: 128,
    },
    
   {
      index: 26,
      medium: "https://i.ibb.co/CVSJbp3/esraeslen-1837792324551667889-crxlzp.jpg",
      sharp: "https://i.ibb.co/frT8kVz/esraeslen-1837792324551667889-crxlzp.jpg",
      ARheight: 4,
      ARwidth: 3,
    },
    {
      index: 27,
      medium:
        "https://i.ibb.co/86KjyFw/blankspac-e-1838067261921546576.jpg",
      sharp: "https://i.ibb.co/LnkCT4y/blankspac-e-1838067261921546576.jpg",
      ARheight: 1,
      ARwidth: 1
    },{
      index: 28,
      medium:
        "https://i.ibb.co/71Z5xC9/its-linesart-1840451694737383677.jpg",     sharp:
        "https://i.ibb.co/BCQxH31/its-linesart-1840451694737383677.jpg",
      ARheight: 381,
      ARwidth:320,
    },  {
      index: 29,
      medium:
        "https://i.ibb.co/cLTdLCq/blankspac-e-1838030863583613182.jpg",     sharp:
        "https://i.ibb.co/L5pf5JK/blankspac-e-1838030863583613182.jpg",
      ARheight: 1,
      ARwidth: 1,
    },{
      index: 30,
      medium:
      "https://i.ibb.co/8rxyY31/afrogodd-1709670022073696445.jpg",
    sharp: "https://i.ibb.co/k4DLmnN/afrogodd-1709670022073696445.jpg",
    ARheight: 121,
    ARwidth: 64
    }
  ]

  const galleryData4 = [
    {
      index: 31,
      medium: "https://i.ibb.co/L1qbz61/umiamara-1837587785777139828.jpg",
      sharp: "https://i.ibb.co/4pD9ZMp/umiamara-1837587785777139828.jpg",
      ARheight: 83,
      ARwidth: 64,
    },
    {
      index: 32,
      medium:
        "https://i.ibb.co/CVSJbp3/esraeslen-1837792324551667889-crxlzp.jpg",
      sharp:
        "https://i.ibb.co/frT8kVz/esraeslen-1837792324551667889-crxlzp.jpg",
      ARheight: 4,
      ARwidth: 3,
    },
    {
      index: 33,
      medium: "https://i.ibb.co/86KjyFw/blankspac-e-1838067261921546576.jpg",
      sharp: "https://i.ibb.co/LnkCT4y/blankspac-e-1838067261921546576.jpg",
      ARheight: 1,
      ARwidth: 1,
    },
    {
      index: 34,
      medium: "https://i.ibb.co/71Z5xC9/its-linesart-1840451694737383677.jpg",
      sharp: "https://i.ibb.co/BCQxH31/its-linesart-1840451694737383677.jpg",
      ARheight: 381,
      ARwidth: 320,
    },
    {
      index: 35,
      medium: "https://i.ibb.co/3c7Ddt8/paulheaston-1835804204881109182.jpg",
      sharp: "https://i.ibb.co/6Fm3w6p/paulheaston-1835804204881109182.jpg",
      ARheight: 853,
      ARwidth: 640,
    },
    {
      index: 36,
      medium: "https://i.ibb.co/SBxQZzs/sutokun123-1840364646408020133.jpg",
      sharp: "https://i.ibb.co/7Kzg0qY/sutokun123-1840364646408020133.jpg",
      ARheight: 623,
      ARwidth: 640,
    },
    {
      index: 37,
      medium:
        "https://i.ibb.co/2cV8545/Funky-Cold-Tobias-1838542569766056244.jpg",
      sharp:
        "https://i.ibb.co/5spY2H2/Funky-Cold-Tobias-1838542569766056244.jpg",
      ARheight: 1,
      ARwidth: 1,
    },
    {
      index: 38,
      medium: "https://i.ibb.co/cLTdLCq/blankspac-e-1838030863583613182.jpg",
      sharp: "https://i.ibb.co/L5pf5JK/blankspac-e-1838030863583613182.jpg",
      ARheight: 1,
      ARwidth: 1,
    },
    {
      index: 39,
      medium: "https://i.ibb.co/8rxyY31/afrogodd-1709670022073696445.jpg",
      sharp: "https://i.ibb.co/k4DLmnN/afrogodd-1709670022073696445.jpg",
      ARheight: 121,
      ARwidth: 64,
    },
    {
      index: 40,
      medium: "https://i.ibb.co/86KjyFw/blankspac-e-1838067261921546576.jpg",
      sharp: "https://i.ibb.co/LnkCT4y/blankspac-e-1838067261921546576.jpg",
      ARheight: 1,
      ARwidth: 1,
    },
  ];
  const galleryData5 = [
    {
      index: 41,
      medium: "https://i.ibb.co/C9SQGFD/Jannnnai-1838139239055184008.jpg",
      sharp: "https://i.ibb.co/X5GtRTM/Jannnnai-1838139239055184008.jpg",
      ARheight: 5,
      ARwidth: 4,
    },
    {
      index: 42,
      medium: "https://i.ibb.co/KjP6ZH4/blvvvckfire-1490382135210954754.jpg",
      sharp: "https://i.ibb.co/rGjkPJ8/blvvvckfire-1490382135210954754.jpg",
      ARheight: 181,
      ARwidth: 128,
    },
    {
      index: 43,
      medium: "https://i.ibb.co/WD91jYc/horrorsthetics-1836606838793531531.jpg",
      sharp: "https://i.ibb.co/k3nFvWh/horrorsthetics-1836606838793531531.jpg",
      ARheight: 76,
      ARwidth: 67,
    }, {
      index: 44,
      medium: "https://i.ibb.co/RppM0Jq/ckbdidit-1837520380203807012.jpg",
      sharp: "https://i.ibb.co/hRRnWTS/ckbdidit-1837520380203807012.jpg",
      ARheight: 5,
      ARwidth: 4,
    },
    {
      index: 45,
      medium: "https://i.ibb.co/bbJswMh/Roger-Haus-1837843348846985225.jpg",
      sharp: "https://i.ibb.co/wcsSGFH/Roger-Haus-1837843348846985225.jpg",
      ARheight: 85,
      ARwidth: 64,
    },{
      index: 46,
      medium: "https://i.ibb.co/d676QYT/imit0r-1833967003041734726.jpg",
      sharp: "https://i.ibb.co/7VbVGmf/imit0r-1833967003041734726.jpg",
      ARheight: 181,
      ARwidth: 128,
    },
    
  {
      index: 47,
      medium: "https://i.ibb.co/CVSJbp3/esraeslen-1837792324551667889-crxlzp.jpg",
      sharp: "https://i.ibb.co/frT8kVz/esraeslen-1837792324551667889-crxlzp.jpg",
      ARheight: 4,
      ARwidth: 3,
    },
    {
      index: 48,
      medium:
        "https://i.ibb.co/86KjyFw/blankspac-e-1838067261921546576.jpg",
      sharp: "https://i.ibb.co/LnkCT4y/blankspac-e-1838067261921546576.jpg",
      ARheight: 1,
      ARwidth: 1
    },
    {
      index: 49,
      medium:
        "https://i.ibb.co/ByRFBcZ/Wolfy-The-Witch-1840724625321283804.jpg",
      sharp: "https://i.ibb.co/Vg85TJS/Wolfy-The-Witch-1840724625321283804.jpg",
      ARheight: 853,
      ARwidth: 640
    }, {
      index: 50,
      medium: "https://i.ibb.co/mRNprTz/Ramin-Nasibov-1836888044617466123.jpg",
      sharp: "https://i.ibb.co/tHLRwKC/Ramin-Nasibov-1836888044617466123.jpg",
      ARheight: 803,
      ARwidth: 640,
    },
  ];

  function sumAspectRatios(index: number, array: imgData[]) {
    // Ensure index is within the array bounds
    // index = Math.min(index, galleryData1.length - 1);

    // Calculate the sum of fractions
    console.log(index);
     if (index > array.length * 4) {
      index = index - array.length * 4;
    } else if (index > array.length * 3) {
      index = index - array.length * 3;
    } else if (index > array.length * 2) {
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
    return sum;
  }

  return (
    <div className="w-screen relative">
      <div style={{ overflowY: view === 0 ? "hidden" : "hidden" }} className="relative h-screen w-screen ">
        <div className="relative w-[20vw]">
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
                      top: `calc(20vw*${sumAspectRatios(
                        data.index,
                        galleryData1
                      )})`,
                      left: 0,
                      height: `calc(20vw * ${data.ARheight / data.ARwidth})`,
                      width: "20vw",
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
          style={{ left: view > 10 && view < 21 ? "0" : "20vw" }}
          className="absolute w-[20vw] transition-all duration-200"
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
                      top: `calc(20vw * ${sumAspectRatios(
                        data.index,
                        galleryData2
                      )})`,
                      left: 0,
                      height: `calc(20vw * ${data.ARheight / data.ARwidth})`,
                      width: "20vw",
                    }
              }
              className={`${
                view === 0 ? "opacity-100" : "opacity-0"
              } flex items-center transition-all duration-200 max-h-screen  bg-black absolute`}
            >
              <GaleriaImg view={view} setView={setView} imgData={data} />
            </div>
          ))}
        </div> <div
          style={{ left: view > 20 && view < 31 ? "0" : "40vw" }}
          className="absolute w-[20vw] transition-all duration-200"
        >
          {galleryData3.map((data) => (
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
                      top: `calc(20vw * ${sumAspectRatios(
                        data.index,
                        galleryData3
                      )})`,
                      left: 0,
                      height: `calc(20vw * ${data.ARheight / data.ARwidth})`,
                      width: "20vw",
                    }
              }
              className={`${
                view === 0 ? "opacity-100" : "opacity-0"
              } flex items-center transition-all duration-200 max-h-screen  bg-black absolute`}
            >
              <GaleriaImg view={view} setView={setView} imgData={data} />
            </div>
          ))}
        </div>
        <div
          style={{ right: view > 30 && view < 41 ? "0" : "20vw" }}
          className="absolute w-[20vw] transition-all duration-200"
        >
          {galleryData4.map((data) => (
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
                      top: `calc(20vw * ${sumAspectRatios(
                        data.index,
                        galleryData4
                      )})`,
                      right: 0,
                      height: `calc(20vw * ${data.ARheight / data.ARwidth})`,
                      width: "20vw",
                    }
              }
              className={`${
                view === 0 ? "opacity-100" : "opacity-0"
              } flex items-center transition-all duration-200 max-h-screen bg-black absolute`}
            >
              <GaleriaImg view={view} setView={setView} imgData={data} />
            </div>
          ))}
        </div><div  className="absolute w-[20vw]  right-0">  
          {galleryData5.map((data) => (
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
                      top: `calc(20vw*${sumAspectRatios(
                        data.index,
                        galleryData5
                      )})`,
                      right: 0,
                      height: `calc(20vw * ${data.ARheight / data.ARwidth})`,
                      width: "20vw",
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
      {/* <div
        style={
          view !== 0
            ? {
                top: "calc(100vh - 5rem)",
              }
            : {
                top: "100vh",
              }
        }
        className="transition-all  duration-200 h-20 flex w-screen overflow-x-scroll absolute z-20"
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
        {galleryData3.map((data) => (
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
        ))}{galleryData4.map((data) => (
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
      </div>  */}
      {/* <div className="">   <div
              
              style={
                view 
                  ? {
                      top: 0,
                      left: 0,
                      height: "100vh",
                      width: "100vw",
                      zIndex: 10,
                      opacity: 1,
                    }
                  : {
                      top: `calc(20vw*${sumAspectRatios(
                        view,
                        galleryData1
                      )})`,
                      left: 0,
                      height: `calc(20vw * ${galleryData1[view-1].ARheight / galleryData1[view-1].ARwidth})`,
                      width: "20vw",
                    }
              }
              className={`${
                view === 0 ? "opacity-100" : "opacity-0"
              } flex items-center transition-all duration-200 max-h-screen bg-black absolute`}
            >
              <GaleriaImg view={view} setView={setView} imgData={galleryData1[view-1]} />
            </div></div> */}
            {/* <div className="columns-4 w-full gap-1 p-1">{galleryData1.concat(galleryData2,galleryData3,galleryData4).map((data) => (
          <div
            key={data.index}
            onClick={() => setView(data.index)}
            // style={{ aspectRatio: data.ARwidth / data.ARheight }}
            className=" relative h-full w-full mb-1"
          >
            <Image
              // fill={true}
              width={500}
              height={600}
              objectFit="cover"
              src={data.medium}
              alt="galeria images"
              className="rounded-lg"
            />
          </div>
        ))}</div> */}
    </div>
  );
}
