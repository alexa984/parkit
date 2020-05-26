import React from 'react';
import { Header, Input } from 'components';
import { Grid, Image } from 'semantic-ui-react';
import parkitLogin from 'images/parkitlogo.png';
import styles from './styles.module.css'

export default class AddVehicle extends React.Component {

    render() {
        return (
            <div>
                <Header />
                {/*TODO: Add buttons and the other fields */}

                <Grid columns={3} divided stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            {/*Image*/}
                            <Image src={parkitLogin} className={styles.fit} />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            {/*Login*/}
                            <h1>Welcome!</h1>
                            <Input type='text' placeholder="Username" />
                            <Input type='password' placeholder="Password" />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            {/*Register*/}
                            <h1>Still don't have an account?</h1>
                            <Input type='text' placeholder="Username" />
                            <Input type='password' placeholder="Password" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
