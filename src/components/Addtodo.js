import React from "react";

class Addtodo extends React.Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    console.log("onSubmit is running");
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px", margin: "10px" }}
          placeholder="Add Todo Item"
          value={this.state.title}
          onChange={this.onChange}
        ></input>
        <input
          type="submit"
          name="submit"
          className="btn"
          style={{ flex: "1", margin: "10px" }}
        />
      </form>
    );
  }
}

export default Addtodo;
