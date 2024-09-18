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
    <main className="flex min-h-screen flex-col items-center justify-between p-2 gap-10">
      <div className="columns-2xs w-full ">
        {result.resources.map((result) => (
         <div
         key={result.public_id}
         className="mb-4"
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
