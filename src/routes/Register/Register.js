import React from "react";
import "./Register.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login__left">
        <img
          className="login__left__image"
          src="https://www.ilovepdf.com/img/ilovepdf.svg"
          alt="ilove"
        />
        <h3 className="login__left__title">Create new account</h3>

        <div class="login__left__social-auth--big-buttons">
          <ul class="login__left__auth-clients">
            <li>
              <a
                class="facebook login__left__auth-link"
                href="/auth/auth?authclient=facebook"
                title="Facebook"
              >
                <span class="login__left__auth-icon facebook">
                  <img
                    src="https://www.ilovepdf.com/img/svg_icons/auth_facebook--sm.svg"
                    alt="love"
                  />
                </span>
                <span class="login__left__auth-link__text">
                  Sign up with Facebook
                </span>
              </a>
            </li>
            <li>
              <a
                class="login__left__google auth-link"
                href="/auth/auth?authclient=google"
                title="Google"
              >
                <span class="auth-icon google">
                  <img
                    src="https://www.ilovepdf.com/img/svg_icons/auth_google--sm.svg"
                    alt="google"
                  />
                </span>
                <span class="login__left__second__auth-link__text">
                Sign up with Google
                </span>
              </a>
            </li>
          </ul>
        </div>
        <form id="loginForm" action="/login" method="post">
          <div className="login__left__wrapper">
            <input
              className="login__left__first"
              type="text"
              placeholder="Name"
            />
            <input
              className="login__left__first"
              type="text"
              placeholder="Email"
            />
             <input
              className="login__left__first"
              type="text"
              placeholder="Password"
            />
          </div>
          <a href="#" className="login__form__forget">
            Forgot your password?
          </a>
          <button className="login__left__btn" type="submit">
           Sign up
          </button>

          <p>
          Already member?&nbsp;&nbsp;
            <a href="/src/routes/Register/Register.js" className="goRegister">
             Log in
            </a>
          </p>
        </form>
      </div>
      <div className="login__right">
        <img
          className="login__right__photo"
          src="https://www.ilovepdf.com/img/auth/ilovepdf.png"
          alt="ilovepdf"
        />
        <h3 className="login__right__title">PDF tools for productive people</h3>
        <p className="login__right__text">
          iLovePDF helps you convert, edit, e-sign, and protect PDF files
          quickly and easily. Enjoy a full suite of tools to effectively manage
          documents —no matter where you’re working.
        </p>
      </div>
    </div>
  );
};

export default Login;
