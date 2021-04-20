import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';

import menuIcon from '../../image/menuIcon.svg';
import './styles.css';
import SearchInput from './SearchInput';

const SearchNav = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className="m-0 p-0">
			{isOpen && (
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
			)}
			<div className="navbar">
				<div className="container m-0 p-0">
					<div className="input-group mb-1 p-1">
						<div className="input-group-prepend">
							<div className="btn mr-1 p-1" type="button" onClick={toggle}>
								<img src={menuIcon} height="20px" alt="menuIcon" />
							</div>
						</div>
						<label className="col pr-1">
							<SearchInput />
						</label>
						<IconButton className="m-0" aria-label="show 2 new notifications" color="inherit">
							<Badge badgeContent={2} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SearchNav;
