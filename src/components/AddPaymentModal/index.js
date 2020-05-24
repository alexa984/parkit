import React from 'react';

import { Modal } from 'semantic-ui-react';

import styles from './styles.module.css';

export default class AddPayment extends React.Component {
  state = {
    cardChecked: false,
    payPalChecked: false
  };

  chooseCard = () => {
    this.setState({
      cardChecked: true,
      payPalChecked: false
    })
  }

  choosePayPal = () => {
    this.setState({
      cardChecked: false,
      payPalChecked: true
    })
  }

  clearAndClose = (outerCloseMethod) => {
    this.setState({
      cardChecked: false,
      payPalChecked: false
    })
    outerCloseMethod()
  }

  render() {
    const { open, onClose } = this.props;
    const { cardChecked, payPalChecked } = this.state;

    return (
      <Modal open={open} closeIcon className={styles.centerModal} onClose={() => this.clearAndClose(onClose)}>
        <Modal.Header>Add Payment Service</Modal.Header>
        <Modal.Content image>
          <Modal.Description className="center">
            <div className={styles.serviceOptions}>
              <button className={`${styles.filterChoice} ${styles.fc1} ${styles.card}`} onClick={this.chooseCard} />
              <button className={`${styles.filterChoice} ${styles.fc1} ${styles.payPal}`} onClick={this.choosePayPal} />
            </div>
          </Modal.Description>

          {
            cardChecked && (
              <Modal.Description>
                <div>
                  <input type="text" className={styles.input} placeholder="Card number" />
                </div>
                <div>
                  <input type="text" className={styles.input} placeholder="Cardholder name" />
                </div>
              </Modal.Description>)
          }

          {
            payPalChecked && (
              <Modal.Description>
                <div>
                  <input type="text" className={styles.input} placeholder="Email" />
                </div>
                <div>
                  <input type="password" className={styles.input} placeholder="PayPal password" />
                </div>
              </Modal.Description>)
          }

        </Modal.Content>
        {(payPalChecked || cardChecked) && (
          <Modal.Actions>
            <a className={styles.button} href="/profile#popup3">
              <button className={styles.addPayment} onClick={() => this.clearAndClose(onClose)} />
            </a>
          </Modal.Actions>
        )}
      </Modal>
    );
  }
}
