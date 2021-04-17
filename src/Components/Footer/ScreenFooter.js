import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import homeOutline from '../../image/homeOutline.svg';
import compass from '../../image/compass.svg';
import cartOutline from '../../image/cartOutline.svg';
import message from '../../image/message.svg';
import signIcon from '../../image/signIcon.svg';

const useStyles = makeStyles(() => ({
	appBar: {
		top: 'auto',
		bottom: 0
	},
	outlinedIcon: {
		backgroundColor: 'error'
	},
	grow: {
		flexGrow: 1
	}
}));

const ScreenFooter = () => {
	const classes = useStyles();

	return (
		<AppBar position="fixed" color="light" className={classes.appBar}>
			<Toolbar className="container navbar p-2">
				<button className="btn p-1">
					<img src={homeOutline} alt="homeOutline" />
				</button>
				<button className="btn p-1">
					<img src={compass} alt="compass" />
				</button>
				<button className="btn p-1">
					<img src={cartOutline} alt="cartOutline" />
				</button>
				<button className="btn p-1">
					<img src={message} alt="message" />
				</button>
				<button className="btn p-1">
					<img src={signIcon} alt="signIcon" />
				</button>
			</Toolbar>
		</AppBar>
	);
};
export default ScreenFooter;
