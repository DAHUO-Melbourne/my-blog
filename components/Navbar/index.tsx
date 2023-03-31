import type { NextPage } from 'next';
import { navs } from './config';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { useState } from 'react';
import Login from 'components/Login';

const Navbar: NextPage = () => {
  const { pathname, push } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleGotoEditorPage = () => {};

  const handleLogin = () => {
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };
  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>Blog-C</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link
            href={nav?.value}
            key={nav?.value}
            className={pathname === nav?.value ? styles.active : ''}
          >
            {nav?.label}
          </Link>
        ))}
      </section>
      <section className={styles.operatonArea}>
        <Button onClick={handleGotoEditorPage}>articals</Button>
        <Button type="primary" onClick={handleLogin}>
          login
        </Button>
      </section>
      <Login isShow={isShowLogin} onClose={handleClose} />
    </div>
  );
};

export default Navbar;
