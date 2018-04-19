import React, {Component} from 'react';
import DividendsCalculator from './DividendsCalculator';
import Header from './Header';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import css from './assets/css/index.css';


class App extends Component {

  render() {

    return (

        <div className="container-fluid">
            <div className="row">
                <div id="utilities-container" className="col-md-1">
                    <div id="sidebar-title">
                        <h4 style={{'color': 'grey'}}><strong>Utilities (WIP)</strong></h4>
                    </div>
                    <br />
                    <Button variant="raised" color="primary" className="grow"><span style={{'font-size': '12px'}}>Dividends Calculator</span></Button>
                    <br />
                    <Button variant="raised" color="primary" className="grow"><span style={{'font-size': '12px'}}>Estimated Dividends Payout</span></Button>
                </div>
                <div id="main-container" className="col-md-11">
                    <div id="main-container-main" className="container-fluid">
                        <div id="header" className="container-fluid">
                            <Header />
                        </div>
                        <div id="main-content" className="row">
                            <div className="col-md-3">
                                <DividendsCalculator type="ETH" symbol="Ξ" />
                            </div>
                            <div className="col-md-3">
                                <DividendsCalculator type="USD" symbol="$" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="bottom-app" className="row">
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <span style={{'font-size': '14px', 'color': '#BDBDBD'}}>Check out the Ethorse dapp today!</span>
                    </Toolbar>
                </AppBar>
            </div>
    </div>

    )
  }
}
export default App;
