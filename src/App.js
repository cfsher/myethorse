import React, {Component} from 'react';
import DividendsCalculator from './DividendsCalculator';
import BettingHelper from './BettingHelper';
import Header from './Header';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import BottomNavigation from 'material-ui/BottomNavigation';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import css from './assets/css/index.css';


class App extends Component {

  constructor(props) {
    super(props);

    fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/')
      .then(response => response.json())
      .then(json => this.setState({eth_usd: parseFloat(json[0].price_usd)}));

    this.state = {
      horseUsd: 0,
      horseEth: 0
    }
    this.fetchPrices();
  }

  componentDidMount() {
    this.fetchPrices();
  }

  fetchPrices() {
    fetch('https://api.coinmarketcap.com/v1/ticker/ethorse/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          horseUsd: json[0].price_usd,
          horseEth: json[0].price_usd/this.state.eth_usd
        });
      });
  };


  render() {

    return (

      <div className="text-center responsive">
        <Header />
        <br />
        <div className="row">
          <div className="col-md-6">
            <DividendsCalculator symbol="Ξ"type="ETH" horseUsd={this.state.horseUsd} horseEth={this.state.horseEth} />
            <br /><br />
            <DividendsCalculator symbol="$" type="USD" horseUsd={this.state.horseUsd} horseEth={this.state.horseEth} />
            <br /><br />
          </div>
            <BettingHelper className="col-md-6" />
        </div>
        <br /><br /><br /><br />
        <BottomNavigation id="bottom-navigation">
          <a href="https://bet.ethorse.com"><span className="text-left" style={{'color': 'white', 'font-size': '16px'}}>Check out the Ethorse dapp today!</span></a>
          <span style={{'margin-left': '50%', 'color': 'black'}}>ROI is based on latest data from coinmarketcap.com</span>
        </BottomNavigation>
      </div>

    );
  }
}
export default App;