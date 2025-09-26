export async function loginUsuario(email: string, password: string) {
  const res = await fetch("http://localhost:8080/api/usuarios/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error: any = new Error("Error en login");
    error.status = res.status;
    throw error;
  }

  return await res.json();
}
