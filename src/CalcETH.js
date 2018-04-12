import React, {Component} from 'react';

export default class CalcEth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			horses: null,
			dailyVolume: null,
			annualDividends: 0
		}
	}
	
	render() {

		return (
			<div className="usd-modal">
				<h4>ETH Dividends Calculator</h4>
				<div className="horses-input">
					<input
						className="text-input"
						value={this.state.horses}
						onChange={event => this.setState({horses: event.target.value})} />
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
							onClick={() => this.setState({annualDividends: (this.state.dailyVolume * this.state.horses / 20 * 365 / 125000000)})}>
								Calculate
						</button>
					</div>
					<h3>Annual Dividends: {this.state.annualDividends} ETH</h3>
				</div>
			</div>
		);
	}

}