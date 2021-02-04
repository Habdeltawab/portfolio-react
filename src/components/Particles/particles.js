import React, { Component } from "react";
import Particles from "react-particles-js";

export default class particles extends Component {
  render() {
    return (
      <div className="h-particles">
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
    );
  }
}
