const API_URL = "http://localhost:8080/api/usuarios/login";
const API_URL1 = "http://localhost:8080/api/usuarios/register";

export async function loginUsuario(email: string, password: string) {
  const res = await fetch(API_URL, {
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

export async function registrarUsuario(email: string, password: string) {
  try {
    const response = await fetch(API_URL1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Error en el registro");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}