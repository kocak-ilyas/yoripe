import React from 'react';

const Loading = () => {
	return (
		<button className="btn btn-light text-info" type="button" disabled>
			<span className="spinner-border spinner-border-sm text-info" role="status" aria-hidden="true" />
			&nbsp; &nbsp; Loading...
		</button>
	);
};

export default Loading;
