interface NotFoundProps {
  search: string;
}

export default function NotFound({ search }: NotFoundProps) {
  return (
    <div className="p-5">
      <p>
        No results found for "<strong>{search}</strong>"
      </p>
      <span>
        Try looking for:{" "}
        <strong>
          insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit,
          cat, snake, dog, bird
        </strong>
      </span>
    </div>
  );
}
