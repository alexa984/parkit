import React from 'react';

import { Header} from 'components';
import styles from './styles.module.css';
import Card from '../../images/Card.png';
import Calendar from '../../images/icons/Calendar.svg';


export default class AddSubscription extends React.Component {

  render() {
    return (
      <div>
      <Header />
        <div className={styles.flexContainer}>
        <a className={styles.backBtnLink} href="/profile">
          <button className={styles.backBtn}></button>
        </a>
          <h1>Add Subscription</h1>
        </div>

        <div className={styles.selectSubscriptionType}>
          <h3>Add</h3>
          <div className={styles.flexContainer}>
            <button className={`${styles.addSubscriptionBtn} ${styles.parkingCard}`}>
                <p>Parking Card</p>
            </button>
            <button className={`${styles.addSubscriptionBtn} ${styles.rc}`}>
                <p>Remote Control</p>
            </button>
          </div>
        </div>
        <div className={styles.flexContainer}>
          <img src={Card} alt="Card" className={styles.cardPic}/>
        </div>
        <div className={styles.subscriptionInputs}>
          <div className={styles.flexContainerColumn}>
            <p>Address</p>
            <input type="text" className={styles.input} placeholder="Address"></input>
          </div>
          <div className={styles.flexContainerColumn}>
            <p>Cardholder name</p>
            <input type="text" className={styles.input} placeholder="Cardholder name"></input>
          </div>
          <div className={styles.dateInput}>
            <div className={styles.setDate}>
              <div className={styles.dateInput}><p>Valid from</p><img src={Calendar} alt="Calendar"/></div>
              <input type="date"></input>
            </div>
            <div className={styles.setDate}>
              <div className={styles.dateInput}><p>Valid to</p><img src={Calendar} alt="Calendar"/></div>
              <input type="date"></input>
            </div>
          </div>
          <div className={styles.flexContainerColumn}>
            <p>Upload validation document</p>
            <button className={styles.uploadBtn}></button>
          </div>
        </div>
        

        <a className={styles.button} href="/profile#popup2">
          <button className={styles.addSubscription}></button>
        </a>
        {/* TODO? show success message when adding a subscription */}

      </div>
    );
  }
}
