import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex p-2 gap-2">
      <div className="mx-auto h-full flex-col justify-center flex">
        <div className="flex flex-col relative overflow-hidden h-[650px] w-[300px] border border-[10px] rounded-[50px] bg-black border-white/40">
          <Image fill={true} src="/assets/minimal1.png" alt="wallpaper" />
          <div className="z-10 flex-col h-full justify-between items-center flex">
          <div className="flex flex-col items-center ">
            <div className="h-10"></div>
            <div className="flex flex-col mx-auto text-white gap-3 text-center ">
              <p className="font-semibold ">Friday 05 July</p>
              <p className=" text-6xl">12:41</p>
            </div>
          </div>
          <div className="p-3">
            <div className="h-[6px] w-[120px] rounded-full bg-[#7E7E7E]"></div>
          </div></div>
        </div>
      </div>
    </div>
  );
}
