import React from 'react';
import { Header, Input } from 'components';
import { Grid, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as cx from 'classnames';
import parkitLogin from 'images/parkitlogo.png';
import styles from './styles.module.css'

export default class AddVehicle extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Grid columns={3} divided stackable verticalAlign='middle'>
                    <Grid.Row centered>
                        <Grid.Column width={4}>
                            {/*Image*/}
                            <Image src={parkitLogin} className={cx(styles.fit, "center")} />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            {/*Login*/}
                            <h1>Welcome!</h1>
                            <div className="center">
                                <Input type='text' placeholder="Username" className={styles.input} />
                                <Input type='password' placeholder="Password" className={styles.input} />
                                {/*TODO: Add forgotten password label */}
                            </div>
                            <Link to="home"><Button color="blue" className={styles.loginButton}>Login</Button></Link>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            {/*Register*/}
                            <h1>Still don't have an account?</h1>
                            <div className="center">
                                <Input type='text' placeholder="Username" className={styles.input} />
                                <Input type='password' placeholder="Password" className={styles.input} />
                                <Input type='password' placeholder="Confirm password" className={styles.input} />
                                <Input type='text' placeholder="Name" className={styles.input} />
                                <Input type='text' placeholder="Phone number" className={styles.input} />

                            </div>
                            <Link to='home'><Button color="blue" className={styles.loginButton}>Register</Button></Link>
                            {/*TODO: Add some kind of regex validation here? */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
