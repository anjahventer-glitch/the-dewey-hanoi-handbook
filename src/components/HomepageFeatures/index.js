import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🏫 Dewey Schools',
    description: 'Everything you need to know about working at Dewey.',
   link: '/docs/getting-started'
  },
  {
    title: '🏡 Living',
    description: 'Accommodation, internet, furniture and utilities.',
    link: '/docs/living',
  },
  {
    title: '🛵 Getting Around',
    description: 'Grab, buses, metro and motorbike tips.',
    link: '/docs/transport',
  },
  {
    title: '🍜 Food',
    description: 'Restaurants, cafés, grocery stores and delivery.',
    link: '/docs/food',
  },
  {
    title: '🏥 Healthcare',
    description: 'Hospitals, clinics, pharmacies and dentists.',
    link: '/docs/healthcare',
  },
  {
    title: '🇻🇳 Culture',
    description: 'Etiquette, language, holidays and local customs.',
    link: '/docs/culture',
  },
  {
    title: '🛍 Shopping',
    description: 'Markets, malls and online shopping.',
    link: '/docs/shopping',
  },
  {
    title: '✈️ Explore',
    description: 'Weekend trips, attractions and travel ideas.',
    link: '/docs/weekend-trips',
  },
];

function Feature({ title, description, link }) {
  return (
    <div className="col col--3 margin-bottom--lg">
      <Link to={link} className={styles.cardLink}>
        <div className={styles.featureCard}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}