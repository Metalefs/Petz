import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Petzera } from '../Assets/petzera-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Petzera />
      <p>Petzera. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
