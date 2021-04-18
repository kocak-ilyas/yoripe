import React, { useState } from 'react';

const SortNav = () => {
	const [ clicked, setClicked ] = useState('');
	const handleChange = (data) => {
		setClicked(data);
	};
	return (
		<div className="navbar pt-0">
			<div className="container m-0 p-0">
				<span
					onClick={() => handleChange('popular')}
					className={
						clicked === 'popular' ? 'badge bg-warning text-dark p-1' : 'badge bg-light text-dark p-1'
					}
				>
					Popular
				</span>
				<span
					onClick={() => handleChange('auction')}
					className={
						clicked === 'auction' ? 'badge bg-warning text-dark p-1' : 'badge bg-light text-dark p-1'
					}
				>
					Auction
				</span>
				<span
					onClick={() => handleChange('flatRate')}
					className={
						clicked === 'flatRate' ? 'badge bg-warning text-dark p-1' : 'badge bg-light text-dark p-1'
					}
				>
					Flat-rate
				</span>
				<span
					onClick={() => handleChange('scheduled')}
					className={
						clicked === 'scheduled' ? 'badge bg-warning text-dark p-1' : 'badge bg-light text-dark p-1'
					}
				>
					Scheduled
				</span>
			</div>
		</div>
	);
};

export default SortNav;
