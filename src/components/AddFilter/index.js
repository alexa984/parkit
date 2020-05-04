
import React from 'react';

import { Link } from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';
import arrow from '../../images/icons/Arrow.svg';

class AddFilter extends React.Component {
render() {
  return (
    <div className={styles.filter}>
      
      <Accordion className={styles.mainAccordion}>
        <Card className={styles.customizeCard}>
          <Card.Header className={styles.accordionHeader}>
            <Accordion.Toggle as={Button} variant="" eventKey="0">
              <div className={styles.rowDiv}>
                <button className={styles.filterButton}></button>
                <label id={styles.filterLabel}>Add filter for parking, fuel or service type.</label>
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={styles.mainAccordionBody}>

              {/* Nested Accordion */}
              <Accordion>
                <Card className={styles.customizeCard}>
                  <Card.Header className={styles.accordionHeader}>
                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                      <div className={styles.rowDiv}>
                        <button className={styles.filterOptionBtn}><div>My Vehicles<img className={styles.arrow} src={arrow} alt="arrow"/></div></button>
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
      
                      <button className={`${styles.filterChoice} ${styles.motorbike}`}>Kawasaki Z900</button>
                      <button className={`${styles.filterChoice} ${styles.smallCar}`}>Nissan Micra</button>
                      <button className={`${styles.filterChoice} ${styles.smallCar}`}>Toyota Augo</button>
                      <button className={`${styles.filterChoice} ${styles.suv}`}>Volvo XC90</button>
                      
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.customizeCard}>
                  <Card.Header className={styles.accordionHeader}>
                    <Accordion.Toggle as={Button} variant="" eventKey="2">
                      <div className={styles.rowDiv}>
                      <button className={styles.filterOptionBtn}><div>Type of vehicles<img className={styles.arrow} src={arrow} alt="arrow"/></div></button>
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>

                      <button className={`${styles.filterChoice} ${styles.motorbike}`}>Motorbike</button>
                      <button className={`${styles.filterChoice} ${styles.smallCar}`}>Small Car</button>
                      <button className={`${styles.filterChoice} ${styles.longCar}`}>Long Car</button>
                      <button className={`${styles.filterChoice} ${styles.suv}`}>SUV</button>
                      <button className={`${styles.filterChoice} ${styles.bus}`}>Bus</button>
                      <button className={`${styles.filterChoice} ${styles.cargoTruck}`}>Cargo truck</button>

                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card className={styles.customizeCard}>
                  <Card.Header className={styles.accordionHeader}>
                    <Accordion.Toggle as={Button} variant="" eventKey="3">
                      <div className={styles.rowDiv}>
                      <button className={styles.filterOptionBtn}><div>Type of fuel<img className={styles.arrow} src={arrow} alt="arrow"/></div></button>
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>

                      <button className={`${styles.filterChoice} ${styles.petrol}`}>Petrol</button>
                      <button className={`${styles.filterChoice} ${styles.diesel}`}>Diesel</button>
                      <button className={`${styles.filterChoice} ${styles.gas}`}>Gas</button>
                      <button className={`${styles.filterChoice} ${styles.electric}`}>Electric</button>

                    </Card.Body>   
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.customizeCard}>
                  <Card.Header className={styles.accordionHeader}>
                    <Accordion.Toggle as={Button} variant="" eventKey="4">
                      <div className={styles.rowDiv}>
                      <button className={styles.filterOptionBtn}><div>Services<img className={styles.arrow} src={arrow} alt="arrow"/></div></button>
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>

                    <button className={`${styles.filterChoice} ${styles.secure}`}>Secure</button>
                      <button className={`${styles.filterChoice} ${styles.disabled}`}>Disabled</button>
                      <button className={`${styles.filterChoice} ${styles.charge}`}>Charger</button>
      
                    </Card.Body>

                  </Accordion.Collapse>
                </Card>
            </Accordion>
              
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
);
}
}

export default AddFilter;
