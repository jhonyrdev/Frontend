import { useState, useEffect } from "react";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const pass = prompt("🔒 Ingresa la contraseña de administrador:");

    if (pass) {
      fetch("http://localhost:8080/api/usuarios/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pass }),
      })
        .then((res) => {
          if (res.ok) {
            setAllowed(true);
          } else {
            alert("Contraseña incorrecta");
            window.location.href = "/";
          }
        })
        .catch(() => {
          alert("Error de conexión");
          window.location.href = "/";
        });
    } else {
      window.location.href = "/";
    }
  }, []);

  return allowed ? children : null;
}