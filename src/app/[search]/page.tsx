import { faker } from "@faker-js/faker";
import Header from "../_components/header";
import SearchCard from "../_components/page/search/searchCard";
import fakeDatabase from "@/db/fakerDB";
import SearchContainer from "../_components/page/search/searchContainer";
import SearchHeader from "../_components/page/search/searchHeader";
interface ProductPageProps {
  params: {
    search: string;
  };
}
export default async function SearchPage({ params }: ProductPageProps) {
  const search = params.search;
  const user: User = {
    name: faker.person.firstName(),
    image: faker.image.avatarGitHub(),
  };
  const generateSkeleton = () => {
    return new Array(8).fill(null).map((item, index) => (
      <div key={index} className="flex flex-col gap-2 mt-2 overflow-hidden">
        <div className="w-36 h-5 bg-gray-200"></div>
        <div className="w-56 h-5 bg-gray-200"></div>
        <div className="w-96 h-5 bg-gray-200"></div>
      </div>
    ));
  };

  const animalArray = fakeDatabase.filter(
    (animal) =>
      animal.description.includes(search) ||
      animal.title.includes(search) ||
      animal.url.includes(search)
  );

  return (
    <div className="h-full w-full flex flex-col ">
      <SearchHeader user={user} />
      <SearchContainer animalArray={animalArray} />
    </div>
  );
}
