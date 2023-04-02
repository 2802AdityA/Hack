import styles from '../styles/pages/Dashboard.module.css';

import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import TextSpeech from './TextSpeech';

import Analysis from './Analysis';

import Services from '../components/Services';
import Intro from '../components/Intro';
import About from '../components/About';



const Dashboard = () => {
  const { user } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>Dashboard - Nhost</title>
      </Helmet>


      <div>
        <Intro />
        <Services />
        <About />


        <TextSpeech />

        <Analysis />

      </div>
    </>
  );
};

export default Dashboard;
