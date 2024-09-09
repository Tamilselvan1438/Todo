import React from 'react'
import Input from "./refacter/Input";
import InputValue from "./refacter/InputValue";
import Details from "./refacter/Details";
import { Todolist } from './Todolist';

const Provider = () => {
  return (
    <div>
      <Todolist>
      <Input />
      <InputValue />
      <Details />
      </Todolist>
    </div>
  )
}

export default Provider