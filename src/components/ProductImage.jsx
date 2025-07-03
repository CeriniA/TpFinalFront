import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating';
import './ProductImage.css';

const ProductImage = ({ src, alt, className = '', showRating = false, rating = {} }) => {
    const [imageError, setImageError] = useState(false);

    const handleError = () => {
        setImageError(true);
    };

    if (imageError) {
        return (
            <div className={`product-image-error ${className}`}>
                <span>Imagen no disponible</span>
            </div>
        );
    }

    return (
        <div className={`product-image-container ${className}`}>
            <img
                src={src}
                alt={alt}
                className="product-image"
                onError={handleError}
                loading="lazy"
            />
            {showRating && rating?.rate > 0 && (
                <div className="product-rating-wrapper">
                    <ProductRating 
                        rating={rating} 
                        showCount={false}
                        className="product-rating--small"
                    />
                </div>
            )}
        </div>
    );
};

ProductImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    showRating: PropTypes.bool,
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number
    })
};

export default ProductImage;
