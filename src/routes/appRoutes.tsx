import { Routes, Route } from "react-router-dom";
import LayoutPage from "../layout/layoutPage";
import Inicio from "../pages/inicio";
import Contacto from "../pages/contacto";
import Fq from "../pages/fq";
import LayoutAdmin from "../layout/layoutAdmin";
import Dashboard from "../pages/admin/dashboard";
import GestionProductos from "../pages/admin/gestionProducto";
import PerfilA from "../pages/admin/perfilA";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas con layout común (Header/Footer) */}
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Inicio />} />
        <Route path="fq" element={<Fq />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
      <Route path="/adminPage" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="GestionProducto" element={<GestionProductos />} />
        <Route path="PerfilAdmin" element={<PerfilA />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;