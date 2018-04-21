fetchPrices() {
	fetch('https://api.coinmarketcap.com/v1/ticker/ethorse/')
		.then(response => response.json())
		.then(json => {
			this.setState({
				horseUsdPrice: json[0].price_usd,
				horseEthPrice: json[0].price_usd/this.state.ethPrice
			});
		});
}