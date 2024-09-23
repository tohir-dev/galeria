import { CldImg } from "@/components/cloudinery";
import { TabsContent } from "@/components/ui/tabs";
import cloudinary from "cloudinary";
import Image from "next/image";


export type SearchResult = { public_id: string, secure_url:string };
export default async function Home() {

  const categories = [
   "popular",
   "painting",
   "photograph",
   "digital",
   "drawing",
   "3d",
   "sculpture",
   "face",
   "anime",
   "animal",
   "retro",
   "pen",
   "abstract",
   "cultural",
   "white",
   "balck",
   "blue",
   "red",
   "green",
   "landscape",
 ];
  return categories.map(async (category) => {
    const result = (await cloudinary.v2.search
      .expression(``)
      .execute()) as { resources: SearchResult[] };
    return (
      <TabsContent key={category} value={category}>
        <div className="max-w-screen">
          <div className="columns-4 md:columns-3 lg:columns-9 xl:column-5  gap-1 md:gap-2 w-full ">
            {result.resources.map((result) => (
              <div key={result.public_id} className="md:mb-2 mb-1">
                <Image
                  width="500"
                  height="500"
                  src={result.secure_url}
                  alt="art-twitter images"
                />
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    );
  });
}
