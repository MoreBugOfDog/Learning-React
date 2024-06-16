import * as React from'react';
import { useState } from 'react';
  

function Form(props) {
  const [name, setName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask("say hello!");
  }
  return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            需要完成的任务
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          添加
        </button>
      </form>
    )
}
export default Form;