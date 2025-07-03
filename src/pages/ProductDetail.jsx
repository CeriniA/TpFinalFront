import React from "react";
import useProductDetail from "../hoocks/useProductDetail";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Badge, Spinner } from "react-bootstrap";
import ProductRating from "../components/ProductRating";
import ProductImage from "../components/ProductImage";
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
                <Button variant="primary" onClick={() => navigate(0)} className="mt-3">
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

                <Row className="g-4 align-items-stretch">
                    <Col lg={6} className="d-flex">
                        <ProductImage
                            src={product.image}
                            alt={product.title}
                            className="h-100"
                        />
                    </Col>
                    <Col lg={6}>
                        <div className="product-info">
                            <Badge bg="secondary" className="mb-3 text-uppercase">
                                {product.category}
                            </Badge>
                            <h1 className="product-title">{product.title}</h1>

                            <ProductRating
                                rating={product.rating}
                                className="mb-3"
                            />

                            <div className="price">
                                ${product.price?.toFixed(2) || 0}
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
