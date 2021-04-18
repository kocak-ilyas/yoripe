import React, { useEffect, useState } from 'react';
import API from 'apisauce';

import SearchNav from './components/Navbars/SearchNav';
import SortNav from './components/Navbars/SortNav';
import Loading from './components/Products/Loading';
import Product from './components/Products/Product';
import ScreenFooter from './components/Footer/ScreenFooter';

const baseURL = 'https://private-e76dd9-kocakilyas.apiary-mock.com';
const ApiCall = API.create({ baseURL: baseURL });

function App() {
	const [ products, setProducts ] = useState(null);

	const getProducts = () => {
		ApiCall.get('/api')
			.then((res) => {
				setProducts(res.data.products);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="App m-3" style={{ backgroundColor: '#faf7f7' }}>
			<div className="m-0 p-0">
				<SearchNav />
				<SortNav />
			</div>
			<div className="container-fluid mb-5">
				<div className="row">
					{products ? products.map((product) => <Product product={product} key={product.id} />) : <Loading />}
				</div>
			</div>
			<ScreenFooter />
		</div>
	);
}
export default App;
