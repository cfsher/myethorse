import React, {Component} from 'react';
//import css from './assets/css/index.css';
const axios = require('axios');


export default class CalcEth extends Component {
	constructor(props) {
		super(props);

		this.fetchPrices = this.fetchPrices.bind(this);

		this.state = {
			horses: null,
			dailyVolume: null,
			annualDividends: 0,
			ethPrice: 0,
			horseEthPrice: 0,
			horseUsdPrice: 0,
			roi: 0
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
			<div className="usd-modal">
				<h4>ETH Dividends Calculator</h4>
				<div className="horses-input">
					<input
						className="text-input"
						value={this.state.horses}
						onChange={event => {this.setState({horses: event.target.value})} } />
					<label className="label"># of Horses</label>
				</div>
				<div className="daily-volume-input">
					<input
						className="text-input"
						value={this.state.dailyVolume}
						onChange={event => this.setState({dailyVolume: event.target.value})} />
					<label className="label">Daily Volume (ETH)</label>
				</div>
				<div className="dividends-output">
					<div className="calc-button">
						<button 
							className="btn btn-default"
							onClick={() => {
								this.setState({annualDividends: (this.state.dailyVolume * this.state.horses / 20 * 365 / 125000000)});
								//this.setState({roi: (this.state.dailyVolume * 18.25 / 125000000 / this.state.horseEthPrice)});
								this.fetchPrices();
								this.setState({roi: (this.state.dailyVolume * 18.25 / 125000000 / this.state.horseEthPrice)});
							}}>
							Calculate
						</button>
					</div>
					<h3>Annual Dividends: Ξ{this.state.annualDividends}</h3>
					<div id="price-roi">
						<h4>ROI: {this.state.roi}</h4>
						<p style={{color: 'black'}}>ROI calculated using most recent HORSE/ETH ratio.</p>
					</div>
				</div>
			</div>
		);
	}

}