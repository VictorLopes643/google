import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { Search } from "./_components/search";
import fakeDatabase from "@/db/fakerDB";
export default function Home() {
  console.log("fakeDatabase", fakeDatabase);
  return (
    <div className="h-full w-full justify-center items-center flex">
      <main className="  flex justify-center items-center flex-col">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google logo"
          height={300}
          width={300}
        />
        <Search />
      </main>
    </div>
  );
}
