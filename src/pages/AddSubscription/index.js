import React from 'react';
import { Button, Image, Grid } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import * as cx from 'classnames';
import { Header } from 'components';
import styles from './styles.module.css';
import Card from 'images/Card.png';
import Calendar from 'images/icons/Calendar.svg';
import ParkingSubscriptionIconWhite from 'images/icons/ParkingSubscriptionIconWhite.svg';
import RemoteControl from 'images/icons/RemoteControlWhite.svg';


export default class AddSubscription extends React.Component {
  delay = ms => new Promise(res => setTimeout(res, ms));

  showToast = async () => {
    toast.info("Successfully added subscription.");
    await this.delay(2000)
  }

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
          <Grid columns={4} className={styles.center}>
            <Grid.Row className={styles.pushDown}>
              <Grid.Column key={10} width={3} />
              <Grid.Column key={10} width={5}>
                <Image src={ParkingSubscriptionIconWhite} alt="parking card" className={styles.center} />
              </Grid.Column>
              <Grid.Column key={2} width={5}>
                <Image src={RemoteControl} alt="remote control" className={styles.center} />
              </Grid.Column>
              <Grid.Column key={10} width={3} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column key={10} width={3} />
              <Grid.Column key={10} width={5}>
                <p className={styles.cardTitle}>Parking Card</p>
              </Grid.Column>
              <Grid.Column key={2} width={5}>
                <p className={styles.cardTitle}>Remote Control</p>
              </Grid.Column>
              <Grid.Column key={10} width={3} />
            </Grid.Row>
          </Grid>
        </div>
        <div className={styles.flexContainer}>
          <img src={Card} alt="Card" className={styles.cardPic} />
        </div>
        <div className={styles.subscriptionInputs}>
          <div className={cx(styles.flexContainerColumn, styles.textField)}>
            <p>Address</p>
            <input type="text" className={styles.input} placeholder="Address"></input>
          </div>
          <div className={cx(styles.flexContainerColumn, styles.textField)}>
            <p>Cardholder name</p>
            <input type="text" className={styles.input} placeholder="Cardholder name"></input>
          </div>
          <div className={styles.dateInput}>
            <div className={styles.setDate}>
              <div className={styles.dateInput}><p>Valid from</p><img src={Calendar} alt="Calendar" /></div>
              <input type="date"></input>
            </div>
            <div className={styles.setDate}>
              <div className={styles.dateInput}><p>Valid to</p><img src={Calendar} alt="Calendar" /></div>
              <input type="date"></input>
            </div>
          </div>
          <div className={styles.flexContainerColumn}>
            <Button as="label" htmlFor="file" type="button" className={styles.uploadButton}>
              Upload validation document
            </Button>
            <input type="file" id="file" hidden onChange={this.onChange} />
          </div>
        </div>


        <a className={styles.button} href="/profile#popup3">
          <button className={styles.addSubscription} onClick={this.showToast}></button>
        </a>
        {/* TODO? show success message when adding a subscription */}

      </div>
    );
  }
}
