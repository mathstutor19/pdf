import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login__left">
        <img className="login__left__image" src="https://www.ilovepdf.com/img/ilovepdf.svg" alt="ilove" />
        <h3 className="login__left__title">Login to your account</h3>

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
                  Log in with Facebook
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
                <span class="login__left__second__auth-link__text">Log in with Google</span>
              </a>
            </li>
          </ul>
        </div>
        <form id="loginForm" action="/login" method="post">
          <div className="login__left__wrapper">
            <input
              className="login__left__first"
              type="text"
              placeholder="Enter your Email"
            />
             <input
              className="login__left__first"
              type="text"
              placeholder="Password"
            />
          </div>
          <a href="#" className="login__form__forget">Forgot your password?</a>
          <button className="login__left__btn" type="submit">Log in</button>

        <p>
            Don't have an account?&nbsp;&nbsp;<a href="https://www.ilovepdf.com/register" className="goRegister">Create an account</a>
        </p>
    
        </form>
      </div>
      <div className="login__right">
        <img
          className="login__right__photo"
          src="https://www.ilovepdf.com/img/auth/ilovepdf.png"
          alt="ilovepdf"
        />
        <h3 className="login__right__title">Log in to your workspace</h3>
        <p className="login__right__text">
          Enter your email and password to access your iLovePDF account. You are
          one step closer to boosting your document productivity.
        </p>
      </div>
    </div>
  );
};

export default Login;
