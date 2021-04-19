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
	try {
		console.log('products :>> ', products);
		console.log('filterItem :>> ', filterParameter);
		dispatch({ type: actionTypes.CHANGE_FILTER_PARAMETER, payload: filterParameter });
		// products.filter(product=>product.filter)
	} catch (error) {
		console.log(error.message);
	}
};
