import * as actionTypes from '../constants/actionTypes';
import * as initialState from './initialState';

export const productsReducer = (state = initialState.productsState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCTS_START:
			return { ...state, isLoading: true };
		case actionTypes.FETCH_PRODUCTS_SUCCESS:
			return { ...state, productsTable: action.payload, isLoading: false };
		case actionTypes.CHANGE_FILTER_PARAMETER:
			return { ...state, filterItem: action.payload };
		default:
			return state;
	}
};
