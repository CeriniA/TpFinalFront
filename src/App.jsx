import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            TiendaMi
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Sobre Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow-1 py-1">
        <div className="container">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-3 mt-auto">
        <div className="container text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} TiendaMi - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
