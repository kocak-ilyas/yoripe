import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterProducts } from '../../redux/actions';

const SortNav = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.productsReducer);

	const handleChange = (filterParameter) => {
		dispatch(filterProducts(filterParameter));
	};
	return (
		<div className="navbar pt-0">
			<div className="container m-0 p-0">
				<span
					onClick={() => handleChange('popular')}
					className={
						products.filterItem === 'popular' ? (
							'badge bg-warning text-dark p-1'
						) : (
							'badge bg-light text-dark p-1'
						)
					}
				>
					Popular
				</span>
				<span
					onClick={() => handleChange('auction')}
					className={
						products.filterItem === 'auction' ? (
							'badge bg-warning text-dark p-1'
						) : (
							'badge bg-light text-dark p-1'
						)
					}
				>
					Auction
				</span>
				<span
					onClick={() => handleChange('flatRate')}
					className={
						products.filterItem === 'flatRate' ? (
							'badge bg-warning text-dark p-1'
						) : (
							'badge bg-light text-dark p-1'
						)
					}
				>
					Flat-rate
				</span>
				<span
					onClick={() => handleChange('scheduled')}
					className={
						products.filterItem === 'scheduled' ? (
							'badge bg-warning text-dark p-1'
						) : (
							'badge bg-light text-dark p-1'
						)
					}
				>
					Scheduled
				</span>
			</div>
		</div>
	);
};

export default SortNav;
