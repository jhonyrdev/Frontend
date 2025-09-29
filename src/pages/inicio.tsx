import { useState } from "react";
import Hero from "@components/commons/hero";
import CategoriaCarousel from "@components/productos/categoria_carousel";
import ProductoBox from "@components/productos/productoBox";

type Producto = {
  img: string;
  name: string;
  precio: string;
  precioOferta: string;
};

const productos: Producto[] = [
  {
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/hTuZrHssnGE3TgpLm-300-x.webp",
    name: "Empanada de Pollo",
    precio: "S/ 3.40",
    precioOferta: "S/ 4.00",
  },
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.u8HFqVQ6Cq7DFvwIxng6oQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Coca-Cola 1.5L",
    precio: "S/ 5.25",
    precioOferta: "S/ 6.90",
  },
  {
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/hTuZrHssnGE3TgpLm-300-x.webp",
    name: "Empanada de Pollo",
    precio: "S/ 3.40",
    precioOferta: "S/ 4.00",
  },
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.u8HFqVQ6Cq7DFvwIxng6oQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Coca-Cola 1.5L",
    precio: "S/ 5.25",
    precioOferta: "S/ 6.90",
  },
  {
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/hTuZrHssnGE3TgpLm-300-x.webp",
    name: "Empanada de Pollo",
    precio: "S/ 3.40",
    precioOferta: "S/ 4.00",
  },
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.u8HFqVQ6Cq7DFvwIxng6oQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Coca-Cola 1.5L",
    precio: "S/ 5.25",
    precioOferta: "S/ 6.90",
  },
];

const Inicio = () => {
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<Producto | null>(null);

  const abrirModal = (producto: Producto) => {
    setProductoSeleccionado(producto);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
    setProductoSeleccionado(null);
  };

  return (
    <>
      <Hero />
      <CategoriaCarousel />

      <div className="container py-4">
        <h5 className="text-center color-principal mb-3">PRODUCTOS DESTACADOS</h5>
        <div className="row">
          <div className="productos-scroll-outer">
            {" "}
            {/* Cambiado */}
            <div className="productos-scroll-inner d-flex gap-3">
              {" "}
              {/* Cambiado */}
              {productos.map((producto, index) => (
                <div className="product-card" key={index}>
                  <div
                    className="card h-100 shadow-sm rounded position-relative clickable"
                    onClick={() => abrirModal(producto)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="position-absolute top-0 start-0 m-2 badge bg-danger">
                      Oferta
                    </span>

                    <img
                      src={producto.img}
                      className="card-img-top p-3"
                      alt={producto.name}
                      style={{ height: "140px", objectFit: "contain" }}
                    />

                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title mb-2 text-center">
                        {producto.name}
                      </h6>

                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <div className="text-muted text-decoration-line-through small">
                            {producto.precioOferta}
                          </div>
                          <div className="fw-bold fs-5">{producto.precio}</div>
                        </div>

                        <button className="boton p-2 rounded-circle border">
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal de producto */}
        {productoSeleccionado && (
          <ProductoBox
            show={showModal}
            onClose={cerrarModal}
            producto={productoSeleccionado}
          />
        )}

        {/* Botón centrado */}
        <div className="text-center mt-3">
          <button className="custom-btn">Ver todos los Productos</button>
        </div>
      </div>

      {/* Banner inferior */}
      <div className="fondo-color-banner text-center color-principal py-4">
        <div className="container">
          <h5 className="fw-bold mb-2">
            ¡Únete y recibe un{" "}
            <span className="text-dark">15% de descuento</span> en tu primer
            mandado!
          </h5>
          <p className="mb-0">
            Te avisamos primero sobre nuestras ofertas en abarrotes, despensa y
            todo lo que necesitas día a día.
          </p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
