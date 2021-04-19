import * as actionTypes from '../constants/actionTypes';
import API from 'apisauce';
const baseURL = process.env.REACT_APP_baseURL;
const ApiCall = API.create({ baseURL: baseURL });

export const getProducts = () => (dispatch) => {
	ApiCall.get('/api')
		.then((res) => {
			dispatch({
				type: actionTypes.FETCH_PRODUCTS_SUCCESS,
				payload: res.data.products
			});
		})
		.catch((error) => {
			console.log(error);
		});
};
export const filterProducts = (products, filterParameter) => (dispatch) => {
	switch (filterParameter) {
		case 'popular':
			try {
				dispatch({ type: actionTypes.CHANGE_FILTER_PARAMETER, payload: filterParameter });
				dispatch({
					type: actionTypes.FETCH_PRODUCTS_SUCCESS,
					payload: products.productsTable.filter((item) => item.like > 8000)
				});
			} catch (error) {
				console.log(error.message);
			}
			break;
		case 'auction':
			try {
				dispatch({ type: actionTypes.CHANGE_FILTER_PARAMETER, payload: filterParameter });
				// dispatch({
				// 	type: actionTypes.FETCH_PRODUCTS_SUCCESS,
				// 	payload: products.productsTable.filter((item) => item.like > 8000)
				// });
				console.log('auction clicked');
			} catch (error) {
				console.log(error.message);
			}
			break;
		case 'flatRate':
			try {
				dispatch({ type: actionTypes.CHANGE_FILTER_PARAMETER, payload: filterParameter });
				// dispatch({
				// 	type: actionTypes.FETCH_PRODUCTS_SUCCESS,
				// 	payload: products.productsTable.filter((item) => item.like > 8000)
				// });
				console.log('flatRate clicked');
			} catch (error) {
				console.log(error.message);
			}
			break;

		case 'scheduled':
			try {
				dispatch({ type: actionTypes.CHANGE_FILTER_PARAMETER, payload: filterParameter });
				// dispatch({
				// 	type: actionTypes.FETCH_PRODUCTS_SUCCESS,
				// 	payload: products.productsTable.filter((item) => item.like > 8000)
				// });
				console.log('scheduled clicked');
			} catch (error) {
				console.log(error.message);
			}
			break;

		default:
			break;
	}
};
