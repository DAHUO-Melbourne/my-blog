import type { NextPage } from 'next';
import { navs } from './config';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: NextPage = () => {
  const { pathname, push } = useRouter();
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
    </div>
  );
};

export default Navbar;
