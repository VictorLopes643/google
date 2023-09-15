"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

export function SearchButton() {
  const [query, setQuery] = useState<string>();
  return (
    <form className="flex flex-col items-center gap-4">
      <div className="relative flex items-center">
        <BsSearch size={20} className="absolute ml-3" />
        <input
          type="text"
          onChange={(e: any) => setQuery(e.target.value)}
          placeholder="Pesquisar..."
          className="border rounded-full px-10  py-2 w-96 focus:outline-none"
        />
      </div>
      <button>
        <Link href={query ? query : ""} className="w-20 bg-gray-200 p-3">
          Buscar
        </Link>
      </button>
    </form>
  );
}
