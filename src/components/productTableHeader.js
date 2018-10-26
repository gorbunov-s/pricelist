import React, { Component } from 'react';

class ProductTableHeader extends Component {
  render() {
	return (  
	<thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    );
  }
}

export default ProductTableHeader;