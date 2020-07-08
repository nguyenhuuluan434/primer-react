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

  handleClick = () => this.setState({ count: this.state.count + 1 })
  render = () =>
    // <h4 className={this.getClassName(this.state.count)}>
    //   <button className="btn btn-info m-2" onClick={this.handleClick}>Click me </button>
    //   Number of things: {this.isEven(this.state.count)}
    // </h4>
    <div className="container-fluid p-4">
      <div className="row bg-info text-white p-2">
        <div className="col font-weight-bold" > Value</div>
        <div className="col-9 font-weight-bold" >Even?</div>
      </div>
      <div className="row bg-light p-2 border">
        <div className="col-3">{this.state.count}</div>
        <div className={this.getClassName(this.state.count)}>{this.isEven(this.state.count)}</div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-info m-2" onClick={this.handleClick}>
            Click me
          </button>
        </div>
      </div>
    </div>
}
