import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
//import css from './assets/css/index.css';


export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 1
		}
	}

	render() {
		return (
			<div id="header-container">
				<AppBar position="static" color="primary">
					<Toolbar>
						<div>
							<a className="logo" href="#">
								<img src="https://chasing-coins.com/coin/logo/HORSE" width="100" height="100" alt="horse logo" />
							</a>
						</div>
							<Typography variant="title" color="inherit">
								Ethorse
							</Typography>
						<Tabs>

						</Tabs>
					</Toolbar>
				</AppBar>
			</div>
		)

	}

}