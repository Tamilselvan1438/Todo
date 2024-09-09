import {useTodoContext } from "../Todolist";
import _ from "lodash"


const Details = () => {
  const { todo, SetCompletedDelete, setFilterTodo } = useTodoContext();

  return (
    <div className="fotter">
      <span>{_.filter(todo, (item)=> !item.completed).length} item left!</span>
      <span>
        <button onClick={() => setFilterTodo("All")}>All</button>
        <button onClick={() => setFilterTodo("Active")}>Active</button>
        <button onClick={() => setFilterTodo("Complete")}>Completed</button>
      </span>
      <button onClick={SetCompletedDelete}>Clear completed</button>
    </div>
  );
};

export default Details;

