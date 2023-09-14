"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export function Search() {
  const [query, setQuery] = useState<string>();
  const clearQuery = () => {
    console.log("clearQuery");
    setQuery("");
  };
  return (
    <form className="flex flex-col items-center gap-4">
      <div className="relative flex items-center">
        <BsSearch size={20} className="absolute ml-3" />
        <input
          type="text"
          value={query}
          onChange={(e: any) => setQuery(e.target.value)}
          placeholder="Pesquisar..."
          className="border rounded-full px-10  py-2 w-96 focus:outline-none"
        />
        {query && (
          <button
            className="absolute right-3"
            type="button"
            onClick={clearQuery}
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
      <button className="w-20 bg-gray-200 p-3">Buscar</button>
    </form>
  );
}
