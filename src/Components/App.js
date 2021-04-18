import React, { useEffect, useState } from 'react';
import API from 'apisauce';
import './App.css';
import Product from './Products/Product';
import ScreenFooter from './Footer/ScreenFooter';
import Loading from './Products/Loading';
import SearchNav from './Navbars/SearchNav';
import SortNav from './Navbars/SortNav';

const baseURL = 'https://private-e76dd9-kocakilyas.apiary-mock.com';
const ApiCall = API.create({ baseURL: baseURL });
function App() {
	const [ products, setProducts ] = useState(null);

	const handleGet = () => {
		ApiCall.get('/api')
			.then((res) => {
				setProducts(res.data.products);
				console.log('GET Method is success');
				console.log(res.data);
			})
			.catch((error) => {
				console.log('error :>> ', error);
			});
	};

	useEffect(() => {
		handleGet();
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

// const [ data, setData ] = useState(null);
// const handlePost = () => {
// 	ApiCall.post('/api', { name: 'postName' })
// 		.then((res) => {
// 			setData(res.data.message);
// 			console.log('POST Method is success');
// 		})
// 		.catch((error) => {
// 			console.log('error :>> ', error);
// 		});
// };

// <h1>{data ? data : null}</h1>
// <button onClick={handleGet}>GET</button>
// <button onClick={handlePost}>POST</button>
