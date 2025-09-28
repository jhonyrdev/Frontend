import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ClienteSidebar from "@components/client/lateralMenu";

const LayoutCliente = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setShowMenu(!mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBackClick = () => {
    if (isMobile) {
      setShowMenu(true);
    } else {
      navigate("/carrito");
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Menú lateral */}
        {showMenu && (
          <div className="col-12 col-md-3 border-end">
            <ClienteSidebar onSelect={() => isMobile && setShowMenu(false)} />
          </div>
        )}

        {(!isMobile || !showMenu) && (
          <div className={showMenu && !isMobile ? "col-md-9" : "col-12"}>
            <div className="mb-3 px-3">
              <span
                className="color-principal clickable"
                role="button"
                onClick={handleBackClick}
              >
                ← {isMobile ? "Volver al menú" : "Volver a perfil"}
              </span>
            </div>
            <Outlet />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default LayoutCliente;