import React, {Component} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const request = require('request');
const TOTAL_SUPPLY = 125000000;

export default class DividendsCalculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			horses: '',
			dailyVolume: '',
			type: this.props.type,
			symbol: this.props.symbol,
			annualDividends: '',
			ethPrice: 0,
			horseEthPrice: 0,
			horseUsdPrice: 0,
			roi: 0
		}
	}

	componentDidMount() {
		fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/')
			.then(response => response.json())
			.then(json => {
				this.setState({ethPrice: json[0].price_usd});
			});
		this.fetchPrices()
	}

	fetchPrices() {
		fetch('https://api.coinmarketcap.com/v1/ticker/ethorse/')
			.then(response => response.json())
			.then(json => {
				this.setState({
					horseUsdPrice: json[0].price_usd,
					horseEthPrice: json[0].price_usd/this.state.ethPrice
				});
			});
	}

	onButtonClick(input, horses) {
		let temp = this.state.dailyVolume * 18.25 / TOTAL_SUPPLY;
		let div = temp * horses;
		console.log(temp);
		this.setState({annualDividends: div});
		if (input == 'ETH') {
			this.setState({roi: temp/this.state.horseEthPrice});
		} else {
			this.setState({roi: temp/this.state.horseUsdPrice});
		}
	}

	render() {

		return (

			<div>
				<Card raised="true" style={{'background-color': 'white'}}>
					<div id="dividends-calculator">
						<Typography variant="headline" component="h2" style={{'padding': '10px 10px 10px 10px'}}>
							{this.state.type} Dividends Calculator
						</Typography>
						<div className="calc-input">
							<TextField
								style={{'margin-top': '10px', 'margin-left': '20px', 'font-size': '100%'}}
								placeholder="# of HORSE"
								onChange={event => this.setState({horses: event.target.value})} />
							<br />
							<TextField
								style={{'margin-top': '10px', 'margin-left': '20px', 'font-size': '100%'}}
								placeholder="Daily Volume"
								onChange={event => this.setState({dailyVolume: event.target.value})} />
						</div>
						<br />
						<Button
							style={{'margin-top': '10px', 'margin-left': '20px', 'margin-bottom': '20px', 'font-size': '100%'}}
							color="primary"
							variant="raised"
							onClick={() => this.onButtonClick(this.state.type, this.state.horses)}>
							Calculate
						</Button>
						<br />
						<br />
						<Typography style={{'font-size': '18px', 'padding': '10px 10px 10px 0px'}}>
							Annual Dividends: <strong>{this.state.symbol} {this.state.annualDividends}</strong>
						</Typography>
						<Typography style={{'font-size': '20px', 'padding': '10px 10px 10px 0px'}}>
							ROI: {this.state.roi}
						</Typography>
					</div>
				</Card>
			</div>
		);
	}

}