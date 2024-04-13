import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Selecting filtered todos based on current filter and search term from Redux store
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    // Filtering todos based on filter and search term
    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  // Logging filtered todos for debugging
  console.log("Filtered Todos:", filteredTodos);

  return (
    <ul>
      {/* Placeholder message for empty todo list */}
      <li className="my-2 text-sm italic">Your Tasks Here...</li>

      {/* Rendering filtered todos */}
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
