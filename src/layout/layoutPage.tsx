import Footer from "@components/commons/footer";
import Header from "@components/commons/header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FormModal } from "@components/modal";
import { AuthForm } from "@components/auth";
import Carrito_Compra from "@components/productos/carrito_compra";

const LayoutPage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="layout-admin d-flex flex-column min-vh-100">
      <Header onAuthIconClick={() => setShowAuthModal(true)} openSidebar={() => setSidebarOpen(true)} />
      
      <Carrito_Compra isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
      
      <FormModal show={showAuthModal} onClose={() => setShowAuthModal(false)}>
        <AuthForm onClose={() => setShowAuthModal(false)} />
      </FormModal>

      <main className="flex-grow-1">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default LayoutPage;
