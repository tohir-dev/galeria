import { CldImg } from "@/components/cloudinery";
import { TabsContent } from "@/components/ui/tabs";
import cloudinary from "cloudinary";

 export const categories = [
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
export type SearchResult = { public_id: string };
export default async function Home() {


  return categories.map(async (category) => {
    const result = (await cloudinary.v2.search
      .expression(`tags=${category}`)
      .execute()) as { resources: SearchResult[] };
    return (
      <TabsContent key={category} value={category}>
        <div className="max-w-screen">
          <div className="columns-1 md:columns-3 lg:columns-4 xl:column-5  gap-1 md:gap-2 w-full ">
            {result.resources.map((result) => (
              <div key={result.public_id} className="md:mb-2 mb-1">
                <CldImg
                  width="500"
                  height="500"
                  src={result.public_id}
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
