import { useState } from 'react';
import { Collapse, Row, Col } from 'reactstrap';

const Nav = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className="App">
			<Collapse isOpen={isOpen}>
				<div className="bg-dark">
					<div className="container">
						<div className="row">
							<div className="col-sm-8 col-md-7 py-4">
								<h4 className="text-white">About</h4>
								<p className="text-muted">
									Read more about the creative minds behind YoRipe in this section.
									<li>
										<a href="https://yoripe.com/about/">About us</a>{' '}
									</li>
									<li>
										<a href="https://yoripe.com/faq/">FAQ</a>{' '}
									</li>
									<li>
										<a href="https://yoripe.com/yoripe-press-release/">Press Release</a>{' '}
									</li>
									P.S. Watch out for the launch of our new section, Eat like the Person you Want to
									be, inspired by Humans of New York soon!
								</p>
							</div>
							<div className="col-sm-4 offset-md-1 py-4">
								<h4 className="text-white">Contact Us</h4>
								<ul className="list-unstyled">
									<li>
										<a href="https://twitter.com/helloyoripe" className="text-white">
											Twitter
										</a>
									</li>
									<li>
										<a href="https://www.facebook.com/helloyoripe/" className="text-white">
											Facebook
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/helloyoripe/" className="text-white">
											Instagram
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Collapse>
			<div className="navbar navbar-dark bg-dark shadow-sm">
				<div className="container"><button className="navbar-toggler" type="button" onClick={toggle}>
						<span className="navbar-toggler-icon" />
					</button>
                    <div>Search</div>
                   
					<a href="/" className="navbar-brand d-flex align-items-center">
						{/* <svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							aria-hidden="true"
							className="me-2"
							viewBox="0 0 24 24"
						>
							<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
							<circle cx="12" cy="13" r="4" />
						</svg> */}
						<div>
							<p>
								<strong>zill</strong>
							</p>
						</div>
					</a>
					
				</div>
			</div>
		</div>
	);
};

export default Nav;
