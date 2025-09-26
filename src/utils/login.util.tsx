export async function loginUsuario(email: string, password: string) {
  try {
    const response = await fetch("http://localhost:8080/api/usuarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Credenciales inválidas");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
}
