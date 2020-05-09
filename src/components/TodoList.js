// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoForm = (props) => {
  //constructor with state
  // constructor() {
  //   super();
  //   this.state = {
  //     item: "",
  //   };
  // }

  return (
    <form>
      <input
        type="text"
        name="item"
        value={props.item}
        onChange={props.handleChanges}
      />
      <button onClick={props.addItem}>Add Todo</button>

      <button onClick={props.handleClear}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;