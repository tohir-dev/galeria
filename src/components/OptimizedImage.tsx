"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const OptimizedImage = ({ src, alt }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      width="500"
      height="600"
      src={src}
      alt={alt}
      className={cn(
        "duration-1000",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};
