import React, { Component } from "react";

export default class Preloader extends Component {
  ssPreloader() {
    const preloader = document.querySelector("#preloader");
    if (!preloader) return;

    window.addEventListener("load", function () {
      document.querySelector("body").classList.remove("ss-preload");
      document.querySelector("body").classList.add("ss-loaded");

      preloader.addEventListener("transitionend", function (e) {
        if (e.target.matches("#preloader")) {
          this.style.display = "none";
        }
      });
    });
  }

  componentDidMount() {
    this.ssPreloader();
  }

  render() {
    return (
      <div id="preloader">
        <div id="loader">
        </div>
      </div>
    );
  }
}
