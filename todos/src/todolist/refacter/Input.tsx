import { useTodoContext } from "../Todolist";

const Input = () => {
  const { newTodo, SetChange, SetAdd } = useTodoContext();

  return (
    <div className="inputs">
       <h1 className="h1">TODOS</h1>
      <input
        placeholder="What needs to be done?"
        value={newTodo}
        onChange={(e)=>SetChange(e.target.value)}
        onKeyDown={(e) =>SetAdd(e.key)}
      />
    </div>
  );
};

export default Input;
