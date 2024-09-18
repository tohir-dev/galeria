import { Button } from "./ui/button";
import { CldUploadBtn } from "./cloudinery";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex h-16 items-center px-2 gap-2">
       <h1 className="text-3xl">galeria</h1>
        <div className="ml-auto flex items-center space-x-4">
          <TabsList className="grid mx-auto w-max grid-cols-3">
            <TabsTrigger value="paintings">Paintings</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="digital">Digital Art</TabsTrigger>
          </TabsList>
        </div>
      </div>
    </div>
  );
}
