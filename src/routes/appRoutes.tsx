import { Routes, Route } from "react-router-dom";
import LayoutPage from "../layout/layoutPage";
import LayoutAdmin from "../layout/layoutAdmin";
import LayoutCliente from "../layout/layoutCliente";

import Inicio from "../pages/inicio";
import Contacto from "../pages/contacto";
import Fq from "../pages/fq";

import Dashboard from "../pages/admin/dashboard";
import GestionProductos from "../pages/admin/gestionProducto";
import PerfilA from "../pages/admin/perfilA";
import PerfilC from "../pages/cliente/perfilC";
import DireccionC from "../pages/cliente/direccionC";
import PedidosC from "../pages/cliente/pedidosC";
import CambioC from "../pages/cliente/CambioC";

import ProtectedRoute from "../utils/restri.util";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas: layout PageWeb */}
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Inicio />} />
        <Route path="fq" element={<Fq />} />
        <Route path="contacto" element={<Contacto />} />

        {/* Rutas: layout Plataforma Cliente */}
        <Route path="/cuenta" element={<LayoutCliente />}>
          <Route index element={<PerfilC />} />
          <Route path="direccion" element={<DireccionC />} />
          <Route path="pedido" element={<PedidosC />} />
          <Route path="gestor" element={<CambioC />} />
        </Route>
      </Route>
      {/* Rutas: layout Plataforma Admin */}
      <Route
        path="/adminPage"
        element={
          <ProtectedRoute>
            <LayoutAdmin />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="GestionProducto" element={<GestionProductos />} />
        <Route path="PerfilAdmin" element={<PerfilA />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
