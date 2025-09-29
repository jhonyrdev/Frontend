import React, { useState, useEffect } from 'react';

type Producto = {
  img: string;
  name: string;
  precio: string;
  precioOferta?: string;
};

type Props = {
  show: boolean;
  onClose: () => void;
  producto: Producto;
};

const ProductoBox: React.FC<Props> = ({ show, onClose, producto }) => {
  const [cantidad, setCantidad] = useState<number>(1);
  const [temperatura, setTemperatura] = useState<string>('');

  const precioNumerico = parseFloat(producto.precio.replace('S/', '').trim()) || 0;
  const total = (cantidad * precioNumerico).toFixed(2);

  // Reset cuando se abre el modal
  useEffect(() => {
    if (show) {
      setCantidad(1);
      setTemperatura('');
      // Deshabilitar scroll del body
      document.body.style.overflow = 'hidden';
    } else {
      // Rehabilitar scroll del body
      document.body.style.overflow = 'unset';
    }

    // Cleanup: asegurar que el scroll se rehabilite al desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  const agregarProducto = () => {
    if (!temperatura) {
      alert('Seleccione una temperatura.');
      return;
    }
    alert(`Agregado ${cantidad}x ${producto.name} (${temperatura})`);
    onClose();
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
        style={{ zIndex: 1050 }}
      />
      
      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        onClick={onClose}
        style={{ zIndex: 1051 }}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h5 className="modal-title">{producto.name}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="row">
                <div className="col-md-5 text-center mb-3 mb-md-0">
                  <img
                    src={producto.img}
                    alt={producto.name}
                    className="img-fluid rounded"
                    style={{ maxHeight: '350px', objectFit: 'contain' }}
                  />
                </div>
                
                <div className="col-md-7 d-flex flex-column">
                  {/* Precio */}
                  <div className="mb-3">
                    {producto.precioOferta && (
                      <span className="text-muted text-decoration-line-through me-2">
                        {producto.precioOferta}
                      </span>
                    )}
                    <span className="fs-5 fw-bold text-primary">{producto.precio}</span>
                  </div>

                  <p className="text-muted">Descripción breve o promo del producto.</p>

                  {/* Temperatura */}
                  <div className="mb-3">
                    <h6 className="fw-bold">
                      Temperatura{' '}
                      <span className="badge bg-warning text-dark">Obligatorio</span>
                    </h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="temperatura"
                        id="caliente"
                        value="Caliente"
                        checked={temperatura === 'Caliente'}
                        onChange={(e) => setTemperatura(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="caliente">
                        Caliente
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="temperatura"
                        id="refrigerada"
                        value="Refrigerada"
                        checked={temperatura === 'Refrigerada'}
                        onChange={(e) => setTemperatura(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="refrigerada">
                        Refrigerada
                      </label>
                    </div>
                  </div>

                  {/* Espaciador flexible para empujar el contenido al fondo */}
                  <div className="flex-grow-1"></div>

                  {/* Cantidad y Agregar - Siempre al fondo */}
                  <div className="d-flex align-items-center gap-3 flex-wrap mt-auto">
                    <div className="input-group" style={{ maxWidth: '120px' }}>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                        type="button"
                      >
                        −
                      </button>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={cantidad}
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setCantidad(cantidad + 1)}
                        type="button"
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-primary flex-grow-1"
                      onClick={agregarProducto}
                      type="button"
                    >
                      Agregar - S/ {total}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductoBox;