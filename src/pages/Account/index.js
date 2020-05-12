import React from 'react';

import { Header } from 'components';
import ProfileOptions from 'components/ProfileOptions';
import UserPhotoAndName from 'components/UserPhotoAndName';
import styles from './styles.module.css';


export default class Account extends React.Component {

  render() {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <h1>My Account</h1>
          <UserPhotoAndName />
          <ProfileOptions />
        </div>
      </>
    );
  }
}
