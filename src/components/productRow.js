import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
	  <span style={{color: 'green'}}>
		  {product.name} 
	  </span>	:
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td style={{fontWeight: 'bold', borderLeft: 'thin solid #ccc', paddingLeft: '10px'}}>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;