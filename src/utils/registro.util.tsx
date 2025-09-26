export async function registrarUsuario(email: string, password: string) {
  try {
    const response = await fetch("http://localhost:8080/api/usuarios/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Error en el registro");
    }

    return await response.json(); // devuelve el usuario registrado
  } catch (error) {
    console.error(error);
    throw error;
  }
}
