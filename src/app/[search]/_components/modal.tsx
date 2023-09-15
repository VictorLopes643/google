interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  animal: Animal;
}

const Modal = ({ isOpen, onClose, animal }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <aside className="bg-white rounded-lg max-w-sm p-8 m-5 z-10">
        <div className="p-2 border border-gray-200 rounded-lg  flex flex-col gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={animal.image} alt={animal.title} />
          <span>{animal.url}</span>
          <h1 className="font-bold text-lg ">{animal.title}</h1>
          <p>{animal.description}</p>
        </div>
      </aside>
    </div>
  );
};

export default Modal;
