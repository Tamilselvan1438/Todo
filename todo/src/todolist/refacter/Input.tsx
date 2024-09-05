import React, { ChangeEvent } from "react";
import "/home/intern/dev-practice/todo/src/todolist/todolist.css";

interface InputType {
  value: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  addItem: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  selectedAll: () => void;
}

function Input({ value, setValue, addItem, selectedAll }: InputType) {
  return (
    <div className="colour">
      <div>
        <div className="h1">
          <h1 className="h1">TODOS</h1>
          <button onClick={selectedAll}>✅</button>
          <input
            className="h1"
            placeholder="what needs tobe done?"
            value={value}
            onChange={setValue}
            onKeyDown={addItem}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
