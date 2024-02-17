type Props = {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddToDoBtn({ showModal }: Props) {
  return (
    <div className="absolute bottom-2 right-10 ml-auto rounded-full border-secondaryBlue border-2">
      <button
        onClick={() => showModal(true)}
        className="bg-lightBlue border-t border-white/20 block h-16 w-16 rounded-full "
      >
        <span className="text-4xl text-white drop-shadow-sm">+</span>
      </button>
    </div>
  );
}

export default AddToDoBtn;
