import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardBody, CardSubtitle, Button, Badge } from 'reactstrap';
import ProductDate from './ProductDate';
import "./productStyles.css";

const Product = (data) => {
	return (
		<div>
			<Card inverse>
				<CardImg width="100%" src={data.product.imageURL} alt={data.product.name} />
				<CardImgOverlay>
					<CardTitle tag="h5">Like: {data.product.like}</CardTitle>
					<img src={data.product.sellerPhotoURL} alt={data.product.name} width="10%" height="10%" />
				</CardImgOverlay>
				<CardBody>
					<CardTitle className="mb-2 text-dark" tag="h2">
						{data.product.name}{' '}
					</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
					<CardText className="mb-2 text-muted">{data.product.explanation}</CardText>{' '}
					{/* <CardText> */}
						{/* <small className="text-muted"> */}
							<ProductDate date={data.product.date}/>
						{/* </small> */}
					{/* </CardText> */}
					<Button color="primary" outline>
						{data.product.price} <Badge color="warning" className="m-0 p-1">$</Badge>
					</Button>
				</CardBody>
			</Card>
			<br />
		</div>
	);
};

export default Product;
