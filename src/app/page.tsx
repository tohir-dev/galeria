import { CldImg } from "@/components/cloudinery";
import cloudinary from "cloudinary";

import { TabsContent } from "@/components/ui/tabs";

// export async function getInitialProps() {
//   const supabaseAdmin = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL || "",
//     process.env.SUPPABASE_SERVICE_ROLE_KEY || ""
//   );

//   const { data } = await supabaseAdmin.from("images").select("*").order("id");

//   return { props: { images: data } };
// }

export type SearchResult = { public_id: string };
export default async function Home() {
  // return <Gallery/>
  return (
    <div>
      {["painting", "photography", "digital"].map(async (category) => {
        const result = (await cloudinary.v2.search
          .expression(category)
          .sort_by("public_id", "desc")
          .execute()) as { resources: SearchResult[] };
        return (
          <TabsContent key={category} value={category}>
            <div className="columns-2xs w-full ">
              {result.resources.map((result) => (
                <div key={result.public_id} className="md:mb-4 mb-2">
                  <CldImg
                    width="500"
                    height="500"
                    src={result.public_id}
                    alt="galeria images"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        );
      })}
    </div>
  );
}
