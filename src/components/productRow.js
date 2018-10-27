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
      <tr style={{border: 'thin solid #ccc'}}>
        <td>{name}</td>
        <td style={{fontWeight: 'bold'}}>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;