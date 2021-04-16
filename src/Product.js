import React from 'react';
import ProductDate from './ProductDate';
import './productStyles.css';

const Product = (data) => {
	return (
		<div className="col-6 col-sm-4 col-lg-3 p-2">
			<div className="facebtn center-block btn-material btn-material-default">
				<div className="card ">
					<div className="d-flex flex-row mb-1 position-relative">
						<div className="col align-self-end position-absolute m-0 p-3">
							<img
								className="border border-1 rounded-circle m-1 p-0"
								src={data.product.sellerPhotoURL}
								alt={data.product.name}
								width="20%"
								height="20%"
							/>
						</div>

						<img
							className="rounded-top m-0 p-0"
							width="100%"
							height="190px"
							src={data.product.imageURL}
							alt={data.product.name}
						/>
						{/* <div className="col align-self-end position-absolute">
      One of three columns
    </div> */}
					</div>
					<div className="d-flex justify-content-between install mt-3">
						<span>
							$&nbsp;
							{data.product.price}
						</span>
						<span className="text-black-50">{data.product.explanation}</span>
						<span className="text-black-50">{data.product.name}</span>
						<span>
							<ProductDate date={data.product.date} />{' '}
						</span>
						<span className="text-primary">
							Like: {data.product.like} &nbsp;
							<i className="fa fa-angle-right" />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
