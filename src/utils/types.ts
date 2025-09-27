export interface Categoria {
  id: number;
  nombre: string;
}

export interface Producto {
  id?: number;
  nombre: string;
  categoria: Categoria;
  precio: number;
  stock: number;
}
