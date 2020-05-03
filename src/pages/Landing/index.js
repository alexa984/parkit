import React from "react";

import { Header } from "components";

import styles from "./styles.module.css";
import home from "../../images/home.png";

export default class Landing extends React.Component {
  render() {
    return (
      <>
        <Header />
        <img src={home} alt="home" className={styles.homePage} />
      </>
    );
  }
}
