import React, { Component } from 'react';

class ProductCard extends Component {
	render() {
		return (
			<span>
				<div key={this.props.name}>
					<h3>{this.props.name}</h3>
					<small>${this.props.price}</small>
					<p>{this.props.description}</p>
				</div>
			</span>
		)
	}
}


export default ProductCard