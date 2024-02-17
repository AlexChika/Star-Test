type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  saveHandler: () => void;
  deleteTodo: () => void;
};

function EditTodoUI(props: Props) {
  const { setTitle, title, saveHandler, deleteTodo } = props;

  return (
    <section className="flex-col w-full sm:flex hidden bg-[rgba(243,243,243,1)]">
      {/* header */}
      <div className="bg-lightBlue flex items-center justify-center text-white drop-shadow-xl h-[128px] md:h-[136px]">
        <p className="font-medium text-shadow text-2xl"> Edit Task</p>
      </div>

      {/*.......... Todo edit input box ....... */}
      <div className="mt-10 px-7">
        <p className="tracking-wide leading-relaxed">Task Name</p>
        <form className="">
          <input
            onChange={(e) => setTitle(e.currentTarget.value)}
            value={title}
            className="w-full h-full transition-all rounded-lg p-5 text-primaryBlue bg-white border-2 focus:border-4"
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
            className="bg-lightRed border-t border-white/20 block h-16 w-full "
          >
            <span className="text-lg text-white drop-shadow-sm">Delete</span>
          </button>
        </div>

        {/* save btn */}
        <div className="w-full border-2 overflow-hidden rounded-lg border-secondaryBlue">
          <button
            onClick={saveHandler}
            className="bg-lightBlue border-t border-white/20 block h-16 w-full "
          >
            <span className="text-lg text-white drop-shadow-sm">Save</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default EditTodoUI;
