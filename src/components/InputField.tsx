import { useRef } from "react";
import "./style.css";

interface todoType {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todo: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const InputField = ({ todo, setTodo, handleSubmit }: todoType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="input"
        onSubmit={(event) => {
          handleSubmit(event);
          inputRef.current?.blur();
        }}
      >
        <input
          type="text"
          placeholder="Enter a Task"
          className="input_box"
          value={todo}
          ref={inputRef}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit" className="input_submit">
          GO
        </button>
      </form>
    </div>
  );
};

export default InputField;
