import React, {Component} from 'react';
import DividendsCalculator from './DividendsCalculator';
import Header from './Header';
import Paper from 'material-ui/Paper';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import css from './assets/css/index.css';

class App extends Component {

  render() {
    return (
    	<div className="responsive container-fluid">
    		<div className="container-fluid">
    			<div>
                    <Header />
    			</div>
    		</div>
        		<div id="calculators" className="row">
        			<div id="eth-calc" className="col-md-4">
                         <DividendsCalculator type="ETH" symbol="Ξ" />
        			</div>
        			<div id="usd-calc" className="col-md-4">
                        <DividendsCalculator type="USD" symbol="$" />
        			</div>
        		</div>
    	</div>
    );
  }
}
export default App;
