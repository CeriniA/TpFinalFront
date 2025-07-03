import React from 'react';
import PropTypes from 'prop-types';
import './ProductRating.css';

const ProductRating = ({ rating, showCount = true, className = '' }) => {
    const rate = rating?.rate || 0;
    const count = rating?.count || 0;

    return (
        <div className={`product-rating ${className}`}>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`rating-star ${index < Math.round(rate) ? 'active' : ''}`}
                >
                    ★
                </span>
            ))}
            {showCount && count > 0 && (
                <span className="rating-count">
                    ({count} {count === 1 ? 'reseña' : 'reseñas'})
                </span>
            )}
        </div>
    );
};

ProductRating.propTypes = {
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number
    }),
    showCount: PropTypes.bool,
    className: PropTypes.string
};

export default ProductRating;
