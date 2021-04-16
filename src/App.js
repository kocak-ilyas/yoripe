import { useState } from 'react';
import API from 'apisauce';
import './App.css';
import Product from './Product';

const baseURL = 'https://private-e76dd9-kocakilyas.apiary-mock.com';
const ApiCall = API.create({ baseURL: baseURL });
function App() {
	const [ data, setData ] = useState(null);
	const [ products, setProducts ] = useState([
		{
			id: 1,
			name: 'product1',
			imageURL:
				'https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			like: 301,
			sellerPhotoURL: 'https://www.sellerphoto.com/wp-content/uploads/2016/11/JZ.png',
			explanation: 'This product is awesome1!',
			date: 'Mon Apr 12 2021 21:01:28 GMT+0300 (GMT+03:00)',
			price: 101
		}
	]);

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
			<div>{products.map((product) => <Product product={product} />)}</div>
			<button onClick={handlePost}>POST</button>
		</div>
	);
}
export default App;
