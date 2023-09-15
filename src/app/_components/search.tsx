"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import fakeDatabase from "@/db/fakerDB";

export function Search() {
  const [query, setQuery] = useState<string>();
  const clearQuery = () => {
    console.log("clearQuery");
    setQuery("");
  };

  console.log("handleQuery", query);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   console.log("handleSearch", e);
  //   setQuery(e.target.value);
  // };
  console.log("fakeDatabase", fakeDatabase);

  return (
    <form className="flex flex-col items-center gap-4">
      <div className="relative flex items-center">
        <BsSearch size={20} className="absolute ml-3" />
        <input
          type="text"
          // value={query}
          onChange={(e: any) => setQuery(e.target.value)}
          placeholder="Pesquisar..."
          className="border rounded-full px-10  py-2 w-96 focus:outline-none"
        />
      </div>

      <Link href={query ? query : ""} className="w-20 bg-gray-200 p-3">
        Buscar
      </Link>
    </form>
  );
}
