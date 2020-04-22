import React from 'react';

import { Container } from 'semantic-ui-react';

import { Header } from 'components';

export default class Map extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          Map page.
        </Container>
      </>
    );
  }
}

