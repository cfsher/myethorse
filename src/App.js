import React, {Component} from 'react';
import DividendsCalculator from './DividendsCalculator';
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

    this.state = {
      ethUsd: 720,
      horseUsd: 0,
      horseEth: 0
    }
    this.fetchPrices();
  }

  fetchPrices() {
    fetch('https://api.coinmarketcap.com/v1/ticker/ethorse/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          horseUsd: json[0].price_usd,
          horseEth: json[0].price_usd/this.state.ethUsd
        });
      });
  };


  render() {

    return (

      <div className="text-center responsive">
        <Header />
        <br />
        <DividendsCalculator symbol="Ξ"type="ETH" horseUsd={this.state.horseUsd} horseEth={this.state.horseEth} onTextChange={() => this.fetchPrices()} />
        <br /><br />
        <DividendsCalculator symbol="$" type="USD" horseUsd={this.state.horseUsd} horseEth={this.state.horseEth} onTextChange={() => this.fetchPrices()} />
        <br /><br /><br /><br />
        <BottomNavigation id="bottom-navigation">
          <a href="https://bet.ethorse.com"><span className="text-left" style={{'color': 'white', 'font-size': '16px'}}>Check out the Ethorse dapp today!</span></a>
        </BottomNavigation>
      </div>

    );
  }
}
export default App;