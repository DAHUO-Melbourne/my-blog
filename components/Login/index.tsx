import { NextPage } from 'next';
import React, { useState, ChangeEvent } from 'react';
import styles from './index.module.scss';

interface LoginProps {
  isShow: boolean;
  onClose: () => void;
}

const Login: NextPage<LoginProps> = ({
  isShow = false,
  onClose,
}: LoginProps) => {
  const [form, setForm] = useState({
    phone: '',
    verify: '',
  });
  const handleGetVerifyCode = () => {};

  const handleOAuthGithub = () => {};

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = () => {};
  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>
          <div>phone num login</div>
          <div className={styles.close} onClick={onClose}>
            x
          </div>
        </div>
        <input
          name="phone"
          type="text"
          placeholder="please input phone number"
          value={form.phone}
          onChange={handleFormChange}
        />
        <div className={styles.verifyCodeArea}>
          <input
            name="verify"
            type="text"
            placeholder="please input verify code"
            value={form.verify}
            onChange={handleFormChange}
          />
          <span className={styles.verifyCode} onClick={handleGetVerifyCode}>
            get verify code
          </span>
        </div>
        <div className={styles.loginBtn} onClick={handleLogin}>
          login
        </div>
        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          Use Github Login
        </div>
        <div className={styles.loginPrivacy}>
          register/login means agree with
          <a
            href="https://moco.imooc.com/privacy.html"
            target="_blank"
            rel="noreferrer"
          >
            Privacy policy
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
