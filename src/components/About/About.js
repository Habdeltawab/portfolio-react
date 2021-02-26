import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="s-about target-section">
          <div className="row">
            <div className="column large-3 tab-12">
              <img className="hosam-image" src="images/avatars/hosam-2.jpg" alt="" />
            </div>
            <div className="column large-9 tab-12 s-about__content">
              <h3>About Me</h3>
              <p className="about-me-text">
                I came from Cairo, Egypt to the States to get my degree in
                Software Engineering. After I received my degree, I went to work
                Full-time for{" "}
                <a href="https://qci.com/">Quality Consulting Inc. (QCI)</a> as
                a Software Developer whilst studying to get my Master's Degree.
                I am a Developer, a gym enthusiast, and a Grad Student in the Computer Engineering
                department at{" "}
                <a href="https://www.iastate.edu/">Iowa State University</a>.
              </p>
              <hr />
              <div className="row s-about__content-bottom">
                <div className="column w-1000-stack">
                  <h3>Contact Details</h3>
                  <p>
                    Hosam Abdeltawab <br />
                    4300 Westown Pkwy, Unit 150 <br />
                    West Des Moines, IA 50266, United States <br />
                    <a href="tel:+15157087127">+1 515-708-7127</a> <br />
                    <a href="mailto:hosama@iastate.edu">hosama@iastate.edu</a>
                  </p>
                </div>
                <div className="column w-1000-stack">
                  <a href="resume/Hosam-resume-2.pdf" className="btn btn--download">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(0, 0, 0, 1)",
                        transform: "",
                        msFilter: "",
                      }}
                    >
                      <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                      <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </section>{" "}
        {/* end s-about */}
      </div>
    );
  }
}
