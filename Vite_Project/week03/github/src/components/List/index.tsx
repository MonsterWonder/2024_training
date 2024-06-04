import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <div className="card">
          <a rel="noreferrer" href="http://github.com/reactjs" target="_blank">
            <img
              src="https://p.qqan.com/up/2020-9/16010876389657332.jpg"
              alt="avatars"
              style={{ width: "100px" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
      </div>
    );
  }
}
