import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentCat: null
		}
	}

	getCategories() {
		return categories.map((cat) =>
			<span key={cat}>
				<button onClick={() => {
					this.setState({ currentCat: cat })
				}}>
					{cat}
				</button>
			</span >
		)
	}

	getInventory() {
		return inventory.filter((item) => {
			const output = item.category === this.state.currentCat
			return output
		}).map((item, index, array) =>
			<div key={item.name}>
				<h3>{item.name}</h3>
				<small>${item.price}</small>
				<p>{item.description}</p>
			</div>
		)
	}

	filterCat(cat) {
		this.state.currentCat = cat;
	}

	render() {
		return (
			<div className="App">
				<h1>Show products here</h1>
				<p>Current category is: {this.state.currentCat}</p>
				<div>
					{/* Products listed here */
						this.getCategories()
					}
				</div>

				<div>
					{/* Products listed here */
						this.getInventory()
					}
				</div>

			</div>
		);
	}
}

export default App;
