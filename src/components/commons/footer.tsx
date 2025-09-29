const Footer = () => {
  return (
    <>
      <footer className="footer-inferior fondo-color-principal-parcial text-black pt-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-4 mb-3 fs-2">
              <span className="color-principal fw-bold">TAMBITO</span>
            </div>

            <div className="col-md-4 mb-3">
              <h6 className="text-uppercase fw-bold">Enlaces</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="/productos"
                    className="text-black text-decoration-none"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    href="/ofertas"
                    className="text-black text-decoration-none"
                  >
                    Ofertas
                  </a>
                </li>
                <li>
                  <a
                    href="/nosotros"
                    className="text-black text-decoration-none"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="text-black text-decoration-none"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-3">
              <h6 className="text-uppercase fw-bold">Síguenos</h6>
              <div className="d-flex ">
                <a href="#" className="me-3 text-black">
                  <i className="fa-brands fa-facebook fs-5"></i>
                </a>
                <a href="#" className="me-3 text-black">
                  <i className="fa-brands fa-instagram fs-5"></i>
                </a>
                <a href="#" className="me-3 text-black">
                  <i className="fa-brands fa-tiktok fs-5"></i>
                </a>
                <a href="#" className="text-black">
                  <i className="fa-brands fa-whatsapp fs-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fondo-color-principal text-white text-center mt-4 pt-3 pb-3 border-top border-secondary">
          <p className="mb-0 small">
            &copy; 2025 <span className="fw-bold">TAMBITO</span>. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
