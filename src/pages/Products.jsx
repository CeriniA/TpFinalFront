import React from "react";
import useApi from "../hoocks/useApi";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

function Products() {
    const { data, loading, error } = useApi("https://fakestoreapi.com/products");

    if (loading) return <div className="text-center py-5"><div className="spinner-border" role="status"></div></div>;
    if (error) return <div className="alert alert-danger">Error: {error.message}</div>;
    if (!data || data.length === 0) return <div className="alert alert-info">No hay productos disponibles</div>;
    
    return (
        <Container className="py-4">
            <h1 className="text-center mb-4 text-primary">Productos</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {data.map(product => (
                    <Col key={product.id}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
