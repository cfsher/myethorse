import React, { Component } from 'react';
//import css from './assets/css/index.css';


export default class Header extends Component {
	constructor(props) {
		super(props);

		this.fetchPrices();

		this.state = {
			ethPrice: 0,
			horseEthPrice: 0,
			horseUsdPrice: 0
		}
	}

	fetchPrices() {
		fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/')
			.then(response => response.json())
			.then(json => {
				this.setState({ethPrice: json[0].price_usd});
			});
		fetch('https://api.coinmarketcap.com/v1/ticker/ethorse/')
			.then(response => response.json())
			.then(json => {
				let tempPrice = json[0].price_usd;
				this.setState({
					horseEthPrice: tempPrice/this.state.ethPrice,
					horseUsdPrice: tempPrice
				});
			});
	}



	render() {
		return (
			<div id="header-container" className="row">
				<div className="header-modal">
					<h2 className="header-text">Ethorse Dividends Calculator</h2>
					<a className="logo" href="https://ethorse.com">
						<img src="https://chasing-coins.com/coin/logo/HORSE" alt="horse logo" />
					</a>
				</div>
				<div id="price-tracker">
					<ul style={{color: 'white'}}>
						<li>HORSE USD Price: {this.state.horseUsdPrice}</li>
						<li>HORSE ETH Price: {this.state.horseEthPrice}</li>
					</ul>
				</div>
			</div>
		)

	}

}