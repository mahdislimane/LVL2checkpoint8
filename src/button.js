import React, { Component } from "react";
export default class NewButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mahdi",
      source: "./mahdi.jpg",
      description: "Mahdi Slimane Gérant principal chez IRON GYM sousse"
    };
  }
  render(props) {
    return (
      <div className="container-fluid row" style={{ textAlign: "center" }}>
        <div className="col-lg-4 col-sm-3 col-0"></div>
        <div className="col-lg-4 col-sm-6 col-12">
          {this.props.profile.map((x, i) => (
            <button
              onClick={() => {
                this.setState((state, props) => ({ name: x.name }));
                this.setState((state, props) => ({ source: x.source }));
                this.setState((state, props) => ({
                  description: x.description
                }));
              }}
            >
              {x.name}
            </button>
          ))}
        </div>
        <div className="col-lg-4 col-sm-3 col-0"></div>
        <div className="col-lg-4 col-sm-3 col-0"></div>
        <div
          className="col-lg-4 col-sm-6 col-12"
          style={{ textAlign: "center" }}
        >
          <h1>{this.state.name}</h1>
          <img style={{ height: 400 }} src={this.state.source} alt="" />
          <p className="col-12">{this.state.description}</p>
        </div>
        <div className="col-lg-4 col-sm-3 col-0"></div>
      </div>
    );
  }
}
