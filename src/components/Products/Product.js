import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

import Loading from './Loading';
import LikeCounter from './LikeCounter';
import ProductDate from './ProductDate';

const Product = () => {
	const products = useSelector((state) => state.productsReducer);

	return (
		<div className="container-fluid mb-5">
			{products.searchParameter === '' ? null : (
				<div>
					{products.productsTable.length} items found in
					<strong>&nbsp;{products.searchParameter}&nbsp;</strong>
					search
				</div>
			)}
			<div className="row">
				{products.isLoading ? (
					<Loading />
				) : (
					products.productsTable.map((product) => (
						<div key={product.id} className="col-6 col-sm-4 col-lg-3 p-1">
							<div className="facebtn center-block btn-material btn-material-default">
								<div className="card ">
									<div className="d-flex mb-1 position-relative">
										<img
											className="rounded-top m-0 p-0 product-img"
											width="100%"
											height="140px"
											src={product.imageURL}
											alt={product.name}
										/>
										<div className="container position-absolute">
											<div className="row justify-content-end">
												<div className="float-md-end mr-2 mt-1">
													<LikeCounter like={product.like} />
												</div>
											</div>
											<div className="row justify-content-start m-0 p-0">
												<div
													style={{
														fontSize: '0.7rem',
														lineHeight: '1.4',
														height: '15px'
													}}
													className="badge bg-warning m-0 pt-0 pr-1 pl-1"
												>
													{product.salesMethod === 'auction' ? (
														'Auction'
													) : product.salesMethod === 'flatRate' ? (
														'Flat Rate'
													) : product.salesMethod === 'scheduled' ? (
														'Scheduled'
													) : null}
												</div>
											</div>
										</div>
										<div className="col align-self-end position-absolute m-0 p-3">
											<img
												className="border border-1 rounded-circle m-1 p-0"
												src={product.sellerPhotoURL}
												alt={product.name}
												width="20%"
												height="20%"
											/>
										</div>
									</div>
									<div className="d-flex justify-content-between install mt-1">
										<div className="container">
											<div className="row row-cols-1">
												<div
													className="col"
													style={{
														fontSize: '1rem',
														lineHeight: '1.2',
														height: '20px',
														overflow: 'hidden',
														textOverflow: 'ellipsis'
													}}
												>
													<h6>{product.name}</h6>
												</div>
												<div className="col pl-2 pr-2 m-1">
													<div
														style={{
															fontSize: '0.6rem',
															lineHeight: '1.2',
															height: '22px',
															overflow: 'hidden',
															textOverflow: 'ellipsis'
														}}
														className="text-black-50"
													>
														{product.explanation}
													</div>
												</div>
												<div className="col mt-0">
													<span>
														<ProductDate date={product.date} />{' '}
													</span>
												</div>
												<div className="row justify-content-end mb-2 mt-0">
													<strong>$&nbsp;{product.price}</strong>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Product;
