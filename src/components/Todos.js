import React from "react";
import Todoitem from "./Todoitem";

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <Todoitem // ToDoitem
        key={todo.id}
        todo={todo}
        change={todo.completed}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
export default Todos;
