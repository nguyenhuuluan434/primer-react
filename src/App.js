import React, { Component } from 'react';

export default class App extends Component {
  render = () =>
    <div className="m-2">
      <div className="form-group row">
        <div className="col-3">
          <label>Name:</label></div>
        <div className="col-9"><input className="form-control"></input>
          </div>
      </div>
      <div className="form-group row">
        <div className="col-3">
          <label>City:</label></div>
        <div className="col-9"><input className="form-control"></input>
        </div>
      </div>
    </div>
}
