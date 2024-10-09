import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex p-2 gap-2">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6">
        
        <div className="relative h-[650px] w-[300px] rounded-[50px] overflow-hidden ">
        
          <Image fill={true} src="/assets/matrix.png" alt="wallpaper" />
        </div><div className="relative h-[650px] w-[300px] rounded-[50px] overflow-hidden ">
        
        <Image fill={true} src="/assets/gameboy.png" alt="wallpaper" />
      </div><div className="relative h-[650px] w-[300px] rounded-[50px] overflow-hidden ">
        
        <Image fill={true} src="/assets/code.png" alt="wallpaper" />
      </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col relative overflow-hidden h-[650px] w-[300px] outline outline-[8px] rounded-[50px] outline-black/50">
          {/* <Image fill={true} src="/assets/punisher.png" alt="wallpaper" /> */}
          <div className="z-10 flex-col h-full justify-between items-center flex">
            <div className="flex flex-col items-center ">
              <div className="h-10"></div>
              <div className="flex flex-col mx-auto text-white gap-3 text-center ">
                <p className="font-semibold ">Friday 05 July</p>
                <p className=" text-7xl">12:41</p>
              </div>
            </div>
            <div className="p-3">
              <div className="h-[6px] w-[120px] rounded-full bg-[#7E7E7E]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
