type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  saveHandler: () => void;
  deleteTodo: () => void;
  modal: boolean;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function EditTodoModal(props: Props) {
  const { setTitle, title, saveHandler, deleteTodo, modal, showModal } = props;

  return (
    <section
      className={`fixed sm:hidden top-0 left-0 right-0 bottom-0 w-full h-full z-30 bg-black/80 ${
        modal ? "block" : "!hidden"
      }`}
    >
      <div className="relative flex flex-col top-[50%] max-w-sm left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[350px] bg-[rgba(243,243,243,1)]">
        {/* header */}
        <div className="bg-lightBlue flex items-center justify-center text-white drop-shadow-xl h-[70px]">
          <p className="font-medium text-shadow text-xl"> Edit Task</p>
        </div>

        {/*.......... Todo edit input box ....... */}
        <div className="mt-20 px-7">
          <p className="tracking-wide leading-relaxed">Task Name</p>
          <form className="">
            <input
              onChange={(e) => setTitle(e.currentTarget.value)}
              value={title}
              className="w-full h-full transition-all rounded-lg p-4 text-primaryBlue bg-white border-2 focus:border-4"
              placeholder="Enter the next item in your list"
              type="text"
            />
          </form>
        </div>

        {/* ........   foter buttons .........  */}
        <div className="flex mt-auto mb-5 gap-5 px-5">
          {/* delete btn */}
          <div className="w-full max-w-[120px] border-2 overflow-hidden rounded-lg border-primaryRed">
            <button
              onClick={deleteTodo}
              className="bg-lightRed border-t border-white/20 block h-10 w-full "
            >
              <span className="text-lg text-white drop-shadow-sm">Delete</span>
            </button>
          </div>

          {/* save btn */}
          <div className="w-full border-2 overflow-hidden rounded-lg border-secondaryBlue">
            <button
              onClick={saveHandler}
              className="bg-lightBlue border-t border-white/20 block h-10 w-full "
            >
              <span className="text-lg text-white drop-shadow-sm">Save</span>
            </button>
          </div>
        </div>

        {/* ?close modal btn  */}
        <button
          onClick={() => showModal(false)}
          className="-top-12 right-0 h-10 w-10 rounded-full flex items-center justify-center text-white bg-white/10 font-bold text-xl absolute hover:bg-white/20 transition-all"
        >
          x
        </button>
      </div>
    </section>
  );
}

export default EditTodoModal;
