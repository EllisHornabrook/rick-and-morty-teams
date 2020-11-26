import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

const Header = (props) => {
    const { signIn, signOut, user } = props;

    const getSignInOutJsx = () => {
        return user ? (
            <span className={styles.faStyles}>
                <Link to="/">
                    <FontAwesomeIcon icon={"sign-out-alt"} className={styles.icon} onClick={signOut}/>
                </Link>
                <p>{user.email}</p>
            </span>
        ) : (
            <span className={styles.faStyles}>
                <FontAwesomeIcon icon={["fab", "google"]} className={styles.icon} onClick={signIn}/>
                <p>Sign in</p>
            </span>
        );
    };

    return (
        <header className={styles.header}>
            {getSignInOutJsx()}
            <h1>_The__Rick__and__Morty__Team__Selector_</h1>
        </header>
    );
};

export default Header;
