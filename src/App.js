import React, { useEffect, useState } from 'react';
import API from 'apisauce';
import './App.css';
import Product from './Product';
import ScreenFooter from './ScreenFooter';
import Loading from './Loading';
import Nav from './Nav';

const baseURL = 'https://private-e76dd9-kocakilyas.apiary-mock.com';
const ApiCall = API.create({ baseURL: baseURL });
function App() {
	// const [ data, setData ] = useState(null);
	const [ products, setProducts ] = useState(null);

	const handleGet = () => {
		ApiCall.get('/api')
			.then((res) => {
				setProducts(res.data.products);
				console.log('GET Method is success');
			})
			.catch((error) => {
				console.log('error :>> ', error);
			});
	};
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
	useEffect(() => {
		handleGet();
	}, []);
	return (
		<div className="App m-3">
			<Nav />
			{/* <h1>{data ? data : null}</h1> */}
			{/* <button onClick={handleGet}>GET</button> */}
			<div className="container-fluid">
				<div className="row">
					{products ? products.map((product) => <Product product={product} key={product.id} />) : <Loading />}
				</div>
			</div>
			{/* <button onClick={handlePost}>POST</button> */}
			<ScreenFooter />
		</div>
	);
}
export default App;
