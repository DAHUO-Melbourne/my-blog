import type { NextPage } from 'next';
import { navs } from './config';
import styles from './index.module.scss';
import Link from 'next/link';

const Navbar: NextPage = () => {
  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>Blog-C</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link href={nav?.value} key={nav?.value}>
            {nav?.label}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Navbar;
