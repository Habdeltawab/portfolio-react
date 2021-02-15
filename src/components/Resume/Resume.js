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
                  At QCI, we work with multiple high-end clients to provide
                  software solutions for their infrastructure. We work as
                  dedicated developers to develop complete software systems that
                  allow our clients to manage and grow their organizations. We
                  learn to see technology as a means to an objective that will
                  benefit our clients best
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
                  Genova is a true software engineering company and brings
                  expertise in application design and development using
                  programming languages such as Java/J2EE, ASP.NET, C/C++, Ada,
                  Visual Basic, HTML and XML, and proficiency with Windows,
                  UNIX, and Linux servers, and embedded systems. At Genova, I
                  have interacted with many brilliant developers while working
                  together on the automation of tractors for one of the largest
                  agriculture companies in the States. Moreover, I learned a
                  great deal about embedded systems, C/C++ languages, and Web
                  Developing languages.
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
                  As a Teaching Assistant, I have learned and gained experience
                  in the Java development field. I constantly worked with
                  students on their projects on assignments mentoring them in
                  the field and making sure the information is well perceived
                  and understood. Moreover, I worked closely with department
                  professors on projects and assignment preparations and gained
                  the skills needed to hone my abilities that will aid me in my
                  future endeavors
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
                  Below is a list of some of my most used skills in my current position.
                  The complete list of my skills can be found in my{" "}
                  <a href="resume/Hosam-Resume.pdf">resume.</a> Please feel free
                  to download it.
                </p>
                <ul className="skill-bars-fat">
                  <li>
                    <div className="progress percent100" />
                    <strong>C#</strong>
                  </li>
                  <li>
                    <div className="progress percent100" />
                    <strong>Java</strong>
                  </li>
                  <li>
                    <div className="progress percent90" />
                    <strong>MVC</strong>
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
