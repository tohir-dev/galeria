import { CldImg } from "@/components/cloudinery";
import { TabsContent } from "@/components/ui/tabs";
import cloudinary from "cloudinary";

export type SearchResult = { public_id: string };
export default async function Home() {
  const categories = [
    "popular",
    "painting",
    "photograph",
    "digital",
    "drawing",
    "3d",
    "face",
    "anime",
    "animal",
  ];

  return categories.map(async (category) => {
    const result = (await cloudinary.v2.search
      .expression(`tags=${category}`)
      .execute()) as { resources: SearchResult[] };
    return (
      <TabsContent value={category}>
        <div className="max-w-screen">
          <div className="columns-1 md:columns-3 lg:columns-4  gap-2 md:gap-4 w-full ">
            {result.resources.map((result) => (
              <div key={result.public_id} className="md:mb-4 mb-2">
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
