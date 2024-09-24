"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type ImageProps ={src:string, alt:string}

export const OptimizedImage = ({ src, alt }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      width="500"
      height="600"
      src={src}
      alt={alt}
      className={cn(
        "duration-150 hover:scale-125 cursor-pointer",
        isLoading
          ? "grayscale blur-2xl scale-100"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};
