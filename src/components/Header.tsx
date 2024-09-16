import { Button } from "./ui/button";
import { CldUploadBtn } from "./cloudinery";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex h-16 items-center px-4">
        galeria
        <div className="ml-auto flex items-center space-x-4">
          <Button asChild>
          <CldUploadBtn/>
          </Button>
          <a href="">twitter</a>
        </div>
      </div>
    </div>
  );
}
