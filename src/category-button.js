import React, { Component } from 'react';

class CategoryButton extends Component {
	render() {
		return (
			<span>
				<button onClick={this.props.onClick}>
					{this.props.label}
				</button>
			</span>
		)
	}
}


export default CategoryButton