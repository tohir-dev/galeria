"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function CldImg(props: any) {
  return <div className=""><CldImage {...props} /></div> ;
}

export function CldUploadBtn() {
  const router = useRouter();
  return (
    <Button asChild>
      <CldUploadButton
        onSuccess={() => router.refresh()}
        uploadPreset="dev_preset"
      />
    </Button>
  );
}
