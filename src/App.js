import { useState } from 'react';
import API from 'apisauce';
import './App.css';

const baseURL = 'https://private-e76dd9-kocakilyas.apiary-mock.com';
const ApiCall = API.create({ baseURL: baseURL });
function App() {
	const [ data, setData ] = useState(null);

	const handleGet = () => {
		ApiCall.get('/api')
			.then((Response) => {
				setData(Response.data.message);
				console.log('GET Method is success');
				console.log(data);
			})
			.catch((error) => {
				console.log('error :>> ', error);
			});
	};
	const handlePost = () => {
		ApiCall.post('/api', { name: 'postName' })
			.then((Response) => {
				setData(Response.data.message);
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
			<button onClick={handlePost}>POST</button>
		</div>
	);
}

export default App;
