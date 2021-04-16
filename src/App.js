import { useState } from 'react';
import API from 'apisauce';
import './App.css';
import Product from './Product';
import ScreenFooter from './ScreenFooter';
import Loading from './Loading';

const baseURL = 'https://private-e76dd9-kocakilyas.apiary-mock.com';
const ApiCall = API.create({ baseURL: baseURL });
function App() {
	const [ data, setData ] = useState(null);
	const [ products, setProducts ] = useState(null);

	const handleGet = () => {
		ApiCall.get('/api')
			.then((res) => {
				setData(res.data.message);
				setProducts(res.data.products);
				console.log('GET Method is success');
			})
			.catch((error) => {
				console.log('error :>> ', error);
			});
	};
	const handlePost = () => {
		ApiCall.post('/api', { name: 'postName' })
			.then((res) => {
				setData(res.data.message);
				console.log('POST Method is success');
				console.log(data);
			})
			.catch((error) => {
				console.log('error :>> ', error);
			});
	};
	return (
		<div className="App">
			<h1>{data ? data : null}</h1>
			<button onClick={handleGet}>GET</button>
			<div>{products ? products.map((product) => <Product product={product} key={product.id} />) : <Loading/>}</div>
			<button onClick={handlePost}>POST</button>
			<ScreenFooter/>
		</div>
	);
}
export default App;
