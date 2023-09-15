"use client";
import { useState } from "react";
import SearchCard from "./searchCard";
import isMobile from "../../../utils/isMobile";
import Modal from "./modal";
import NotFound from "./notFound";
import AsideCard from "./asideCard";

interface SearchContainerProps {
  animalArray: Animal[];
  search: string;
}

export default function SearchContainer({
  animalArray,
  search,
}: SearchContainerProps) {
  const [animalVisible, setAnimalVisibility] = useState<Animal>();
  const [openModal, setOpenModal] = useState(false);
  const mobile = isMobile();

  const handleAnimal = (animal: Animal) => {
    setAnimalVisibility(animal);
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return animalArray.length > 0 ? (
    <div className="flex flex-col items-center px-5 sm:px-10 md:px-24 lg:px-36">
      <div className="grid grid-cols-3 gap-4  items-start ">
        <main className="col-span-2 gap-2 flex flex-col">
          {animalArray.map((item) => (
            <SearchCard animal={item} key={item.id} setAnimal={handleAnimal} />
          ))}
        </main>
        {animalVisible && !mobile && <AsideCard animal={animalVisible} />}

        {animalVisible && mobile && (
          <Modal
            isOpen={openModal}
            onClose={handleClose}
            animal={animalVisible}
          />
        )}
      </div>
    </div>
  ) : (
    <NotFound search={search} />
  );
}
