
import React from 'react';
import styles from './styles.module.css';

class Subscriptions extends React.Component {

render() {
  return (
    <div className={styles.subscriptions}>
      <h2 id={styles.title}>Subscriptions</h2>
      <button className={`${styles.subscriptionBtn} ${styles.editIcon}`}>
            <p>Edit subscriptions</p>
        </button>
      <div className={styles.subscriptionsDiv}>
        
        <p id={styles.subtitle}>Parking cards</p>
        <button className={`${styles.subscriptionBtn} ${styles.parkingCard}`}>
            <p className={styles.subscription}>Fitness parking</p>
        </button>

        <p id={styles.subtitle}>Remote controls</p>
        <button className={`${styles.subscriptionBtn} ${styles.rc}`}>
            <p className={styles.subscription}>Home parking</p>
        </button>
        <button className={`${styles.subscriptionBtn} ${styles.rc}`}>
            <p className={styles.subscription}>University parking</p>
        </button>
      </div>
      <a className={styles.button} href="/addsubscription">
        <button className={styles.addVehicle}></button>
      </a>
    </div>
);
}
}

export default Subscriptions;
