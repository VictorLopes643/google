import Image from "next/image";
import { PiDotsNineBold } from "react-icons/pi";

interface SearchHeaderProps {
  user: User;
}

export default function SearchHeader(props: SearchHeaderProps) {
  return (
    <header className="h-12  flex gap-2 border-b-2 border-gray-300 px-4 lg:px-10 max-w-5xl:px-60">
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google logo"
        height={40}
        width={60}
      />
      <div className="flex flex-row justify-between w-full items-center">
        <input
          type="text"
          // value={query}
          //   onChange={(e: any) => setQuery(e.target.value)}
          placeholder="Pesquisar..."
          className="border rounded-full px-10  py-2 h-8 w-56 lg:w-96 focus:outline-none"
        />
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
