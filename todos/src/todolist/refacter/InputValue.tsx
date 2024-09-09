import _ from "lodash";
import { useTodoContext } from "../Todolist";

const InputValue = () => {
  const {filteredTodo, SetTodoChange, SetDelete } = useTodoContext()

  return (
    <div>
      {_.map(filteredTodo, (item, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => SetTodoChange(item.data)}
          />
          <span>{item.data}</span>
          <button onClick={() => SetDelete(item.data)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default InputValue;