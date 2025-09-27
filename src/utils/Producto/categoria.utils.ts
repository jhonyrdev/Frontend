import type { Categoria } from "../types";

const API_URL = "http://localhost:8080/api/categorias";

export async function getCategorias(): Promise<Categoria[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener categorías");
  return await res.json();
}

export async function getCategoriaById(id: number): Promise<Categoria> {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Error al obtener la categoría");
  return await res.json();
}