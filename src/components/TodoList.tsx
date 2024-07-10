import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";

interface DetailsProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: DetailsProps) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        // <li>{todo.todo}</li>
        <SingleTodo
          todo={todo}
          todos={todos}
          index={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
