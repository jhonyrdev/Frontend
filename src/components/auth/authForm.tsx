import React, { useState } from 'react';

type FormType = 'login' | 'register';

interface AuthFormProps {
  onClose: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onClose }) => {
  const [formType, setFormType] = useState<FormType>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleFormType = () => {
    setFormType(prev => (prev === 'login' ? 'register' : 'login'));
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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

  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">{formType === 'login' ? 'Login' : 'Registro'}</h5>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {formType === 'register' && (
            <div className="mb-3">
              <label htmlFor="confirmPasswordInput" className="form-label">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPasswordInput"
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
    </>
  );
};

export default AuthForm;