import React, { useEffect } from 'react';

import SearchNav from './components/Navbars/SearchNav';
import SortNav from './components/Navbars/SortNav';
import Product from './components/Products/Product';
import ScreenFooter from './components/Footer/ScreenFooter';

import { getProducts } from './redux/actions';
import { useDispatch } from 'react-redux';
function App() {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getProducts());
		},
		[ dispatch ]
	);

	return (
		<div className="App m-3" style={{ backgroundColor: '#faf7f7' }}>
			<div className="m-0 p-0">
				<SearchNav />
				<SortNav />
			</div>
			<Product />
			<ScreenFooter />
		</div>
	);
}
export default App;
