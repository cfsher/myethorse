import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="header">
				<div className="header-modal">
					<h2 className="title">Ethorse Dividends Calculator</h2>
					<a href="https://ethorse.com">
						<img className="logo" src="https://raw.githubusercontent.com/ethorse/Betting/ui-update.2/src/assets/horseLogo.png" alt="horse logo" />
					</a>
				</div>
			</div>

			)

	}

}