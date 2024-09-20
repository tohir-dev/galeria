import Image from "next/image";
export default function Gallery() {
  return (
    <div className="columns-2xs w-full ">
      <div className="">
      <a href="">
        <Image
          alt=""
          src="https://res.cloudinary.com/dgpnb2lv4/image/upload/v1726846407/freddiejacobart1680174105444724736_lmuxok.jpg"
          width={500}
          height={500}
          objectFit="cover"
        />
      </a></div>
    </div>
  );
}
