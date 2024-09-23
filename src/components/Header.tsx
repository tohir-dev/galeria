import { categories } from "@/app/page";
import { TabsList, TabsTrigger } from "./ui/tabs";

export default function Header() {


  return (
    <div className=" mx-auto sticky top-0">
      <TabsList className=" bg-background w-screen overflow-x-scroll">
        {categories.map((category) => (
          <TabsTrigger className="uppercase" key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}
