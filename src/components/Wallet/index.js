
import React from 'react';
import AddPaymentModal from '../AddPaymentModal';
import styles from './styles.module.css';


class Wallet extends React.Component {
  state = {
    modalOpen: false
  }

  openCloseModal = () => {
    this.setState(prevState => ({ modalOpen: !prevState.modalOpen }))
  }

  render() {
    return (
      <div className={styles.cards}>
        <h2 id={styles.title}>Wallet</h2>
        <p id={styles.subtitle}>Select payment service to edit, or add a new one.</p>
        <div className={styles.cardsDiv}>

          <button className={`${styles.cardBtn} ${styles.fc1} ${styles.masterCard}`}>
            <div>
              <p className={styles.cardType}>Card</p>
              <div className={styles.cardInfo}>
                <p className={styles.noWrap}>**** **** **** 9271</p>
                <p>10/21</p>
              </div>
            </div>
          </button>

          <button className={`${styles.cardBtn} ${styles.fc1} ${styles.payPal}`}>
            <div>
              <p className={styles.cardType}>Paypal</p>
              <div className={styles.cardInfo}>
                <p>somename@mail.com</p>
              </div>
            </div>
          </button>

        </div>

        <div className={styles.button}>
          <button className={styles.addPayment} onClick={this.openCloseModal} />
        </div>
        <AddPaymentModal open={this.state.modalOpen} onClose={this.openCloseModal} />

      </div>
    );
  }
}

export default Wallet;
