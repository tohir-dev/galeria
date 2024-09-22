"use client"
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const categories = ['popular', 'painting', 'photograph', 'digital',"drawing","3d","face","anime","animal"]

  const [selectedCategory, setSelectedCategory] = useState('popular')

  return (
    <div className=" mx-auto">
      <div className="flex h-16 items-center justify-center px-2 gap-4">
          <div className="flex space-x-4" max-w-screen overflow-x-scroll> 
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 uppercase text-sm font-semibold ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
}
