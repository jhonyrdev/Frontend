const GestionProductos = () => {
  return (
    <>
      <div className="container my-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>
            <i className="fas fa-boxes me-2"></i>Gestión de Productos
          </h2>
          <button className="btn btn-primary">
            <i className="fas fa-plus me-1"></i> Agregar Producto
          </button>
        </div>

        {/* Tabla de productos */}
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio (S/.)</th>
                <th>Stock</th>
                <th className="text-center" style={{ width: "120px" }}>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {"se genera Dinamicamente"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GestionProductos;
