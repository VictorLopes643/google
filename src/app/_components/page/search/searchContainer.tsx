"use client";
import { useState } from "react";
import SearchCard from "./searchCard";

interface SearchContainerProps {
  animalArray: Animal[];
}

export default function SearchContainer({ animalArray }: SearchContainerProps) {
  console.log(animalArray);
  const [animalVisable, setAnimalVisibility] = useState<Animal>();
  console.log("Animal Visibility: " + animalVisable?.title);
  return (
    <div className="flex flex-col items-center px-5 sm:px-10 md:px-24 lg:px-36">
      <div className="grid grid-cols-3 gap-4  items-start ">
        <main className="col-span-2 gap-2 flex flex-col">
          {animalArray.map((item) => (
            <SearchCard
              animal={item}
              key={item.id}
              setAnimal={setAnimalVisibility}
            />
          ))}
        </main>
        <aside className="relative">
          {animalVisable && (
            <div className="p-8 border border-gray-200 rounded-lg absolute top-0 flex flex-col gap-2">
              <img src={animalVisable?.image}></img>
              <span>{animalVisable?.url}</span>
              <h1 className="font-bold text-lg">{animalVisable?.title}</h1>

              <p>{animalVisable?.description}</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
