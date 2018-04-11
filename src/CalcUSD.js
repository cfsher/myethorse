import React, {Component} from 'react';

export default class Calc extends Component {
	constructor(props) {
		super(props);

		this.state = {
			horses: 0,
			dailyVolume: 0,
			annualDividends: 0
		}
	}
	
	render() {

		return (
			<div className="usd-modal">
				<div className="horses-input">
					<input
						className="horses-text-box"
						value={this.state.horses}
						onChange={event => this.setState({horses: event.target.value})} />
					<label className="label"># of Horses</label>
				</div>
				<div className="daily-volume-input">
					<input
						className="volume-text-box"
						value={this.state.dailyVolume}
						onChange={event => this.setState({dailyVolume: event.target.value})} />
					<label className="label">Daily Volume (USD)</label>
				</div>
				<div className="dividends-output">
					<div className="calc-button">
						<button 
							className="btn btn-default"
							onClick={() => this.setState({annualDividends: (this.state.dailyVolume * this.state.horses / 20 * 365 / 125000000)})}>
								Calculate
						</button>
					</div>
					<h2>Annual Dividends: {this.state.annualDividends} USD</h2>
				</div>
			</div>
		);
	}

}