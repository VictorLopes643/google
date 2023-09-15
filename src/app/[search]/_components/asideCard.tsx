interface AsideCard {
  animal: Animal;
}
export default function AsideCard({ animal }: AsideCard) {
  return (
    <aside className="relative">
      <div className="p-8 border border-gray-200 rounded-lg absolute top-0 flex flex-col gap-2">
        <img src={animal.image} alt={animal.title} />
        <span>{animal.url}</span>
        <h1 className="font-bold text-lg">{animal.title}</h1>
        <p>{animal.description}</p>
      </div>
    </aside>
  );
}
