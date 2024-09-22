import { TabsList, TabsTrigger } from "./ui/tabs";

export default function Header() {
  const categories = ['popular', 'painting', 'photograph', 'digital',"drawing","3d","face","anime","animal"]


  return (
    <div className=" mx-auto">
      <div className="flex h-16 items-center justify-center px-2 gap-4">
        <TabsList className="flex space-x-4 max-w-screen overflow-x-scroll">
          {categories.map((category) => (
            <TabsTrigger className="uppercase"  key={category} value={category}>{category}</TabsTrigger>
           
          ))}
        </TabsList>
      </div>
    </div>
  );
}
