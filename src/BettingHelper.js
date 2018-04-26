import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';


export default class BettingHelper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			btc_pool: '',
			eth_pool: '',
			ltc_pool: '',
			new_btc: '',
			new_eth: '',
			new_ltc: '',
		};
	}

	oddsCalc(base) {
		let total_pot = (parseFloat(this.state.btc_pool || 0) + parseFloat(this.state.eth_pool || 0) + parseFloat(this.state.ltc_pool || 0)) * .950;
		if (base == 0) {
			return this.oddsCalc(.01);
		}
		return (total_pot / parseFloat(base)).toFixed(2);
	}

	placeBet() {
		this.setState({
			btc_pool: parseFloat(this.state.new_btc || 0) + parseFloat(this.state.btc_pool || 0),
			eth_pool: parseFloat(this.state.new_eth || 0) + parseFloat(this.state.eth_pool || 0),
			ltc_pool: parseFloat(this.state.new_ltc || 0) + parseFloat(this.state.ltc_pool || 0),
			new_btc: '',
			new_eth: '',
			new_ltc: ''
		});
	}

	clearBets() {
		this.setState({
			btc_pool: '',
			eth_pool: '',
			ltc_pool: ''
		});
	}

	render() {

		return (
			<div id="betting-helper" className="col-md-6">
				<Card raised="true" style={{'background-color': 'white', 'padding-bottom': '20px'}}>
					<Typography variant="headline" component="h2" style={{'padding': '10px 10px 0px 10px'}}>
						Betting Helper
					</Typography>
					<hr style={{'background-color': 'black', 'margin': '7px 80px 20px 80px'}} />
					<span style={{'font-size': '18px'}}>Current bets:</span>
					<br />
					<TextField
							style={{'margin-top': '10px'}}
							margin="normal"
							placeholder="Coin 1"
							value={this.state.btc_pool}
							onChange={event => this.setState({btc_pool: event.target.value}) } />
					<br />
					<TextField
							style={{'margin-top': '10px'}}
							margin="normal"
							placeholder="Coin 2"
							value={this.state.eth_pool}
							onChange={event => this.setState({eth_pool: event.target.value}) } />
					<br />
					<TextField
							style={{'margin-top': '10px'}}
							margin="normal"
							placeholder="Coin 3"
							value={this.state.ltc_pool}
							onChange={event => this.setState({ltc_pool: event.target.value}) } />
					<br /><br /><br />
					<span style={{'font-size': '18px'}}>Enter proposed bet:</span>
					<br />
					<TextField
							style={{'margin': '10px 0px 0px 10px'}}
							margin="normal"
							value={this.state.new_btc}
							placeholder="Coin 1"
							onChange={event => this.setState({new_btc: event.target.value})} />
					<TextField
							style={{'margin': '10px 0px 0px 10px'}}
							margin="normal"
							value={this.state.new_eth}
							placeholder="Coin 2"
							onChange={event => this.setState({new_eth: event.target.value}) } />
					<TextField
							style={{'margin': '10px 0px 0px 10px'}}
							margin="normal"
							value={this.state.new_ltc}
							placeholder="Coin 3"
							onChange={event => this.setState({new_ltc: event.target.value})} />
					<br /><br />
					<Button
							variant="raised"
							color="primary"
							style={{'margin': '10px 10px 10px 10px'}}
							onClick={() => this.placeBet()}>
							Place Bet
					</Button>
					<Button
							variant="raised"
							color="primary"
							style={{'margin': '10px 10px 10px 10px'}}
							onClick={() => this.clearBets()}>
							Clear bets
					</Button>
					<br /><br /><br />
					<span style={{'font-size': '18px'}}>Odds:</span>
					<br /><br />
					<span style={{}}>Coin 1: &emsp;{this.oddsCalc(this.state.btc_pool)}</span>
					<br />
					<span style={{}}>Coin 2: &emsp;{this.oddsCalc(this.state.eth_pool)}</span>
					<br />
					<span style={{}}>Coin 3: &emsp;{this.oddsCalc(this.state.ltc_pool)}</span>
					<br />
				</Card>
			</div>
		)
	}

}