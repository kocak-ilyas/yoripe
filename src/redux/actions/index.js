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
export const filterProducts = (filterParameter) => (dispatch) => {
	ApiCall.get('/api')
		.then((res) => {
			switch (filterParameter) {
				case 'popular':
					try {
						dispatch({ type: actionTypes.CHANGE_FILTER_PARAMETER, payload: filterParameter });
						dispatch({
							type: actionTypes.FETCH_PRODUCTS_SUCCESS,
							payload: res.data.products
								.filter((item) => item.like > 8000)
								.sort((a, b) => b.like - a.like)
						});
					} catch (error) {
						console.log(error.message);
					}
					break;
				case 'auction':
					try {
						dispatch({ type: actionTypes.CHANGE_FILTER_PARAMETER, payload: filterParameter });
						dispatch({
							type: actionTypes.FETCH_PRODUCTS_SUCCESS,
							payload: res.data.products
						});
						console.log('auction clicked');
					} catch (error) {
						console.log(error.message);
					}
					break;
				case 'flatRate':
					try {
						dispatch({ type: actionTypes.CHANGE_FILTER_PARAMETER, payload: filterParameter });
						dispatch({
							type: actionTypes.FETCH_PRODUCTS_SUCCESS,
							payload: res.data.products
						});
						console.log('flatRate clicked');
					} catch (error) {
						console.log(error.message);
					}
					break;

				case 'scheduled':
					try {
						dispatch({ type: actionTypes.CHANGE_FILTER_PARAMETER, payload: filterParameter });
						dispatch({
							type: actionTypes.FETCH_PRODUCTS_SUCCESS,
							payload: res.data.products
						});
						console.log('scheduled clicked');
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
