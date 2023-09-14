import { RandomFox } from "./components/RandomFox";

const random = (): number => Math.floor(Math.random() * 123) + 1

export default function Home() {
  const image = `https://randomfox.ca/images/${random()}.jpg`;
  return (
    <main>
      <RandomFox image={image} />
    </main>
  )
}
