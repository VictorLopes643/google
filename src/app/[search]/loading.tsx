export default function SearchLoading() {
  return (
    <div>
      {new Array(8).fill(null).map((item, index) => (
        <div key={index} className="flex flex-col gap-2 mt-2 overflow-hidden">
          <div className="w-36 h-5 bg-gray-200"></div>
          <div className="w-56 h-5 bg-gray-200"></div>
          <div className="w-96 h-5 bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
}
