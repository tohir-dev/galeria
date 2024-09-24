import cloudinary from "cloudinary";
import { OptimizedImage } from "./OptimizedImage";
import Image from "next/image";

export type SearchResult = { public_id: string; secure_url: string };
export default async function Gallery() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .max_results(30)
    .execute()) as {
    resources: SearchResult[];
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="max-w-screen">
        <div className="columns-4 md:columns-3 lg:columns-8 xl:column-5  gap-1 md:gap-2 w-full ">
          {result.resources
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .map((result) => (
              <div key={result.public_id} className="md:mb-2 mb-1">
                <OptimizedImage
                  src={result.secure_url}
                  alt="art-twitter images"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="absolute w-screen h-screen bg-black/70 backdrop-blur-lg top-0 flex flex-col">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative  max-h-[80vh] md:max-w-[80vw] w-full h-full mx-auto">
            <Image
              src={result.resources[26].secure_url}
              alt="art-twitter images"
              fill={true}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex gap-1 w-screen overflow-x-scroll">
          {result.resources.map((result) => (
            <div key={result.public_id} className="relative h-28 min-w-20">
              <Image
                src={result.secure_url}
                alt="art-twitter images"
                objectFit="cover"
                fill={true}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
