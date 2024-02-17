import { useState } from "react";
import { getID } from "../../util";

import EditTodoUI from "./EditTodoUI";
import ToDoListUI from "./ToDoListUI";
import EditTodoModal from "./EditTodoUI/EditTodoModal";

function HomePage() {
  const [title, setTitle] = useState(""); // todo tiltle
  const [modal, showModal] = useState(true); // modal for small screen
  const [todos, setTodos] = useState<Todo[]>([]); // list of todos
  const [toDo_ToBeEditted, set_ToDo_ToBeEditted] = useState<Todo | null>(null);

  /**
   * utility returns a todo object
   * @returns a ToDo object
   */
  function newTodoObject(): Todo {
    return {
      done: toDo_ToBeEditted ? toDo_ToBeEditted.done : false,
      id: toDo_ToBeEditted ? toDo_ToBeEditted.id : getID(),
      title,
    };
  }

  /**
   * function checks/unchecks a todo;
   * @param id => Id of todo to be checked or unchecked
   */
  function checkHandler(id: string) {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, done: !t.done };
      } else return t;
    });

    setTodos(newTodos);
  }

  /**
   *  function deletes todos.
   */
  function deleteTodo() {
    const id = toDo_ToBeEditted?.id;

    if (toDo_ToBeEditted) {
      const newTodos = todos.filter((t) => t.id !== id);
      setTodos(newTodos);
      set_ToDo_ToBeEditted(null);
    } else setTitle("");

    showModal(false);
  }

  /**
   * sets an existing todo up for editting
   * @param todo accepts a todo object
   */
  function editExistingTodo(todo: Todo) {
    set_ToDo_ToBeEditted(todo);
    setTitle(todo.title);
    showModal(true);
  }

  /**
   * updates an (editted) todo in the todos array
   */
  function saveEdittedTodo() {
    const newTodos = todos.map((t) => {
      if (t.id === toDo_ToBeEditted?.id) {
        return newTodoObject();
      }
      return t;
    });
    set_ToDo_ToBeEditted(null);
    setTodos(newTodos);
  }

  /**
   * adds/saves a todo into todos array
   */
  function saveTodo() {
    const newTodos = [...todos, newTodoObject()];
    setTodos(newTodos);
  }

  /**
   * function gets called when save btn is hit
   * @returns void
   */
  function saveHandler() {
    if (title.length < 1) return;

    if (toDo_ToBeEditted) saveEdittedTodo();
    else saveTodo();

    // clean uo
    setTitle("");
    showModal(false);
  }

  return (
    <div className="flex drop-shadow-lg bg-white w-full min-h-screen max-w-5xl mx-auto">
      <ToDoListUI
        {...{
          editExistingTodo,
          checkHandler,
          todos,
          toDo_ToBeEditted,
          showModal,
        }}
      />
      <EditTodoUI {...{ title, setTitle, saveHandler, deleteTodo }} />

      <EditTodoModal
        {...{ setTitle, title, saveHandler, deleteTodo, showModal, modal }}
      />
    </div>
  );
}

export default HomePage;
