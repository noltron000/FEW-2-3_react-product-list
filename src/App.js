import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {

	getCategories() {
		return categories.map((cat) =>
			<span key={cat}>
				<button>
					{cat}
				</button>
			</span>
		)
	}

	getInventory() {
		return inventory.map((item, index, array) =>
			<div>
				<h3>{item.name}</h3>
				<p>${item.price}</p>
			</div >
		)
	}

	render() {
		return (
			<div className="App">
				<h1>Show products here</h1>

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
