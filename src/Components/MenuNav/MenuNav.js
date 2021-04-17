import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import menuIcon from '../../image/menuIcon.svg';
import './styles.css';
//
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
			//   display: 'none',
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	},
	sectionDesktop: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	}
}));
//

const MenuNav = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
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
			<div className="navbar">
				<div className="container m-0 p-0">
					<div className="input-group mb-1 p-1">
						<div className="input-group-prepend">
							<div className="btn mr-1 p-1" type="button" onClick={toggle}>
								<img src={menuIcon} height="20px" alt="menuIcon" />
							</div>
						</div>
						<label className="col">
							<input
								aria-live="polite"
								className="form-control rounded pl-5"
								type="search"
								placeholder="Search Products"
								aria-label="Search"
							/>
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

export default MenuNav;
