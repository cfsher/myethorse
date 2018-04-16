/*
export default class APIHandler {

	fetchPrices() {
		fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/')
			.then(response => response.json())
			.then(json => {
				return json;
			});
		fetch('https://api.coinmarketcap.com/v1/ticker/ethorse/')
			.then(response => response.json())
			.then(json => {
				let tempPrice = json[0].price_usd/this.state.ethPrice;
				this.setState({horseEthPrice: tempPrice});
				this.setState({roi: })
			});
	}

}
*/