interface ProductPageProps {
  params: {
    search: string;
  };
}

export default async function SearchPage({ params }: ProductPageProps) {
  const search = params.search;
  return <p>Search: {search}</p>;
}
