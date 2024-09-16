
import { CldImg } from "@/components/cloudinery";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
type SearchResult = { public_id: string };
export default async function Home() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .max_results(10)
    .execute()) as{resources: SearchResult[]};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 gap-10 ">
      <div className="grid grid cols-4 gap-4">
      {result.resources.map((result) => (<CldImg key={result.public_id} publicId={result.public_id}/>
      ))}</div>
    </main>
  );
}
