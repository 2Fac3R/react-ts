"use client"
import { useState } from "react";
import { RandomFox } from "./components/RandomFox";

const random = (): number => Math.floor(Math.random() * 123) + 1

export default function Home() {
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);
  return (
    <main>
      {images.map((image, index) => (
        <div className="p-4" key={index}>
          <RandomFox image={image} />
        </div>
      ))}
    </main>
  )
}
