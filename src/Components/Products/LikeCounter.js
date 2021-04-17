import React from 'react';
import eyeLogo from '../../image/eyeLogo.svg';

const LikeCounter = (item) => {
	return (
		<div>
			<img className="pb-1" src={eyeLogo} alt="eyeLogo" />&nbsp;
			{item.like > 1000 ? (
				<span className="text-white">{(item.like * 0.001).toFixed(1)}k+</span>
			) : (
				<span className="text-white">{item.like}</span>
			)}
		</div>
	);
};

export default LikeCounter;
