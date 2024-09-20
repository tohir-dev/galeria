import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex h-16 items-center px-2 gap-1">
        <h1 className="text-3xl">art-twitter</h1>
        <div className="ml-auto flex items-center space-x-4">
          <TabsList className="flex mx-auto gap-2">
            <TabsTrigger value="painting">Paintings</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="digital">Digital</TabsTrigger>
          </TabsList>
        </div>
      </div>
    </div>
  );
}
