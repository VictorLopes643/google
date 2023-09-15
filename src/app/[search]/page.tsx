import fakeDatabase from "@/db/fakerDB";
import SearchContainer from "./_components/searchContainer";
import { Suspense } from "react";
import SearchLoading from "./loading";
interface ProductPageProps {
  params: {
    search: string;
  };
}
export default async function SearchPage({ params }: ProductPageProps) {
  const search = params.search;
  const animalArray = fakeDatabase.filter(
    (animal) =>
      animal.description.includes(search) ||
      animal.title.includes(search) ||
      animal.type.includes(search) ||
      animal.url.includes(search)
  );
  return (
    <div className="h-full w-full flex flex-col ">
      <Suspense fallback={<SearchLoading />}>
        <SearchContainer animalArray={animalArray} search={search} />
      </Suspense>
    </div>
  );
}
