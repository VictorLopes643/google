import "../globals.css";
import { faker } from "@faker-js/faker";
import SearchHeader from "./_components/searchHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: User = {
    name: faker.person.firstName(),
    image: faker.image.avatarGitHub(),
  };
  return (
    <div className="flex flex-col">
      <SearchHeader user={user} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
