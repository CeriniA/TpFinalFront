import React from "react";
import useProductDetail from "../hoocks/useProductDetail";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Badge, Spinner } from "react-bootstrap";
import "./ProductDetail.css";

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { product, loading, error } = useProductDetail(id);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando producto...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return (
            <Container className="my-5 text-center">
                <div className="alert alert-danger">
                    Error al cargar el producto. Por favor, intente nuevamente.
                </div>
                <Button variant="primary" onClick={() => window.location.reload()} className="mt-3">
                    Reintentar
                </Button>
            </Container>
        );
    }

    if (!product) {
        return (
            <Container className="my-5 text-center">
                <h2>Producto no encontrado</h2>
                <Button variant="outline-primary" onClick={() => navigate(-1)} className="mt-3">
                    Volver a la tienda
                </Button>
            </Container>
        );
    }

    return (
        <div className="product-detail">
            <Container>
                <Button
                    variant="outline-secondary"
                    onClick={() => navigate(-1)}
                    className="mb-4"
                >
                    ← Volver a productos
                </Button>

                <Row className="g-4">
                    <Col lg={6}>
                        <div className="product-image-container">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="product-info">
                            <Badge bg="secondary" className="mb-3 text-uppercase">
                                {product.category}
                            </Badge>
                            <h1 className="product-title">{product.title}</h1>

                            <div className="rating">
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={index < Math.round(product.rating?.rate || 0) ? 'text-warning' : 'text-muted'}
                                    >
                                        ★
                                    </span>
                                ))}
                                <span className="text-muted ms-2">
                                    ({product.rating?.count || 0} reseñas)
                                </span>
                            </div>

                            <div className="price">
                                ${product.price.toFixed(2)}
                                {product.price > 50 && (
                                    <Badge bg="success" className="ms-2">
                                        Envío Gratis
                                    </Badge>
                                )}
                            </div>

                            <p className="lead mt-4">{product.description}</p>

                            <div className="d-grid gap-2 d-md-flex mt-5">
                                <Button variant="primary" size="lg" className="me-md-2">
                                    Añadir al carrito
                                </Button>
                                <Button variant="outline-primary" size="lg">
                                    Comprar ahora
                                </Button>
                            </div>

                            <div className="product-meta">
                                <p><strong>Categoría:</strong> {product.category}</p>
                                <p className="mb-0">
                                    <strong>Disponibilidad:</strong>
                                    <span className="text-success ms-2">En stock</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductDetail;
