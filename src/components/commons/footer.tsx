const Footer = () => {
  return (
    <>
      <footer className="footer-inferior bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <span className="text-warning">TiendaOnline</span>
            </div>

            <div className="col-md-4 mb-3">
              <h6 className="text-uppercase fw-bold">Enlaces</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="/productos"
                    className="text-white text-decoration-none"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    href="/ofertas"
                    className="text-white text-decoration-none"
                  >
                    Ofertas
                  </a>
                </li>
                <li>
                  <a
                    href="/nosotros"
                    className="text-white text-decoration-none"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="text-white text-decoration-none"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-3">
              <h6 className="text-uppercase fw-bold">Síguenos</h6>
              <div className="d-flex">
                <a href="#" className="me-3 text-white">
                  <i className="fa-brands fa-facebook fs-5"></i>
                </a>
                <a href="#" className="me-3 text-white">
                  <i className="fa-brands fa-instagram fs-5"></i>
                </a>
                <a href="#" className="me-3 text-white">
                  <i className="fa-brands fa-tiktok fs-5"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fa-brands fa-whatsapp fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 pt-3 border-top border-secondary">
            <p className="mb-0 small">
              &copy; 2025 TiendaOnline. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
