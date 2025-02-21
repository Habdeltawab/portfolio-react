import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div>
				<section id="about" className="s-about target-section">
					<div className="row">
						<div className="column large-3 tab-12">
							<img
								className="hosam-image"
								src="images/avatars/hosam-2.jpg"
								alt=""
							/>
						</div>
						<div className="column large-9 tab-12 s-about__content">
							<h3>About Me</h3>
							<p className="about-me-text">
								I’m a developer passionate about crafting accessible,
								pixel-perfect user interfaces that blend thoughtful design with
								robust engineering. My favorite work lies at the intersection of
								design and development, creating experiences that not only look
								great but are meticulously built for performance and usability.
							</p>
							<p className="about-me-text">
								Currently, I'm a Senior Software Engineer at{' '}
								<a href="https://www.deere.com/">John Deere</a>, where I lead a
								team in developing innovative solutions for the agricultural and
								construction industries. A significant achievement in my role
								has been migrating our software architecture from React Context
								to Redux Toolkit, which has greatly improved state management
								and application performance.
							</p>
							<p className="about-me-text">
								Throughout my career, I've had the opportunity to work in
								various settings, from large corporations to dynamic start-ups.
								Each experience has taught me to adapt and thrive in different
								team environments and project scopes.
							</p>
							<p className="about-me-text">
								I'm proficient in technologies like <span style={{color:'#4DCDD3'}}>React, Redux, JavaScript, and
								TypeScript</span>, and I have a solid grasp of backend
								development with <span style={{color:'#4DCDD3'}}>Node.js, Express, and RESTful APIs</span>.
								Additionally, I've worked extensively with cloud services such
								as <span style={{color:'#4DCDD3'}}>AWS, Azure, and GCP</span> to optimize cloud-based solutions and
								infrastructure.
							</p>
							<p className="about-me-text">
								I'm excited about the future of front-end development and the
								impact we can make together. Let's connect and create something
								amazing!
							</p>

							<hr />
							<div className="row s-about__content-bottom">
								<div className="column w-1000-stack">
									<h3>Contact Details</h3>
									<p>
										Hosam Abdeltawab <br />
										1075 Jordan Creek Pkwy, Unit 300 <br />
										West Des Moines, IA 50266, United States <br />
										<a href="tel:+15157087127">+1 515-708-7127</a> <br />
										<a href="mailto:hussamahmed87@gmail.com">
											hussamahmed87@gmail.com
										</a>
									</p>
								</div>
								<div className="column w-1000-stack">
									<a
										href="resume/Hosam_2025_Resume.pdf"
										target="_blank"
										className="btn btn--download">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											style={{
												fill: 'rgba(0, 0, 0, 1)',
												transform: '',
												msFilter: '',
											}}>
											<path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
											<path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
										</svg>
										Download Resume
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
