import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchParameters } from '../../redux/actions';

const SearchInput = () => {
	const dispatch = useDispatch();

	const handleSearch = (value) => {
		dispatch(changeSearchParameters(value.toLowerCase()));
	};
	return (
		<div>
			<form action="">
				<input
					aria-live="polite"
					className="form-control rounded pl-5"
					type="search"
					placeholder="Search Products"
					aria-label="Search"
					onChange={(e) => handleSearch(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default SearchInput;
