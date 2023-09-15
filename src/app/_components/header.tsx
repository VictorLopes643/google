import Image from "next/image";
import { PiDotsNineBold } from "react-icons/pi";

interface headerProps {
  user: User;
}

export default function Header(props: headerProps) {
  return (
    <header className="h-9 flex justify-between items-center my-2 px-4 border-b-2 border-gray-300">
      <h5>
        <strong>Agile Content</strong> Frontend test
      </h5>
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
    </header>
  );
}
