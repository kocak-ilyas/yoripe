import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Loading from './Loading';
import ProductsTable from './ProductsTable';
import './styles.css';

const Product = () => {
	// const [ filterdProducts, setFilterdProducts ] = useState('initialState');
	const products = useSelector((state) => state.productsReducer);
	// products.filterItem
	// 	? console.log('products.filterItem :>> ', products.filterItem)
	// 	: console.log('products.productsTable :>> ', products.productsTable);
	return (
		<div className="container-fluid mb-5">
			<div className="row">
				{products.isLoading ? (
					<Loading />
				) 
				// : products.filterItem ? (
				// 	console.log('products.filterItem :>> ', products.filterItem)
				// ) 
				: (
					<ProductsTable products={products} />
				)}
			</div>
		</div>
	);
};

export default Product;
