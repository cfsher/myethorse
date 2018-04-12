import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="header-container" className="container-full">
				<div className="header-modal">
					<h2 className="header-text">Ethorse Dividends Calculator</h2>
					<a className="logo" href="https://ethorse.com">
						<img src="https://chasing-coins.com/coin/logo/HORSE" alt="horse logo" />
					</a>
				</div>
			</div>
		)

	}

}