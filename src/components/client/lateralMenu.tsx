import { NavLink } from "react-router-dom";

interface Props {
  onSelect: () => void;
}

const LateralMenu: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="p-4 text-center text-md-start">
      <img
        src="https://thumbs.dreamstime.com/b/avatar-adolescente-del-car%C3%A1cter-de-la-muchacha-79699149.jpg"
        alt="Avatar"
        className="rounded-circle mb-2"
        width={80}
        height={80}
      />
      <h5 className="fw-bold">¡Hola!</h5>

      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <NavLink
            to="/cuenta"
            end
            className="nav-link btn btn-link text-start text-black w-100"
            onClick={onSelect}
          >
            Mi Perfil
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/cuenta/direccion"
            className="nav-link btn btn-link text-start text-black w-100"
            onClick={onSelect}
          >
            Mis Direcciones
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/cuenta/pedido"
            className="nav-link btn btn-link text-start text-black w-100"
            onClick={onSelect}
          >
            Mis Pedidos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/cuenta/gestor"
            className="nav-link btn btn-link text-start text-black w-100"
            onClick={onSelect}
          >
            Cambiar Contraseña
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className="btn btn-link text-start w-100 text-black text-decoration-none"
            onClick={onSelect}
          >
            Cerrar Sesión
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LateralMenu;
