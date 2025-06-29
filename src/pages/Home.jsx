// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard'; // Importamos el componente
import './Home.css';

function Home() {
  // Datos de las características
  const features = [
    { 
      id: 1,
      icon: '🚀', 
      title: 'Envío Rápido', 
      text: 'Recibe tus productos en tiempo récord' 
    },
    { 
      id: 2,
      icon: '💎', 
      title: 'Calidad Premium', 
      text: 'Productos de la mejor calidad' 
    },
    { 
      id: 3,
      icon: '🔒', 
      title: 'Pago Seguro', 
      text: 'Tus datos siempre protegidos' 
    }
  ];

  return (
    <div className="container my-1">
      <section className="p-5 text-center rounded-3 welcome-section">
        <div className="container-fluid py-5">
          <h1 className="display-4 fw-bold mb-4 welcome-title">
            ¡Bienvenido a TiendaMi!
          </h1>
          <p className="fs-4 text-muted mb-4">Descubre nuestros increíbles productos</p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              to="/products" 
              className="btn btn-lg px-4 me-2 btn-primary-gradient"
            >
              Ver Productos
            </Link>
            <Link 
              to="/about" 
              className="btn btn-lg px-4 btn-outline-gradient"
            >
              Conócenos
            </Link>
          </div>
        </div>
      </section>
      
      {/* Sección de características */}
      <section className="row mt-4 g-4">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;