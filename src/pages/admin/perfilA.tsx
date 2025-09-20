const PerfilA = () => {
    const admin = {
    name: 'Carlos Pérez',
    email: 'carlos.perez@tambito.com',
    role: 'Administrador',
    avatarUrl: 'https://static.vecteezy.com/system/resources/thumbnails/023/402/476/small_2x/man-avatar-free-vector.jpg',
  };
    return ( <><div className="container my-5">
      <h2 className="mb-4"><i className="fas fa-user-cog me-2"></i>Perfil de Administrador</h2>

      <div className="row">
        {/* Foto de perfil */}
        <div className="col-md-4 text-center mb-4">
          <img
            src={admin.avatarUrl}
            alt="Foto de perfil"
            className="rounded-circle img-thumbnail"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>

        {/* Información */}
        <div className="col-md-8">
          <div className="mb-3">
            <h4>{admin.name}</h4>
            <p className="text-muted">{admin.role}</p>
          </div>
          <div className="mb-3">
            <strong>Email:</strong>
            <p>{admin.email}</p>
          </div>

          <button className="btn btn-primary">
            <i className="fas fa-edit me-2"></i>Editar Perfil
          </button>
        </div>
      </div>
    </div></> );
}
 
export default PerfilA;