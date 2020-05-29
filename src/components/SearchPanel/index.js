import React from "react";
import { Icon, Search, Button } from "semantic-ui-react";
import { AddFilter } from "components";
import styles from "./styles.module.css";

class SearchPanel extends React.Component {
  render() {
    return (
      <div className={styles.searchPanel}>
        <Search
          icon={<Icon name="search" color="blue" />}
          placeholder="Search..."
          size="large"
          className={styles.searchInput}
          color="grey"
        />
        <div className={styles.searchButtons}>
          <button className={`${styles.dotsButton} ${styles.fc1}`}>
            See all spots
          </button>
          <button className={`${styles.parkingButton} ${styles.fc1}`}>
            3 min.
          </button>
          <button className={`${styles.parkingButton} ${styles.fc1}`}>
            5 min.
          </button>
          <button className={`${styles.parkingButton} ${styles.fc1}`}>
            10 min.
          </button>
        </div>
        <div className={styles.searchButtons}>
          <button
            className={`${styles.parkingButton} ${styles.fc1}`}
            onClick={this.props.selectHome}
          >
            Home
          </button>
          <button
            className={`${styles.parkingButton} ${styles.fc1}`}
            onClick={this.props.selectUni}
          >
            Univesity
          </button>
          <button
            className={`${styles.parkingButton} ${styles.fc1}`}
            onClick={this.props.selectOffice}
          >
            Office
          </button>
          <button className={`${styles.parkingButton} ${styles.fc1}`}>
            Fitness
          </button>
        </div>

        <AddFilter></AddFilter>

        <div className={styles.placesCards}>
          <button className={styles.placeCard}>
            Restaurant<p>430places</p>
          </button>
          <button className={styles.placeCard}>
            Coffee<p>380places</p>
          </button>
          <button className={styles.placeCard}>
            Cinema<p>15places</p>
          </button>
        </div>

        <div className={styles.favourites}>
          <h5>Favourites</h5>
          <div className={styles.favouriteButtons}>
            <button
              className={styles.faveButton}
              onClick={this.props.selectHome}
            >
              Home
              <div>
                <p>g.k. Ivan Vazov</p>
                <p>7.3 km</p>
              </div>
            </button>
            <button
              className={styles.faveButton}
              onClick={this.props.selectUni}
            >
              University
              <div>
                <p>bul. James Boucher 5</p>
                <p>0 km</p>
              </div>
            </button>
            <button
              className={styles.faveButton}
              onClick={this.props.selectOffice}
            >
              Office
              <div>
                <p>bul. Vitosha 87</p>
                <p>2.4 km</p>
              </div>
            </button>
          </div>
        </div>

        {this.props.placeSelected && (
          <div className="center">
            <Button className={styles.selectedPlaceBtn}>Navigate</Button>
            <Button className={styles.selectedPlaceBtn}>
              Pay for your parking place
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default SearchPanel;
