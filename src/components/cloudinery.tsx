"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";

export function CldImg({ publicId, ...props }: { publicId: string }) {
  return (
    <CldImage
      width="300"
      height="500"
      src={publicId}
      sizes="100vw"
      alt="galeria images"
    />
  );
}

export function CldUploadBtn(){return   <CldUploadButton uploadPreset="dev_preset" />}