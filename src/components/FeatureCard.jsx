// src/components/FeatureCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../pages/Home.css'; // Importamos los estilos

/**
 * Componente FeatureCard que muestra una característica con ícono, título y descripción
 * @param {Object} props - Las propiedades del componente
 * @param {string} props.icon - El ícono a mostrar (emoji)
 * @param {string} props.title - El título de la característica
 * @param {string} props.text - La descripción de la característica
 * @returns {JSX.Element} El componente FeatureCard renderizado
 */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="col-md-4">
      <div className="feature-card">
        <div className="display-4 mb-3" role="img" aria-label={title}>
          {icon}
        </div>
        <h3 className="h4 mb-3 feature-title">{title}</h3>
        <p className="text-muted">{text}</p>
      </div>
    </div>
  );
}

// Definimos las PropTypes para validar las props
FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default FeatureCard;