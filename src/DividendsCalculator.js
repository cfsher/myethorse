import React, {Component} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const TOTAL_SUPPLY = 125000000;

export default class DividendsCalculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			horses: '',
			dailyVolume: '',
			annualDividends: 0,
		}
	}

	horsesChange(event) {
		this.setState({horses: event, annualDividends: event * this.state.dailyVolume * 18.25 / TOTAL_SUPPLY});
	}

	volumeChange(event, type) {
		this.props.onTextChange();
		let temp = event * 18.25 / TOTAL_SUPPLY;
		this.setState({
			dailyVolume: event,
			annualDividends: event * this.state.horses * 18.25 / TOTAL_SUPPLY
		});
		if (type == "ETH") {
			this.setState({roi: temp / this.props.horseEth});
		} else {
			this.setState({roi: temp / this.props.horseUsd});
		}
	}


	render() {

		return (

			<div id="dividends-calculator" className="col-md-12">
				<Card raised="true" style={{'background-color': 'white'}}>
					<Typography variant="headline" component="h2" style={{'padding': '10px 10px 0px 10px'}}>
						{this.props.type} Dividends Calculator
					</Typography>
					<hr style={{'background-color': 'black', 'margin': '7px 80px 7px 80px'}} />
					<div className="calc-input">
						<TextField
							style={{'margin-top': '10px', 'font-size': '100%'}}
							placeholder="# of HORSE"
							onChange={event => this.horsesChange(event.target.value)} />
						<br />
						<TextField
							style={{'margin-top': '10px', 'font-size': '100%'}}
							placeholder="Daily Volume"
							onChange={event => this.volumeChange(event.target.value, this.props.type)} />
					</div>
					<br />
					<Typography style={{'font-size': '18px', 'padding': '10px 10px 10px 0px'}}>
						Annual Dividends: <strong>{this.props.symbol} {this.state.annualDividends}</strong>
					</Typography>
					<Typography style={{'font-size': '20px', 'padding': '10px 10px 10px 0px'}}>
						ROI: {parseFloat(this.state.roi).toFixed(4)}
					</Typography>
				</Card>
			</div>
		);
	}

}