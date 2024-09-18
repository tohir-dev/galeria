"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
export function CldImg(props: { width: string;
                             height: string;
                             src:string;
                             alt:string}) { 
  const { width, height, ...restProps } = props;
  return (
    <div className="">
      <CldImage 
        {...restProps}
        width={parseInt(width)} 
        height={parseInt(height)} /> 
    </div> 
  );
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
