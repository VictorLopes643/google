"use client";
import Image from "next/image";
import { useState } from "react";

import { PiDotsNineBold } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
interface SearchHeaderProps {
  user: User;
}

export default function SearchHeader(props: SearchHeaderProps) {
  const [query, setQuery] = useState<string>();

  return (
    <header className="h-12  flex gap-2 border-b-2 border-gray-300 px-4 lg:px-10 max-w-5xl:px-60">
      <Link href={"/"} className="flex p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google logo"
          height={40}
          width={60}
        />
      </Link>

      <div className="flex flex-row justify-between w-full items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar..."
            onChange={(e: any) => setQuery(e.target.value)}
            className="border rounded-full px-3 py-2 h-8 w-56 lg:w-96 focus:outline-none"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Link href={query ? query : ""} className=" p-3">
              <BsSearch className="text-gray-400" />
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <PiDotsNineBold size={20} />
          <Image
            src={props.user.image}
            alt="Picture of the author"
            className="rounded-full"
            width={20}
            height={20}
          />
        </div>
      </div>
    </header>
  );
}
