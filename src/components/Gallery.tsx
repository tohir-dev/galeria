import cloudinary from "cloudinary";
import { OptimizedImage } from "./OptimizedImage";

export type SearchResult = { public_id: string; secure_url: string };
export default async function Gallery() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .max_results(50)
    .execute()) as {
    resources: SearchResult[];
  };

  function shuffleArray(array:any) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }


  return (
    <div className="max-w-screen">
      <div className="columns-4 md:columns-3 lg:columns-9 xl:column-5  gap-1 md:gap-2 w-full ">
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
  );
}
