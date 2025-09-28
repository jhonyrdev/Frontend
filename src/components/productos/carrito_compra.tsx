import React, { useEffect, useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Carrito_Compra: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Verifica si es desktop para mostrar o no el overlay
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 992);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Bloquea el scroll del fondo solo en desktop
  useEffect(() => {
    if (isOpen && isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isDesktop]);

  return (
    <>
      {isOpen && isDesktop && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
          aria-label="Cerrar al hacer clic fuera"
        />
      )}

      {/* Sidebar */}
      <div className={`custom-sidebar ${isOpen ? 'show' : ''}`}>
        <div className="sidebar-header">
          <h5 className="mb-0">Mi Carrito</h5>
          <button onClick={onClose} className="btn-close" aria-label="Cerrar" />
        </div>
        <div className="p-3">
          <p>Contenido del carrito</p>
        </div>
      </div>
    </>
  );
};

export default Carrito_Compra;
