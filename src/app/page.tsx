import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { SearchButton } from "./_components/searchButton";
import Header from "./_components/header";
import { faker } from "@faker-js/faker";
export default function Home() {
  const user: User = {
    name: faker.person.firstName(),
    image: faker.image.avatarGitHub(),
  };
  return (
    <div className=" w-full flex flex-col">
      <Header user={user} />
      <main className="flex-1  flex justify-center items-center flex-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}

        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google logo"
          height={300}
          width={300}
        />
        <SearchButton />
      </main>
    </div>
  );
}
