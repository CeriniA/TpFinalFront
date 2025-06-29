import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero-section py-5 bg-light">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <h1 className="display-4 fw-bold text-primary mb-4">Nuestra Historia</h1>
                            <p className="lead mb-4">
                                Desde 1995, en TiendaMi hemos estado comprometidos con ofrecer una amplia variedad de productos 
                                de calidad para toda la familia, con un toque personal que nos hace únicos.
                            </p>
                            <Button
                                variant="outline-primary"
                                size="lg"
                                onClick={() => navigate('/products')}
                            >
                                Ver Productos
                            </Button>
                        </Col>
                        <Col lg={6}>
                            <div className="hero-image-container">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                                    alt="Equipo de TiendaMi"
                                    fluid
                                    rounded
                                    className="hero-image"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Nuestra Historia */}
            <section className="py-5">
                <Container>
                    <Row className="justify-content-center mb-5">
                        <Col lg={8} className="text-center">
                            <h2 className="text-primary mb-4">Una Historia Familiar</h2>
                            <div className="divider"></div>
                            <p className="lead">
                                Todo comenzó en un pequeño local en el centro, donde el abuelo Carlos, con su visión emprendedora, 
                                abrió las puertas de lo que sería el comienzo de nuestro legado familiar.
                            </p>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <div className="icon-wrapper mb-3">
                                        <i className="bi bi-people-fill text-primary fs-1"></i>
                                    </div>
                                    <h4 className="text-primary">Nuestro Equipo</h4>
                                    <p>
                                        Un equipo apasionado por ofrecer la mejor experiencia de compra, 
                                        siempre atentos a las necesidades de cada cliente que nos visita.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <div className="icon-wrapper mb-3">
                                        <i className="bi bi-star-fill text-primary fs-1"></i>
                                    </div>
                                    <h4 className="text-primary">Nuestra Misión</h4>
                                    <p>
                                        Ofrecer una experiencia de compra única con productos de calidad en múltiples categorías, 
                                        desde tecnología hasta moda y artículos para el hogar.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <div className="icon-wrapper mb-3">
                                        <i className="bi bi-heart-fill text-primary fs-1"></i>
                                    </div>
                                    <h4 className="text-primary">Nuestros Valores</h4>
                                    <p>
                                        Honestidad, dedicación, atención personalizada y pasión por ofrecer 
                                        lo mejor a nuestros clientes son los pilares de TiendaMi.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Testimonios */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center text-primary mb-5">Lo que dicen nuestros clientes</h2>
                    <Row className="row-cols-1 row-cols-md-3 g-4">
                        {/* Testimonio 1 */}
                        <Col>
                            <Card className="h-100 testimonial-card border-0 shadow-sm">
                                <Card.Body className="p-4">
                                    <Card.Text className="mb-4">
                                        "Excelente atención y productos de primera calidad. Encuentro todo lo que necesito 
                                        para mi familia en un solo lugar. ¡Muy recomendable!"
                                    </Card.Text>
                                    <div className="testimonial-footer">
                                        <h6 className="mb-1">María González</h6>
                                        <small className="text-muted">Cliente desde 2010</small>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Testimonio 2 */}
                        <Col>
                            <Card className="h-100 testimonial-card border-0 shadow-sm">
                                <Card.Body className="p-4">
                                    <Card.Text className="mb-4">
                                        "Mi tienda favorita para hacer todas mis compras. Excelente variedad 
                                        de productos y siempre con las mejores ofertas."
                                    </Card.Text>
                                    <div className="testimonial-footer">
                                        <h6 className="mb-1">Carlos Rodríguez</h6>
                                        <small className="text-muted">Cliente desde 2015</small>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Testimonio 3 */}
                        <Col>
                            <Card className="h-100 testimonial-card border-0 shadow-sm">
                                <Card.Body className="p-4">
                                    <Card.Text className="mb-4">
                                        "La atención al cliente es excepcional. Siempre me asesoran 
                                        para encontrar exactamente lo que estoy buscando."
                                    </Card.Text>
                                    <div className="testimonial-footer">
                                        <h6 className="mb-1">Ana Martínez</h6>
                                        <small className="text-muted">Cliente desde 2018</small>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Llamado a la acción */}
            <section className="py-5 bg-primary text-white text-center">
                <Container>
                    <h2 className="mb-4">¿Listo para descubrir todo lo que TiendaMi tiene para ofrecerte?</h2>
                    <p className="lead mb-4">
                        Únete a nuestra gran familia de clientes satisfechos que ya confían en nosotros 
                        para todas sus necesidades de compra.
                    </p>
                    <Button
                        variant="light"
                        size="lg"
                        className="px-4"
                        onClick={() => navigate('/contact')}
                    >
                        Contáctanos
                    </Button>
                </Container>
            </section>
        </div>
    );
};

export default About;