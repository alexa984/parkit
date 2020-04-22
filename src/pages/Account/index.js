import React from 'react';
import { Container } from 'semantic-ui-react';

import { Header } from 'components';

export default class Account extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Container>
          Account page
        </Container>
      </div>
    );
  }
}
