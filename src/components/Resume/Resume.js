import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <section id="resume" className="s-resume target-section">
          {/* s-resume__section */}
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Education</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Iowa State University</h4>
                  <p className="resume-block__header-meta">
                    <span>Master's in Computer Engineering</span>
                    <span className="resume-block__header-date">
                      November 2021
                    </span>
                  </p>
                </div>
                <p>
                  In getting my Master's in Computer Engineering, I demonstrated
                  a sustained learning and adapting to a constantly changing
                  field through graduate work, professional development, and
                  self study as well as indicated a commitment to teamwork while
                  working with others of diverse cultural and interdisciplinary
                  backgrounds.
                </p>
                <p>
                  Moreover, I have applied the gained expertise in my studies to
                  contemporary problem solving, being engaged professionally,
                  having continued to learn and adapt, and having contributed
                  through leadership and teamwork while working with others of
                  diverse cultural and interdisciplinary backgrounds
                </p>
              </div>
              {/* end resume-block */}
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Iowa State University</h4>
                  <p className="resume-block__header-meta">
                    <span>B.Sc. Degree in Software Engineering</span>
                    <span className="resume-block__header-date">
                      December 2018
                    </span>
                  </p>
                </div>
                <p>
                  In getting my B.Sc. in Software Engineering, I interacted with
                  a diverse faculty and student body gaining expertise in
                  computer science, engineering, and math that prepared me to
                  design, develop, and evaluate software, configure and install
                  computer systems, and build and maintain software systems
                  throughout their life cycles.
                </p>
                <p>
                  Iowa State University’s Software Engineering bachelor’s degree
                  program was ranked sixth in the nation in 2018 by College
                  Choice, and In the summer of 2018 Iowa State University’s
                  Software Engineering Program was ranked second from
                  schools.com on the top{" "}
                  <a href="https://www.schools.com/programs/software-engineering">
                    10 best colleges for software engineering degree programs in
                    the U.S..
                  </a>
                </p>
              </div>
              {/* end resume-block */}
            </div>
          </div>
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Career</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Quality Consulting Inc. (QCI)</h4>
                  <p className="resume-block__header-meta">
                    <span>Software Developer</span>
                    <span className="resume-block__header-date">
                      April 2019 - Present
                    </span>
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore vero quidem nobis maxime dolorem aliquam quisquam
                  eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus
                  fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto
                  dicta inventore tempora ratione quia odio.
                </p>
              </div>{" "}
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Genova Technologies</h4>
                  <p className="resume-block__header-meta">
                    <span>Software Developer</span>
                    <span className="resume-block__header-date">
                      May 2017 - August 2017
                    </span>
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore vero quidem nobis maxime dolorem aliquam quisquam
                  eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus
                  fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto
                  dicta inventore tempora ratione quia odio.
                </p>
              </div>{" "}
              {/* end resume-block */}
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Iowa State University</h4>
                  <p className="resume-block__header-meta">
                    <span>Java Teaching Assistant</span>
                    <span className="resume-block__header-date">
                      January 2016 - December 2018
                    </span>
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore vero quidem nobis maxime dolorem aliquam quisquam
                  eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus
                  fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto
                  dicta inventore tempora ratione quia odio.
                </p>
              </div>{" "}
              {/* end resume-block */}
            </div>
          </div>{" "}
          {/* s-resume__section */}
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore vero quidem nobis maxime dolorem aliquam quisquam
                  eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus
                  fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto
                  dicta inventore tempora ratione quia odio.
                </p>
                <ul className="skill-bars-fat">
                  <li>
                    <div className="progress percent90" />
                    <strong>MVC</strong>
                  </li>
                  <li>
                    <div className="progress percent90" />
                    <strong>Java</strong>
                  </li>
                  <li>
                    <div className="progress percent90" />
                    <strong>Azure</strong>
                  </li>
                  <li>
                    <div className="progress percent70" />
                    <strong>Amazon Web Services</strong>
                  </li>
                  <li>
                    <div className="progress percent50" />
                    <strong>Google Cloud Platform</strong>
                  </li>
                  <li>
                    <div className="progress percent70" />
                    <strong>ReactJS</strong>
                  </li>
                  <li>
                    <div className="progress percent70" />
                    <strong>GraphQL</strong>
                  </li>
                </ul>
              </div>{" "}
              {/* end resume-block */}
            </div>
          </div>{" "}
          {/* s-resume__section */}
        </section>{" "}
        {/* end s-resume */}
      </div>
    );
  }
}
