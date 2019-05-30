import React, { Component } from 'react';

class ProductCard extends Component {
	render() {
		return (
			<div>
				<div key={this.props.name}>
					<h3>{this.props.name}</h3>
					<small>${this.props.price}</small>
					<p>{this.props.description}</p>
				</div>
			</div>
		)
	}
}


export default ProductCard