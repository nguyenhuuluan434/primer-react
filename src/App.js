import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      primary: "bg-primary text-white text-center p-2 m-1",
      secondary: "bg-secondary text-white text-center p-2 m-1"
    }

  }
  isEven(val) {
    return val % 2 === 0 ? "Even" : "Odd";
  }

  getClassName(val) {
    return val % 2 === 0 ? this.state.primary : this.state.secondary;
  }
  componentDidMount = () => {
    this.setState({
      count:
        isNaN(localStorage.getItem("count")) ? 1: parseInt(localStorage.getItem("count"))
    })
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
    localStorage.setItem("count", this.state.count)
  }
  render = () =>
    <table className="table table-striped table=bordered table-sm">
      <thead className="bg-info text-white">
        <tr><th>Value</th><th>Even?</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.count}</td>
          <td>{this.isEven(this.state.count)} </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2" className="text-center">
            <button className="btn btn-info m-2" onClick={this.handleClick}>Click me</button>
          </td>
        </tr>
      </tfoot>
    </table>
}
