import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/adminPage">
        TAMBITO ADMIN
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
            <Link className="nav-link" to="/adminPage/GestionProducto">
              Gestión Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/adminPage/PerfilAdmin">
              Perfil
            </Link>
          </li>
        </ul>

        <button className="btn text-white" onClick={() => navigate('/')}>
          salir
        </button>
      </div>
    </nav>
  );
};

export default Navbar;