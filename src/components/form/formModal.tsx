import React, { useState, useEffect } from 'react';

type FormType = 'login' | 'register';

interface AuthModalProps {
  show: boolean;
  onClose: () => void;
}

const FormModal: React.FC<AuthModalProps> = ({ show, onClose }) => {
  const [formType, setFormType] = useState<FormType>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (show) {
      setFormType('login');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  }, [show]);

  const toggleFormType = () => {
    setFormType(prev => (prev === 'login' ? 'register' : 'login'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formType === 'register' && password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    alert(`${formType === 'login' ? 'Login' : 'Registro'} con email: ${email}`);
    onClose();
  };

  if (!show) return null;

  return (
    <>
      <div className="modal show d-block" tabIndex={-1} style={{ zIndex: 1055 }}>
        <div className="modal-backdrop fade show" style={{ zIndex: -1050 }}></div>
        <div className="modal-dialog" onClick={onClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">
                {formType === 'login' ? 'Login' : 'Registro'}
              </h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                {formType === 'register' && (
                  <div className="mb-3">
                    <label>Confirmar Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  {formType === 'login' ? 'Ingresar' : 'Registrarse'}
                </button>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={toggleFormType}
                >
                  {formType === 'login' ? 'Crear cuenta' : 'Ya tengo cuenta'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default FormModal;