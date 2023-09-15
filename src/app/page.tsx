import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { Search } from "./_components/search";
import Header from "./_components/header";
import { faker } from "@faker-js/faker";
export default function Home() {
  const user: User = {
    name: faker.person.firstName(),
    image: faker.image.avatarGitHub(),
  };
  return (
    <div className=" h-screen flex flex-col">
      <Header user={user} />
      <main className="flex-1  flex justify-center items-center flex-col">
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
