import React from 'react';
import { Header } from 'components';
import styles from './styles.module.css';

export default class AddPayment extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className={styles.flexContainer}>
          <a className={styles.backBtnLink} href="/profile">
            <button className={styles.backBtn}></button>
          </a>
          <h1>Add Payment service to your profile</h1>
        </div>
        <div className={styles.flexContainerItems}>
          <p className={styles.alignCenter}>Select payment service:</p>
          <div className={styles.vehiclesContainer}>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.card}`}></button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.payPal}`}></button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.applePay}`}></button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.googlePay}`}></button>
          </div>
        </div>

        <a className={styles.button} href="/profile#popup3">
          <button className={styles.addPayment}></button>
        </a>
      </div>
    );
  }
}
