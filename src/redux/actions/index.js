import * as actionTypes from '../constants/actionTypes';
import API from 'apisauce';

const ApiCall = API.create({ baseURL: process.env.REACT_APP_baseURL });

export const getProducts = () => (dispatch) => {
	ApiCall.get('/api')
		.then((res) => {
			dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: res.data.products });
		})
		.catch((error) => {
			console.log(error);
		});
};

export const filterProducts = (filterParameter) => (dispatch) => {
	ApiCall.get('/api')
		.then((res) => {
			switch (filterParameter) {
				case 'popular':
					try {
						dispatch({
							type: actionTypes.CHANGE_FILTER_PARAMETER,
							payload: filterParameter
						});
						dispatch({
							type: actionTypes.FETCH_PRODUCTS,
							payload: res.data.products
								.filter((item) => item.like > 8000)
								.sort((a, b) => b.like - a.like)
						});
						dispatch({
							type: actionTypes.CHANGE_SEARCH_PARAMETER,
							payload: ''
						});
					} catch (error) {
						console.log(error.message);
					}
					break;

				case 'auction':
					try {
						dispatch({
							type: actionTypes.CHANGE_FILTER_PARAMETER,
							payload: filterParameter
						});
						dispatch({
							type: actionTypes.FETCH_PRODUCTS,
							payload: res.data.products.filter((item) => item.salesMethod === 'auction')
						});
						dispatch({
							type: actionTypes.CHANGE_SEARCH_PARAMETER,
							payload: ''
						});
					} catch (error) {
						console.log(error.message);
					}
					break;
				case 'flatRate':
					try {
						dispatch({
							type: actionTypes.CHANGE_FILTER_PARAMETER,
							payload: filterParameter
						});
						dispatch({
							type: actionTypes.FETCH_PRODUCTS,
							payload: res.data.products.filter((item) => item.salesMethod === 'flatRate')
						});
						dispatch({
							type: actionTypes.CHANGE_SEARCH_PARAMETER,
							payload: ''
						});
					} catch (error) {
						console.log(error.message);
					}
					break;

				case 'scheduled':
					try {
						dispatch({
							type: actionTypes.CHANGE_FILTER_PARAMETER,
							payload: filterParameter
						});
						dispatch({
							type: actionTypes.FETCH_PRODUCTS,
							payload: res.data.products.filter((item) => item.salesMethod === 'scheduled')
						});
						dispatch({
							type: actionTypes.CHANGE_SEARCH_PARAMETER,
							payload: ''
						});
					} catch (error) {
						console.log(error.message);
					}
					break;

				default:
					break;
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const changeSearchParameters = (value) => (dispatch) => {
	ApiCall.get('/api')
		.then((res) => {
			dispatch({
				type: actionTypes.CHANGE_SEARCH_PARAMETER,
				payload: value
			});
			if (value === '') {
				dispatch({
					type: actionTypes.FETCH_PRODUCTS,
					payload: res.data.products
				});
			} else {
				const newProducts = [];
				res.data.products.map((x) => (x.name.toLowerCase().search(value) > -1 ? newProducts.push(x) : null));

				dispatch({
					type: actionTypes.FETCH_PRODUCTS,
					payload: newProducts
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};
