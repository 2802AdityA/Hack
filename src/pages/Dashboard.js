import styles from '../styles/pages/Dashboard.module.css';

import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Services from '../components/Services';

import About from '../components/About';


const Dashboard = () => {
  const { user } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>Dashboard - Nhost</title>
      </Helmet>

      <About />

      <div>
        <Services />
        <h2 className={styles.title}>Dashboard</h2>

        <p className={styles['welcome-text']}>
          Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
          <span role="img" alt="hello">
            👋
          </span>
        </p>

        <p className={styles['info-text']}>
          Edit the <code>src/pages/Dashboard.js</code> file to populate this
          page.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
