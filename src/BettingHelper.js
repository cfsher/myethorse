import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';


export default class BettingHelper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			btc_pool: 0,
			eth_pool: 0,
			ltc_pool: 0,
			total: 0,
			new_btc: 0,
			new_eth: 0,
			new_ltc: 0
		};
	}

	oddsCalc(one, two, three, base) {
		let sum = parseFloat(one) + parseFloat(two) +parseFloat(three);
		if (base == 0) {
			return this.oddsCalc(one, two, three, .01);
		}
		return (sum / parseFloat(base)).toFixed(2);
	}

	render() {

		return (
			<div id="betting-helper" className="col-md-6">
				<Card raised="true" style={{'background-color': 'white', 'padding-bottom': '20px'}}>
					<Typography variant="headline" component="h2" style={{'padding': '10px 10px 0px 10px'}}>
						Betting Helper
					</Typography>
					<hr style={{'background-color': 'black', 'margin': '7px 80px 20px 80px'}} />
					<span style={{'font-size': '18px'}}>Enter current bets:</span>
					<br /><br />
					<TextField
							style={{'margin-top': '10px'}}
							margin="normal"
							placeholder="BTC Pool"
							onChange={event => this.setState({btc_pool: event.target.value}) } />
					<span style={{'padding-left': '30px'}}>Odds: {this.oddsCalc(this.state.btc_pool, this.state.eth_pool, this.state.ltc_pool, this.state.btc_pool)}</span>
					<br />
					<TextField
							style={{'margin-top': '10px'}}
							margin="normal"
							placeholder="ETH Pool"
							onChange={event => this.setState({eth_pool: event.target.value}) } />
					<span style={{'padding-left': '30px'}}>Odds: {this.oddsCalc(this.state.btc_pool, this.state.eth_pool, this.state.ltc_pool, this.state.eth_pool)}</span>
					<br />
					<TextField
							style={{'margin-top': '10px'}}
							margin="normal"
							placeholder="LTC Pool"
							onChange={event => this.setState({ltc_pool: event.target.value}) } />
					<span style={{'padding-left': '30px'}}>Odds: {this.oddsCalc(this.state.btc_pool, this.state.eth_pool, this.state.ltc_pool, this.state.ltc_pool)}</span>
					<br /><br /><br />
					<span style={{'font-size': '18px'}}>Enter proposed bet:</span>
					<br /><br />
					<TextField
							style={{'margin': '10px 0px 0px 10px'}}
							type="number"
							margin="normal"
							placeholder="BTC"
							onChange={event => this.setState({new_btc: event.target.value})} />
					<TextField
							style={{'margin': '10px 0px 0px 10px'}}
							type="number"
							margin="normal"
							placeholder="ETH"
							onChange={event => this.setState({new_eth: event.target.value})} />
					<TextField
							style={{'margin': '10px 0px 0px 10px'}}
							type="number"
							margin="normal"
							placeholder="LTC"
							onChange={event => this.setState({new_ltc: event.target.value})} />
					<br /><br />
					<Button
							variant="raised"
							color="primary"
							onClick={() => this.setState({
								btc_pool: parseFloat(this.state.btc_pool) + parseFloat(this.state.new_btc),
								eth_pool: parseFloat(this.state.eth_pool) + parseFloat(this.state.new_eth),
								ltc_pool: parseFloat(this.state.ltc_pool) + parseFloat(this.state.new_ltc)
							})}>
							Place Bet
					</Button>
					<br /><br /><br /><br />
					<span style={{'font-size': '18px'}}>New odds:</span>
					<br /><br />
					<span style={{}}>BTC: {this.oddsCalc(this.state.btc_pool, this.state.eth_pool, this.state.ltc_pool, this.state.btc_pool)}</span>
					<br />
					<span style={{}}>ETH: {this.oddsCalc(this.state.btc_pool, this.state.eth_pool, this.state.ltc_pool, this.state.eth_pool)}</span>
					<br />
					<span style={{}}>LTC: {this.oddsCalc(this.state.btc_pool, this.state.eth_pool, this.state.ltc_pool, this.state.ltc_pool)}</span>
					<br />
				</Card>
			</div>
		)
	}

}