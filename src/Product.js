import React from 'react';
import { Card, CardTitle, CardText, CardImgOverlay, CardBody, CardSubtitle, Button, Badge, Col } from 'reactstrap';
import ProductDate from './ProductDate';
import './productStyles.css';

const Product = (data) => {
	return (
		<Col lg="3" md="4" xs="6">
			<div className="badge rounded p-0">
				<Card inverse className="d-flex flex-col p-0">
					<img
						className="rounded-top m-0 p-0"
						width="100%"
						height="190px"
						src={data.product.imageURL}
						alt={data.product.name}
					/>
					<CardImgOverlay className="mr-1 pt-1">
						<CardTitle tag="h6">Like: {data.product.like}</CardTitle>
					</CardImgOverlay>
					{/* <CardImgOverlay>
						<div className="mb-0">
							<img
								className="border border-1 rounded-circle p-0"
								src={data.product.sellerPhotoURL}
								alt={data.product.name}
								width="20%"
								height="20%"
							/>
						</div>
					</CardImgOverlay> */}
					<CardBody>
						<CardTitle className="mb-2 text-dark" tag="h2">
							{data.product.name}{' '}
						</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							Card subtitle
						</CardSubtitle>
						<CardText className="mb-2 text-muted">{data.product.explanation}</CardText> {/* <CardText> */}
						{/* <small className="text-muted"> */}
						<ProductDate date={data.product.date} />
						{/* </small> */}
						{/* </CardText> */}
						<Button color="primary" outline>
							{data.product.price}{' '}
							<Badge color="warning" className="m-0 p-1">
								$
							</Badge>
						</Button>
					</CardBody>
				</Card>
			</div>
		</Col>
	);
};

export default Product;
