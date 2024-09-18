import { CldImg } from "@/components/cloudinery";
import cloudinary from "cloudinary";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



type SearchResult = { public_id: string };
export default async function Home() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at","desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
  <div>
       
        {["paintings", "sculptures", "photography", "digital"].map((category) => (
          <TabsContent key={category} value={category}>
      <div className="columns-2xs w-full ">
        {result.resources.map((result) => (
         <div
         key={result.public_id}
         className="md:mb-4 mb-2"
       >
          <CldImg         
            width="500"
            height="500"
            src={result.public_id}
            alt="galeria images"
          />
          </div>
        ))}
      </div></TabsContent>))}</div>
  
  );
}
