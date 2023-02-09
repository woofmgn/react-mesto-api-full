import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";

interface IRegisterProps {
  email: string;
  setEmail: (newEmail: string) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  onRegister: () => void;
}

const Register: React.FC<IRegisterProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onRegister,
}) => {
  const handleChangeEmail = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handleChangePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleRegisterSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    onRegister();
  };

  return (
    <>
      <section className="auth auth_type_signup">
        <h3 className="auth__title">Регистрация</h3>
        <form
          className="auth-form auth-form__registration"
          onSubmit={handleRegisterSubmit}
        >
          <input
            className="auth-form__input auth-form__input_type_email popup__form-item"
            type="email"
            placeholder="Email"
            onChange={handleChangeEmail}
            value={email || ""}
          />
          <input
            className="auth-form__input auth-form__input_type_password popup__form-item"
            type="password"
            placeholder="Пароль"
            onChange={handleChangePassword}
            value={password || ""}
          />
          <button className="auth-form__submit">Зарегистрироваться</button>
        </form>
        <p className="auth__subtitle">
          Уже зарегистрированы?
          <Link className="auth__link" to="/sign-in">
            Войти
          </Link>
        </p>
      </section>
    </>
  );
};

export default Register;
