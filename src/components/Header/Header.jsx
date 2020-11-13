import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
    const { signIn, signOut, user } = props;

    const getSignInOutJsx = () => {
        return user ? (
          <span className={styles.faStyles} onClick={signOut}>
            <FontAwesomeIcon icon={"sign-out-alt"} />
            <p>{user.email}</p>
          </span>
        ) : (
          <span className={styles.faStyles} onClick={signIn}>
            <FontAwesomeIcon icon={["fab", "google"]} />
            <p>Sign in</p>
          </span>
        );
      };

    return (
        <aside className={styles.header}>
            {getSignInOutJsx()}
            <h1>_The__Rick__and__Morty__Team__Selector_</h1>
        </aside>
    );
};

export default Header;