import React, {Component} from 'react';
import CalcUsd from './CalcUSD';
import CalcEth from './CalcETH';
import Header from './Header';

class App extends Component {

  render() {
    return (
    	<div className="app responsive">
    		<div id="header" className="row">
    			<div className="col-md-12">
    				<Header />
    			</div>
    		</div>
    		<div id="modals" className="row">
    			<div className="col-md-6">
    				<CalcUsd />
    			</div>
    			<div className="col-md-6">
    				<CalcEth />
    			</div>
    		</div>
    	</div>
    );
  }
}
export default App;
