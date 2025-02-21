import React, { Component } from "react";

export default class Footer extends Component {
  BackToTop() {
    const pxShow = 900;
    const goTopButton = document.querySelector(".ss-go-top");

    if (!goTopButton) return;

    // Show or hide the button
    if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

    window.addEventListener("scroll", function () {
      if (window.scrollY >= pxShow) {
        if (!goTopButton.classList.contains("link-is-visible"))
          goTopButton.classList.add("link-is-visible");
      } else {
        goTopButton.classList.remove("link-is-visible");
      }
    });
  }

  componentDidMount() {
    this.BackToTop();
  }

  render() {
    return (
      <footer className="s-footer">
        <div className="row">
          <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
            <ul className="s-footer__social">
              <li>
                <a href="https://calendly.com/hussamahmed87/30min" alt>
                  <i className="fas fa-calendar-alt" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://wa.link/tqouja">
                  <i className="fab fa-whatsapp" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hosam96/">
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Habdeltawab">
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div className="column large-7 medium-6 w-1000-stack ss-copyright">
            <span>© Hosam Abdeltawab 2025</span>
          </div>
        </div>
        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" />
            </svg>
          </a>
        </div>
      </footer>
    );
  }
}
