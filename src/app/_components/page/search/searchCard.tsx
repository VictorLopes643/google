"use client";
import Link from "next/link";

interface searchCardProps {
  animal: Animal;
  setAnimal: (animal: any) => void;
}

export default function SearchCard({ animal, setAnimal }: searchCardProps) {
  console.log("animal", animal);
  return (
    <article className="gap-1 flex flex-col">
      <span className="text-sm text-gray-500">{animal.url}</span>
      <h1
        className="text-blue-500 font-bold text-lg"
        onClick={() => setAnimal(animal)}
      >
        {animal.title}
      </h1>
      <p>{animal.description}</p>
    </article>
  );
}
