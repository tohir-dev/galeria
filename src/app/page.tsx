import { CldImg } from "@/components/cloudinery";
import cloudinary from "cloudinary";
type SearchResult = { public_id: string };
export default async function Home() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at","desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <main className=" min-h-screen md:p-2 ">
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
      </div>
    </main>
  );
}
