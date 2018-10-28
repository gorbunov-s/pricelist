import React, { Component } from 'react';

class ProductTableHeader extends Component {
  render() {
	return (  
	<thead>
        <tr>
            <th>Name</th>
            <th style={{borderLeft: 'thin solid #ccc'}}>Price</th>
        </tr>
    </thead>
    );
  }
}

export default ProductTableHeader;