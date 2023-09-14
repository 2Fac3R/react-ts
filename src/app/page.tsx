"use client"
import { useState } from "react";
import type { MouseEventHandler } from 'react'
import { random } from "lodash"
import { RandomFox } from "./components/RandomFox";


const randomNum = (): number => random(1, 123)
const generateId = () => Math.random().toString(36).substr(2, 9)

export default function Home() {
  const [images, setImages] = useState<Array<TImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const id = generateId();
    const url = `https://randomfox.ca/images/${randomNum()}.jpg`;
    setImages([...images, { id, url }]);
  };

  return (
    <main>
      <button
        onClick={addNewFox}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Add new fox
      </button>
      {images.map(image => (
        <div className="p-4" key={image.id}>
          <RandomFox image={image.url} />
        </div>
      ))}
    </main>
  )
}
