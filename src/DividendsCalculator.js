import React, {Component} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export default class DividendsCalculator extends Component {
	constructor(props) {
		super(props);

		this.fetchPrices = this.fetchPrices.bind(this);

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
				let tempPrice2 = tempPrice/this.state.ethPrice;
				this.setState({
					horseEthPrice: tempPrice2,
					horseUsdPrice: tempPrice
				});
			});
	}

	onButtonClick(input, horses) {
		this.fetchPrices();
		let tempVar = 18.25 * this.state.dailyVolume / 125000000;
		let dividends = horses * tempVar;
		if (input == "ETH") {
			let tempVar2 = tempVar / this.state.horseEthPrice;
			this.setState({roi: tempVar2, annualDividends: dividends});
		} else {
			let tempVar2 = tempVar / this.state.horseUsdPrice
			this.setState({roi: tempVar2, annualDividends: dividends});
		}
	}

	render() {

		const TOTAL_SUPPLY = 125000000;

		return (

			<div>
				<Card raised="true" style={{'background-color': '#E0E0E0'}}>
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
						<Typography style={{'font-size': '20px', 'padding': '10px 10px 10px 10px'}}>
							Annual Dividends: <strong>{this.state.symbol} {this.state.annualDividends}</strong>
						</Typography>
						<Typography style={{'font-size': '20px', 'padding': '10px 10px 10px 10px'}}>
							ROI: {this.state.roi}
						</Typography>
					</div>
				</Card>
			</div>
		);
	}

}