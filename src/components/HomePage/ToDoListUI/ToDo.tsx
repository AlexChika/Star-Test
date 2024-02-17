import CheckIcon from "../../../assets/icons/CheckIcon";

type Props = {
  todo: Todo;
  editExistingTodo: (todo: Todo) => void;
  toDo_ToBeEditted: Todo | null;
  checkHandler: (id: string) => void;
};

function ToDo(props: Props) {
  const { todo, editExistingTodo, toDo_ToBeEditted, checkHandler } = props;

  return (
    <div
      className={`flex items-center justify-between gap-3 mt-6 px-5 md:px-7 rounded-md drop-shadow-md bg-white py-5 transition-all hover:scale-105 hover:bg-white/80 ${
        toDo_ToBeEditted?.id === todo.id && "!bg-primaryBlue/20"
      }`}
    >
      {/* check icon */}
      <button
        onClick={() => checkHandler(todo.id)}
        className={`flex justify-center items-center h-8 min-w-[32px] w-8 rounded-full border-2 border-primaryBlue ${
          todo.done && "!bg-tertiaryGreen !border-secondaryGreen"
        }`}
      >
        {todo.done && <CheckIcon />}
      </button>

      {/* text */}
      <span
        className={`truncate text-primaryBlue w-full ${
          todo.done && "line-through !text-gray-500"
        }`}
      >
        {todo.title}
      </span>

      {/* edit btn */}
      <button
        onClick={() => editExistingTodo(todo)}
        className="border-[1px] text-base rounded text-primaryBlue font-medium border-primaryBlue p-2.5 hover:bg-lightBlue/5 transition-all"
      >
        Edit
      </button>
    </div>
  );
}

export default ToDo;
