import React, { useEffect, useState } from "react";
import type { Producto, Categoria } from "../../utils/types";
import { getCategorias } from "../../utils/Producto/categoria.utils";
import {
  crearProducto,
  actualizarProducto,
} from "../../utils/Producto/producto.utils";

interface ProductFormProps {
  modo: "registro" | "actualizar";
  onClose: () => void;
  onSubmit: () => void;
  productoExistente?: Producto;
}

const ProductForm: React.FC<ProductFormProps> = ({
  modo,
  onClose,
  onSubmit,
  productoExistente,
}) => {
  const [nombre, setNombre] = useState("");
  const [categoriaId, setCategoriaId] = useState<number | "">("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState(1);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  // cargar categorías
  useEffect(() => {
    getCategorias().then((data) => {
      setCategorias(data);
    });
  }, [modo]);

  // precargar datos si es actualización
  useEffect(() => {
    if (modo === "actualizar" && productoExistente) {
      setNombre(productoExistente.nombre);
      setCategoriaId(productoExistente.categoria.id);
      setPrecio(productoExistente.precio.toString());
      setStock(productoExistente.stock);
    }
  }, [modo, productoExistente]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoriaId) return;

    // Validar que los valores numéricos sean válidos
    const precioNum = parseFloat(precio);
    if (isNaN(precioNum) || precioNum <= 0) {
      alert("Por favor ingresa un precio válido");
      return;
    }

    if (isNaN(stock) || stock <= 0) {
      alert("Por favor ingresa una cantidad válida");
      return;
    }

    try {
      const categoriaSeleccionada = categorias.find((c) => c.id === categoriaId);
      if (!categoriaSeleccionada) {
        alert("Por favor selecciona una categoría válida");
        return;
      }

      const productoData = {
        nombre,
        precio: precioNum,
        stock,
        categoria: categoriaSeleccionada,
      };

      console.log("Datos que se van a enviar:", productoData);

      if (modo === "registro") {
        await crearProducto(productoData);
        alert("Producto registrado correctamente");
      } else if (modo === "actualizar" && productoExistente) {
        const productoActualizado = {
          id: productoExistente.id,
          ...productoData
        };
        console.log("Datos de actualización:", productoActualizado);
        await actualizarProducto(productoActualizado);
        alert("Producto actualizado correctamente");
      }

      onSubmit();
      onClose();
    } catch (err) {
      console.error("Error completo:", err);
      alert("Error al guardar el producto");
    }
  };

  return (
    <>
      <div className="modal-header border-0">
        <h5 className="modal-title">
          {modo === "registro" ? "Registrar Producto" : "Actualizar Producto"}
        </h5>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="modal-body">
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="nombreInput" className="form-label">
              Nombre del Producto
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreInput"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          {/* Categoría */}
          <div className="mb-3">
            <label htmlFor="categoriaSelect" className="form-label">
              Categoría
            </label>
            <select
              id="categoriaSelect"
              className="form-select"
              value={categoriaId}
              onChange={(e) => {
                const value = e.target.value;
                setCategoriaId(value === "" ? "" : Number(value));
              }}
              required
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Precio */}
          <div className="mb-3">
            <label htmlFor="precioInput" className="form-label">
              Precio (S/)
            </label>
            <input
              type="number"
              className="form-control"
              id="precioInput"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              step="0.01"
              required
            />
          </div>

          {/* Stock */}
          <div className="mb-3">
            <label htmlFor="stockInput" className="form-label">
              Cantidad Disponible
            </label>
            <input
              type="number"
              className="form-control"
              id="stockInput"
              value={stock}
              onChange={(e) => setStock(parseInt(e.target.value))}
              min={1}
              required
            />
          </div>
        </div>

        <div className="modal-footer border-0">
          <button type="submit" className="btn btn-primary w-100">
            {modo === "registro" ? "Registrar Producto" : "Actualizar Producto"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;