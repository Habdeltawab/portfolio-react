import React, { Component } from 'react';

export default class Resume extends Component {
	render() {
		return (
			<div>
				<section id="cv" className="s-resume target-section">
					<div className="row s-resume__section">
						<div className="column large-3 tab-12">
							<h3 className="section-header-allcaps">Education</h3>
						</div>
						<div className="column large-9 tab-12">
							<div className="resume-block">
								<div className="resume-block__header">
									<h4 className="h3">Iowa State University</h4>
									<p className="resume-block__header-meta">
										<span>M.Eng. Degree Computer Engineering</span>
										<span className="resume-block__header-date">
											December 2021
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
									schools.com on the top{' '}
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
							{/* <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">StoneX Group Inc.</h4>
                  <p className="resume-block__header-meta">
                    <span>Senior Software Developer</span>
                    <span className="resume-block__header-date">
                      February 2022 - Present
                    </span>
                  </p>
                </div>
                <p>
                  StoneX (formerly known as INTL FCStone) is an
                  institutional-grade financial services network that connects
                  companies, organizations, traders and investors to the global
                  markets ecosystem through a unique blend of digital platforms,
                  end-to-end clearing and execution services, high-touch service
                  and deep expertise that provides institutional access to 39
                  derivatives exchanges, 175 foreign exchange markets
                </p>
              </div> */}
							<div className="resume-block">
								<div className="resume-block__header">
									<h4 className="h3">John Deere</h4>
									<p className="resume-block__header-meta">
										<span>Senior Software Developer</span>
										<span className="resume-block__header-date">
											February 2022 - Present
										</span>
									</p>
								</div>
								<p>
									At John Deere, I led a team in migrating our software
									architecture from React Context to Redux Toolkit,
									significantly improving state management and application
									performance. I design and develop full-stack solutions to
									support vendor material sourcing processes, leveraging AWS
									services like CloudWatch, Lambda, EC2, and S3 to optimize
									cloud-based solutions and infrastructure. My work includes
									building robust RESTful APIs and microservices with React,
									Java, and Spring Boot, driving innovation and efficiency in
									our applications.
								</p>
							</div>
							<div className="resume-block">
								<div className="resume-block__header">
									<h4 className="h3">Quality Consulting Inc. (QCI)</h4>
									<p className="resume-block__header-meta">
										<span>Senior Software Developer</span>
										<span className="resume-block__header-date">
											April 2019 - February 2022
										</span>
									</p>
								</div>
								<p>
									At Quality Consulting Inc., I developed backend infrastructure
									for monitoring and tracking John Deere tractors using ReactJS
									& .NET. I designed architectural blueprints for RESTful APIs
									to meet the complex needs of enterprise infrastructure for
									clients like Corteva. I also led the onboarding process for
									new software engineers, mentoring them on RESTful technologies
									and Agile methodologies, fostering a collaborative and
									productive engineering environment.
								</p>
							</div>
							<div className="resume-block">
								<div className="resume-block__header">
									<h4 className="h3">Iowa State University</h4>
									<p className="resume-block__header-meta">
										<span>Software Engineer Co-op</span>
										<span className="resume-block__header-date">
											August 2017 - December 2018
										</span>
									</p>
								</div>
								<p>
									During my time at Iowa State University, I developed the
									full-stack technology and security for the ISU Students
									AccessPlus portal. I enhanced student projects and assignments
									to foster engagement and involvement in the learning process.
									Additionally, I mentored students in software engineering,
									ensuring they comprehended and applied the concepts
									effectively.
								</p>
							</div>
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
									At Genova Technologies, I enhanced and validated controllers
									for John Deere trucks within an Agile environment. I engaged
									in client consultations to understand project requirements,
									provided application status updates, and addressed technical
									challenges. My work involved writing sustainable and scalable
									code using C/C++ and Java and managing continuous integration
									and deployment through Jenkins.
								</p>
							</div>
							<div className="resume-block">
								<div className="resume-block__header">
									<h4 className="h3">Three Commas LLC.</h4>
									<p className="resume-block__header-meta">
										<span>Consulting Full-Stack Engineer</span>
										<span className="resume-block__header-date">
											May 2015 - January 2017
										</span>
									</p>
								</div>
								<p>
									At Three Commas, LLC, I built modern applications using Azure,
									C#, ReactJS, SQL Server, and .NET. I supported the company’s
									development and testing processes and redesigned the CI/CD
									process with Azure from scratch, significantly speeding up
									loading and deployment times.
								</p>
							</div>
						</div>
					</div>
					<div className="row s-resume__section">
						<div className="column large-3 tab-12">
							<h3 className="section-header-allcaps">Skills</h3>
						</div>
						<div className="column large-9 tab-12">
							<div className="resume-block">
								<p>
									Below is a list of some of my most used skills in my current
									position. The complete list of my skills can be found in my{' '}
									<a href="resume/hosam_resume_2022.pdf" target="_blank">
										resume.
									</a>{' '}
									Please feel free to download it.
								</p>
								<ul className="skill-bars-fat">
									<li>
										<div className="progress percent100" />
										<strong>ReactJs</strong>
									</li>
                  <li>
										<div className="progress percent100" />
										<strong>Redux-Toolkit</strong>
									</li>
                  <li>
										<div className="progress percent100" />
										<strong>JavaScript</strong>
									</li>
                  <li>
										<div className="progress percent90" />
										<strong>TypeScript</strong>
									</li>
									<li>
										<div className="progress percent90" />
										<strong>Java</strong>
									</li>
									<li>
										<div className="progress percent80" />
										<strong>Python</strong>
									</li>
                  <li>
										<div className="progress percent80" />
										<strong>SpringBoot</strong>
									</li>
                  <li>
										<div className="progress percent80" />
										<strong>Amazon Web Services</strong>
									</li>
									<li>
										<div className="progress percent60" />
										<strong>Azure</strong>
									</li>
									
									<li>
										<div className="progress percent50" />
										<strong>Google Cloud Platform</strong>
									</li>
									<li>
										<div className="progress percent30" />
										<strong>GraphQL</strong>
									</li>
								</ul>
							</div>
							{/* end resume-block */}
						</div>
					</div>
					{/* s-resume__section */}
				</section>
				{/* end s-resume */}
			</div>
		);
	}
}
