import React from 'react';
import LikeButton from './LikeButton';
import ProductDate from './ProductDate';
import './productStyles.css';
const Product = (data) => {
	return (
		<div className="col-6 col-sm-4 col-lg-3 p-1">
			<div className="facebtn center-block btn-material btn-material-default">
				<div className="card ">
					<div className="d-flex mb-1 position-relative">
						<img
							className="rounded-top m-0 p-0 product-img"
							width="100%"
							height="150px"
							src={data.product.imageURL}
							alt={data.product.name}
						/>
						<div className="container position-absolute">
							<div className="row justify-content-end">
								<div className="col-7 col-md-6 mr-0 mt-2">
									<LikeButton like={data.product.like} />
								</div>
							</div>
						</div>
						<div className="col align-self-end position-absolute m-0 p-3">
							<img
								className="border border-1 rounded-circle m-1 p-0"
								src={data.product.sellerPhotoURL}
								alt={data.product.name}
								width="20%"
								height="20%"
							/>
						</div>
					</div>
					<div className="d-flex justify-content-between install mt-3">
						<div className="container">
							<div className="row row-cols-1">
								<div className="col">
									<h6>{data.product.name}</h6>
								</div>
								<div className="col">
									<span className="text-black-50">{data.product.explanation}</span>
								</div>
								<div className="col mt-2">
									<span>
										<ProductDate date={data.product.date} />{' '}
									</span>
								</div>
								<div className="row justify-content-end mb-2 mt-0">
									<strong>
										$&nbsp;
										{data.product.price}
									</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
