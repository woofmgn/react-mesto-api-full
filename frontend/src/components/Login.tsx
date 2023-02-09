import React, { ChangeEvent } from "react";

interface ILoginProps {
  email: string;
  setEmail: (newEmail: string) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  onLogin: () => void;
}

const Login: React.FC<ILoginProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onLogin,
}) => {
  const handleChangeEmail = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handleChangePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleLoginSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    onLogin();
  };

  return (
    <>
      <section className="auth auth_type_signup">
        <h3 className="auth__title">Вход</h3>
        <form
          className="auth-form auth-form__login"
          onSubmit={handleLoginSubmit}
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
          <button className="auth-form__submit">Войти</button>
        </form>
      </section>
    </>
  );
};

export default Login;
