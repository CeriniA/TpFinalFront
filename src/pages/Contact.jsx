import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [validated, setValidated] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            // Aquí iría la lógica para enviar el formulario
            console.log('Formulario enviado:', formData);
            setShowSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Ocultar el mensaje de éxito después de 5 segundos
            setTimeout(() => setShowSuccess(false), 5000);
        }
        
        setValidated(true);
    };

    return (
        <div className="contact-page py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h1 className="display-5 fw-bold text-primary mb-3">Contáctanos</h1>
                        <p className="lead text-muted">
                            ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte. 
                            Completa el formulario y te responderemos a la brevedad.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={8}>
                        {showSuccess && (
                            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                                ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                            </Alert>
                        )}

                        <Form noValidate validated={validated} onSubmit={handleSubmit} className="shadow-sm p-4 bg-white rounded">
                            <Row className="mb-3">
                                <Col md={6} className="mb-3 mb-md-0">
                                    <Form.Group controlId="formName">
                                        <Form.Label>Nombre completo</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa tu nombre.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Correo electrónico</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tucorreo@ejemplo.com"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa un correo electrónico válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formSubject">
                                <Form.Label>Asunto</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="¿Sobre qué quieres contactarnos?"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor ingresa un asunto.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formMessage">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Escribe tu mensaje aquí..."
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor escribe tu mensaje.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Button 
                                    variant="outline-secondary" 
                                    className="me-md-2"
                                    onClick={() => navigate(-1)}
                                >
                                    Volver
                                </Button>
                                <Button 
                                    variant="primary" 
                                    type="submit"
                                    className="px-4"
                                >
                                    Enviar mensaje
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={4} className="mb-4 mb-md-0">
                        <div className="text-center">
                            <div className="contact-icon mb-3">
                                <i className="bi bi-geo-alt-fill fs-1 text-primary"></i>
                            </div>
                            <h5>Dirección</h5>
                            <p className="text-muted mb-0">Av. Principal 1234</p>
                            <p className="text-muted">Buenos Aires, Argentina</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <div className="text-center">
                            <div className="contact-icon mb-3">
                                <i className="bi bi-telephone-fill fs-1 text-primary"></i>
                            </div>
                            <h5>Teléfono</h5>
                            <p className="text-muted mb-0">+54 11 1234-5678</p>
                            <p className="text-muted">Lunes a Viernes de 9:00 a 18:00</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="text-center">
                            <div className="contact-icon mb-3">
                                <i className="bi bi-envelope-fill fs-1 text-primary"></i>
                            </div>
                            <h5>Correo electrónico</h5>
                            <p className="text-muted mb-0">info@tiendami.com</p>
                            <p className="text-muted">Soporte 24/7</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;