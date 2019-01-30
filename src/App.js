import React, { Component } from 'react';
import inventory, { categories } from './inventory.js'
import CategoryButton from './category-button.js'
import ProductCard from './product-card'

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
				<CategoryButton
					label={cat}
					onClick={() => {
						this.setState({ currentCat: cat })
					}} />
			</span >
		)
	}

	getInventory() {
		return inventory.filter((item) => {
			const output = item.category === this.state.currentCat
			return output
		}).map((item, index, array) => (
			<ProductCard
				name={item.name}
				price={item.price}
				description={item.description}
			/>
		))
	}

	filterCat(cat) {
		// this.state.currentCat = cat;
		this.setState({ currentCat: cat });
	}

	render() {
		return (
			<div class="App">
				<h1>Show products here</h1>
				<p>Current category is: {this.state.currentCat}</p>
				<div class="categories">
					{/* Products listed here */
						this.getCategories()
					}
				</div>

				<div class="window-shopping">
					{/* Products listed here */
						this.getInventory()
					}
				</div>

			</div>
		);
	}
}

export default App;
