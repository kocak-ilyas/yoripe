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
