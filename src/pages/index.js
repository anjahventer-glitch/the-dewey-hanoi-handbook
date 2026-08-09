import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function LandingPage() {
  return (
    <Layout title="The Hanoi Handbook">
      <main className={styles.landing}>
        <div className={styles.landingContent}>
          <img
             src="/img/logo.png"
             alt="The Dewey Schools"
             className={styles.landingLogo}
/>
          <h1 className={styles.landingTitle}>
  The Dewey School
  <br />
  Hanoi Handbook
</h1>

          <p className={styles.landingSubtitle}>
            Everything you need to live, work and thrive in Hanoi.
          </p>

          <Link className={styles.landingButton} to="/home">
            Let's get Started
          </Link>
        </div>
      </main>
    </Layout>
  );
}
