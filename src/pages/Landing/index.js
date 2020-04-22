import React from 'react';

import { Container } from 'semantic-ui-react';

import { Header } from 'components';

export default class Landing extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          Landing page.
        </Container>
      </>
    );
  }
}

