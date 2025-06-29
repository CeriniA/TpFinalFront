import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard({ product }) {
    const { id, title, price, description, category, image, rating } = product;

    return (
        <Card className="h-100 shadow-sm">
            <div className="position-relative" style={{ height: '200px' }}>
                <Card.Img 
                    variant="top" 
                    src={image} 
                    alt={title}
                    className="p-3"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        backgroundColor: '#f8f9fa'
                    }}
                />
                {rating?.rate  && (
                    <div className="position-absolute top-0 end-0 m-2 bg-warning px-2 rounded-pill">
                        <small className="text-white fw-bold"> {rating.rate}</small>
                    </div>
                )}
            </div>
            <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                    <span className="badge bg-light text-primary">{category}</span>
                </div>
                <Card.Title className="mb-2" style={{
                    fontSize: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    minHeight: '3rem'
                }}>
                    {title}
                </Card.Title>
                <Card.Text className="text-muted mb-3" style={{
                    fontSize: '0.85rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    minHeight: '2.5rem',
                    flexGrow: 1
                }}>
                    {description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <h5 className="mb-0 fw-bold text-primary">
                        ${price?.toFixed(2)}
                    </h5>
                    <Link 
                        to={`/product/${id}`}
                        className="btn btn-primary btn-sm"
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