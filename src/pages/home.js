import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
const cards = [
  {
    title: '🏡 Living',
    description: 'Accommodation, internet, furniture and utilities.',
    link: '/docs/living',
  },
  {
    title: '🛵 Getting Around',
    description: 'Grab, buses, metro and motorbike tips.',
    link: '/docs/getting-around',
  },
  {
    title: '🍜 Food & Drink',
    description: 'Restaurants, cafés, grocery stores and delivery.',
    link: '/docs/food-and-drink',
  },
  {
    title: '🏥 Healthcare',
    description: 'Hospitals, clinics, pharmacies and dentists.',
    link: '/docs/healthcare',
  },
  {
    title: '🇻🇳 Culture',
    description: 'Etiquette, holidays and local customs.',
    link: '/docs/culture',
  },
  {
    title: '🛍 Shopping',
    description: 'Markets, malls and online shopping.',
    link: '/docs/shopping',
  },
  {
    title: '✈️ Explore Vietnam',
    description: 'Weekend trips and places to visit.',
    link: '/docs/explore-vietnam',
  },
];

  return (
    <Layout title="The Hanoi Handbook">
      <main className={styles.hero}>
        <h1 className={styles.title}>
          The Hanoi Handbook
        </h1>

        <p className={styles.subtitle}>
          Everything you need to live, work and thrive in Hanoi.
        </p>

        <div className={styles.grid}>
          {cards.map((card) => (
            <Link
  key={card.title}
  to={card.link}
  className={styles.link}
>
              <div className={styles.card}>
  <div className={styles.cardTitle}>{card.title}</div>
  <div className={styles.cardDescription}>{card.description}</div>
</div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}