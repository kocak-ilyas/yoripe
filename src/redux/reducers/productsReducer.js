import * as actionTypes from '../constants/actionTypes';
import * as initialState from './initialState';

export const productsReducer = (state = initialState.productsState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCTS:
			return { ...state, productsTable: action.payload, isLoading: false };
		case actionTypes.CHANGE_FILTER_PARAMETER:
			return { ...state, filterItem: action.payload };
		case actionTypes.CHANGE_SEARCH_PARAMETER:
			return { ...state, searchParameter: action.payload };
		default:
			return state;
	}
};
