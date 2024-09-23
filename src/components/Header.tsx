import { TabsList, TabsTrigger } from "./ui/tabs";

export default function Header() {

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
