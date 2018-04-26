import React, {Component} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const TOTAL_SUPPLY = 125000000;

const numberWithCommas = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export default class DividendsCalculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			horses: '',
			dailyVolume: '',
			annualDividends: '',
			roi: ''
		}
	}

	horsesChange(event) {
		this.setState({horses: parseFloat(event || 0), annualDividends: parseFloat(event * this.state.dailyVolume * 18.25 / TOTAL_SUPPLY || 0)});
	}

	volumeChange(event, type) {
		let dividendsOneHorse = parseFloat((event * 18.25 / TOTAL_SUPPLY) || 0);
		this.setState({
			dailyVolume: parseFloat(event || 0),
			annualDividends: dividendsOneHorse * this.state.horses
		});
		if (type == "ETH") {
			this.setState({roi: dividendsOneHorse / parseFloat(this.props.horseEth)});
		} else {
			this.setState({roi: dividendsOneHorse / parseFloat(this.props.horseUsd)});
		}
	}


	render() {

		return (

			<div id="dividends-calculator" className="col-md-12">
				<Card raised="true" style={{'background-color': 'white'}}>
					<Typography variant="headline" component="h2" style={{'padding': '10px 10px 0px 10px'}}>
						{this.props.type} Dividends Calculator
					</Typography>
					<hr style={{'background-color': 'black', 'margin': '7px 15% 7px 15%'}} />
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
						Annual Dividends: <strong>{this.props.symbol} {numberWithCommas(parseFloat(this.state.annualDividends || 0).toFixed(6))}</strong>
					</Typography>
					<Typography style={{'font-size': '20px', 'padding': '10px 10px 10px 0px'}}>
						ROI: {parseFloat(this.state.roi || 0).toFixed(4)}
					</Typography>
				</Card>
			</div>
		);
	}

}