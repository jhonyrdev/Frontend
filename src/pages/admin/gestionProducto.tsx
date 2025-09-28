import { useEffect, useState } from "react";
import { FormModal } from "@components/modal";
import ProductForm from "@components/auth/productoForm";
import type { Producto } from "../../utils/types";
import {
  getProductos,
  eliminarProducto,
} from "../../utils/Producto/producto.utils";

const GestionProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [modoForm, setModoForm] = useState<"registro" | "actualizar">(
    "registro"
  );
  const [productoEditando, setProductoEditando] = useState<Producto | null>(
    null
  );

  const cargarProductos = async () => {
    try {
      const data = await getProductos();
      setProductos(data);
    } catch {
      alert("Error al cargar productos");
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleAgregarProducto = () => {
    setModoForm("registro");
    setProductoEditando(null);
    setShowProductModal(true);
  };

  const handleEditar = (producto: Producto) => {
    setModoForm("actualizar");
    setProductoEditando(producto);
    setShowProductModal(true);
  };

  const handleEliminar = async (id: number) => {
    const confirmar = window.confirm("¿Eliminar este producto?");
    if (confirmar) {
      try {
        await eliminarProducto(id);
        cargarProductos();
      } catch {
        alert("Error al eliminar producto");
      }
    }
  };

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>
          <i className="fas fa-boxes me-2"></i>Gestión de Productos
        </h2>
        <button className="btn btn-primary" onClick={handleAgregarProducto}>
          <i className="fas fa-plus me-1"></i> Agregar Producto
        </button>
      </div>

      {/* Modal */}
      <FormModal
        show={showProductModal}
        onClose={() => setShowProductModal(false)}
      >
        <ProductForm
          modo={modoForm}
          onClose={() => setShowProductModal(false)}
          onSubmit={cargarProductos}
          productoExistente={productoEditando || undefined}
        />
      </FormModal>

      {/* Tabla */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio (USD)</th>
              <th>Stock</th>
              <th className="text-center" style={{ width: "150px" }}>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">
                  No hay productos registrados.
                </td>
              </tr>
            ) : (
              productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.categoria.nombre}</td>
                  <td>S/ {producto.precio.toFixed(2)}</td>
                  <td>{producto.stock}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEditar(producto)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleEliminar(producto.id!)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestionProductos;
