import React from 'react';
import eyeLogo from './eyeLogo.svg';

const LikeButton = (item) => {
	return (
		<div>
			<img src={eyeLogo} alt="eyeLogo"/>&nbsp;
			{item.like > 1000 ? (
				<span className="text-white text-lowercase">{(item.like * 0.001).toFixed(1)}k+</span>
			) : (
				<span className="text-white">{item.like}</span>
			)}
		</div>
	);
};

export default LikeButton;
