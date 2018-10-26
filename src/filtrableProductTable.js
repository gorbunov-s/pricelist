import React, { Component } from 'react';
import ProductTable from './components/productTable';
import SearchBar from './components/searchBar';

class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
 
export default FilterableProductTable;