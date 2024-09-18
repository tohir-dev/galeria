
import { CldUploadBtn } from "./cloudinery";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex h-16 items-center px-4">
        <h1 className="text-2xl">galeria</h1>
        <div className="ml-auto flex items-center space-x-4">

          <CldUploadBtn/>

          <a href="">twitter</a>
        </div>
      </div>
    </div>
  );
}