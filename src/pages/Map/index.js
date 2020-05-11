import React from 'react';

import { Header } from 'components';
import styles from './styles.module.css';
import SearchPanel from 'components/SearchPanel';
import MapContainer from 'components/MapContainer';
import { ThemeProvider } from 'react-bootstrap';

export default class Map extends React.Component {
  state = {
    homeSelected: false,
    uniSelected: false,
    officeSelected: false
  }

  selectUni = () => {
    this.setState({
      homeSelected: false,
      uniSelected: true,
      officeSelected: false
    });
  }
  selectHome = () => {
    this.setState({
      homeSelected: true,
      uniSelected: false,
      officeSelected: false
    });
  }
  selectOffice = () => {
    this.setState({
      homeSelected: false,
      uniSelected: false,
      officeSelected: true
    });
  }

  render() {
    const { homeSelected, uniSelected, officeSelected } = this.state;
    return (
      <>
        <Header />
        <div className={styles.flexContainer}>
          <MapContainer homeSelected={homeSelected} uniSelected={uniSelected} officeSelected={officeSelected} />
          <div className={styles.manageMap}>
            <SearchPanel
              selectUni={this.selectUni}
              selectHome={this.selectHome}
              selectOffice={this.selectOffice}
            />
          </div>
        </div>
      </>
    );
  }
}