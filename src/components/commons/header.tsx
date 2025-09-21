import { Link } from 'react-router-dom';

interface HeaderProps {
  onAuthIconClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthIconClick }) => {
  return (
    <>
      {/* Barra superior */}
      <div className="fondo-color-principal text-white d-flex justify-content-center align-items-center px-5 py-1">
        <span>¡Sobrín@ entregamos tu pedido en 30 minutos!</span>
      </div>

      {/* Navbar principal */}
      <nav className="navbar bg-white shadow-sm py-2">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand color-principal " to="/">
            <span>Tambito+</span>
          </Link>

          <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item d-none d-md-block">
                <a className="color-principal me-2 d-flex align-items-center text-decoration-none" href="#">
                  Categorías <i className="fa-solid fa-chevron-down ms-1"></i>
                </a>
              </li>
            </ul>

          <div className="d-flex align-items-center">
            {/* Search */}
            <span className="color-principal clickable fs-6 me-3 d-none d-lg-block">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>

            {/* Admin - Hidden*/}
            <Link to="/adminPage" className="color-principal fs-6 me-3 d-none d-md-block">
              <i className="fa-solid fa-wrench"></i>
            </Link>

            {/* User*/}
            <span className="color-principal clickable fs-6 me-3 d-none d-md-block">
              <i className="fa-regular fa-circle-user" onClick={onAuthIconClick}></i>
            </span>

            <span
              className="border-end me-3 d-none d-lg-block"
              style={{ height: "20px" }}
            ></span>

            {/* Shopping bag*/}
            <span className="color-principal clickable fs-6 me-3">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>

            {/* Botón hamburguesa */}
            <button
              className="btn p-0 border-0 d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            >
              <i className="fa-solid fa-bars fs-4 color-principal"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu en Mobile */}
      <div
        className="offcanvas offcanvas-start w-100"
        tabIndex={-1}
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold" id="offcanvasMenuLabel">
            Menú
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className="mb-3">
              <a className="color-principal w-100 d-flex align-items-center justify-content-between text-decoration-none" href="#">
                <span>Categorías</span><i className="fa-solid fa-chevron-down ms-1"></i>
              </a>
            </li>
            <li className="mb-3">
              <span className="color-principal clickable fs-6 d-flex align-items-center text-decoration-none" onClick={onAuthIconClick}>
                <i className="fa-regular fa-circle-user me-2"></i>Mi Cuenta
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;