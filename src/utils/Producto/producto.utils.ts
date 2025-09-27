import type { Producto } from "../types";

const API_URL = "http://localhost:8080/api/productos";

export async function getProductos(): Promise<Producto[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener productos");
  return await res.json();
}

export async function crearProducto(producto: Producto): Promise<Producto> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  if (!res.ok) throw new Error("Error al crear producto");
  return await res.json();
}

export async function actualizarProducto(producto: Producto): Promise<Producto> {
  if (!producto.id) throw new Error("El producto necesita un id para actualizarse");

  const res = await fetch(`${API_URL}/${producto.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  if (!res.ok) throw new Error("Error al actualizar producto");
  return await res.json();
}

export async function eliminarProducto(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar producto");
}
