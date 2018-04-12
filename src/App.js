import React, {Component} from 'react';
import Calc from './CalcUSD';
import Header from './Header';

class App extends Component {

  render() {
    return (
    	<div className="app responsive">
    		<div className="header">
    			<Header />
    		</div>
    		<div className="calculator">
    			<Calc />
    		</div>
    	</div>
    );
  }
}
export default App;
