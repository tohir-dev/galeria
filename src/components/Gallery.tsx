import Image from "next/image";
export default function Gallery() {
  return (
    <div className="columns-2xs w-full ">
      <Image
        alt=""
        src="https://res.cloudinary.com/dgpnb2lv4/image/upload/v1726846407/freddiejacobart1680174105444724736_lmuxok.jpg"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
