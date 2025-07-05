import React, { useState, useMemo } from "react";
import useApi from "../hoocks/useApi";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

function Products() {
    const { data, loading, error } = useApi();
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState(""); // "asc" o "desc"

    const filteredProducts = useMemo(() => {
        if (!data) return [];
        
        let result = [...data];
        
        // Filtrar por término de búsqueda
        if (searchTerm) {
            result = result.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        
        // Ordenar por precio
        if (sortOrder) {
            result.sort((a, b) => {
                const priceA = parseFloat(a.price);
                const priceB = parseFloat(b.price);
                return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
            });
        }
        
        return result;
    }, [data, searchTerm, sortOrder]);

    if (loading) return <div className="text-center py-5"><div className="spinner-border" role="status"></div></div>;
    if (error) return <div className="alert alert-danger">Error: {error.message}</div>;
    if (!data || data.length === 0) return <div className="alert alert-info">No hay productos disponibles</div>;
    
    return (
        <Container className="py-4">
            <h1 className="text-center mb-4 text-primary">Productos</h1>
            
            {/* Barra de búsqueda y ordenamiento */}
            <div className="mb-4">
                <Row className="g-3">
                    <Col md={8}>
                        <Form.Group controlId="search">
                            <Form.Control
                                type="text"
                                placeholder="Buscar productos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="p-2"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <InputGroup>
                            <InputGroup.Text>Ordenar por precio:</InputGroup.Text>
                            <Form.Select 
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                aria-label="Ordenar por precio"
                            >
                                <option value="">Seleccionar</option>
                                <option value="asc">Menor a mayor</option>
                                <option value="desc">Mayor a menor</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>
            </div>

            {filteredProducts.length === 0 ? (
                <div className="alert alert-warning">No se encontraron productos que coincidan con la búsqueda.</div>
            ) : (
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {filteredProducts.map(product => (
                        <Col key={product.id}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default Products;
