import Advert from "./Advert";
import Header from "./Header";
import ToDo from "./ToDo";
import { getID } from "../../../util";
import AddToDoBtn from "./AddTodoBtn";

type Props = {
  todos: Todo[];
  editExistingTodo: (todo: Todo) => void;
  checkHandler: (id: string) => void;
  toDo_ToBeEditted: Todo | null;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function ToDoListUI(props: Props) {
  const { todos, checkHandler, editExistingTodo, toDo_ToBeEditted, showModal } =
    props;

  return (
    <section className="flex flex-col w-full sm:max-w-[414px] shadow-2x drop-shadow-md bg-[rgba(243,243,243,1)]">
      <Header />
      <Advert />

      {/* todo lists */}
      {todos.length > 0 && (
        <div className="max-h-[calc(100vh-250px)] h-full overflow-y-auto px-5 pb-24">
          {todos.map((todo) => {
            return (
              <ToDo
                key={getID()}
                {...{ editExistingTodo, toDo_ToBeEditted, todo, checkHandler }}
              />
            );
          })}
        </div>
      )}

      {todos.length < 1 && (
        <div className="flex justify-center items-center h-full max-h-[calc(100vh-250px)] text-gray-400">
          <p>You are yet to add todo</p>
        </div>
      )}

      {/* footer here */}
      <AddToDoBtn showModal={showModal} />
    </section>
  );
}

export default ToDoListUI;
