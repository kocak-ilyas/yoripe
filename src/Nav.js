import { useState } from 'react';
import { Collapse } from 'reactstrap';
import menuIcon from './menuIcon.svg';
import './navStyles.css';

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
			<div className="navbar shadow-sm">
				<div className="container">
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<div className="btn mr-1 p-1" type="button" onClick={toggle}>
								<img src={menuIcon} height="20px" alt="menuIcon" />
							</div>
						</div>
						<label>
							<input
								className="form-control rounded"
								type="search"
								placeholder="Search Products"
								aria-label="Search"
							/>
						</label>

						{/* <label>
							<input
								className="form-label rounded nav-input"
								type="search"
								placeholder="Search Products"
								aria-label="Search"
							/>
						</label> */}
					</div>
					<a href="/" className="navbar-brand d-flex align-items-center">
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
