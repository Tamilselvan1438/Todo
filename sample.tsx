import React, { ChangeEvent, useState, useReducer } from "react";
import Input from "./refacter/input";
import InputValue from "./refacter/inputValue";
import Details from "./refacter/details";

export default function SampleTodolist() {
  const [inputValue, setInputValue] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [selceted, setSelceted] = useState<string[]>([]);
  const [all, setAll] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  const addEvent = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleRemoveEvent = (element: string): void => {
    setInputValue((prev: string[]) =>
      prev.filter((options: string) => options !== element)
    );
    setSelceted([]);
  };
  const handleDelete = (): void => {
    setInputValue((arg: string[]) =>
      arg.filter((option) => !selceted.includes(option))
    );
    setSelceted([]);
  };

  const handleCheckbox = (name: string): void => {
    setSelceted((prevChecked: string[]) =>
      prevChecked.includes(name)
        ? prevChecked.filter((itemName: string) => itemName !== name)
        : [...prevChecked, name]
    );
  };

  const handleAllShow = (): void => {
    setAll(true);
    setActive(false);
    setCompleted(false);
  };
  const handleActiveShow = (): void => {
    setAll(false);
    setActive(true);
    setCompleted(false);
  };
  const handleCompletedShow = (): void => {
    setAll(false);
    setActive(false);
    setCompleted(true);
  };

  const handleAdd = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      setInputValue([...inputValue, value]);
      setValue("");
    }
  };

  return (
    <div>
      <Input value={value} addEvent={addEvent} handleAdd={handleAdd} />
      <InputValue
        value={value}
        all={all}
        inputValue={inputValue}
        selected={selceted}
        handleCheckbox={handleCheckbox}
        handleRemoveEvent={handleRemoveEvent}
        active={active}
        completed={completed}
      />
     {inputValue.length !== 0 && <Details
        inputValue={inputValue}
        selected={selceted}
        handleAllShow={handleAllShow}
        handleActiveShow={handleActiveShow}
        handleCompletedShow={handleCompletedShow}
        handleDelete={handleDelete}
      />}
    </div>
  );
}
