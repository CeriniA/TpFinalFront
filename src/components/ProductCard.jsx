import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating';
import ProductImage from './ProductImage';
import './ProductCard.css';

function ProductCard({ product }) {
    const { id, title, price, description, category, image, rating } = product;

    return (
        <Card className="product-card h-100">
            <Card.Body className="card-body">
            <ProductImage 
                src={image} 
                alt={title}
                showRating={!!rating?.rate}
                rating={rating}
            />
                <div className="mb-2">
                    <span className="badge category-badge">{category}</span>
                </div>
                <Card.Title className="product-title mb-2">
                    {title}
                </Card.Title>
                <Card.Text className="product-description text-muted mb-3">
                    {description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <h5 className="product-price mb-0">
                        ${price?.toFixed(2)}
                    </h5>
                    <Link 
                        to={`/products/${id}`}
                        className="detail-button"
                    >
                        Ver más
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number,
            count: PropTypes.number
        })
    }).isRequired
};

export default ProductCard;