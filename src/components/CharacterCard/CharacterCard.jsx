import React, { useState } from "react";
import styles from "./CharacterCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterCard = (props) => {
    const { character, toggleFav, user } = props;
    const { name, image, status, species, gender, origin, isFav } = character;
    const [favState, setFavState] = useState(isFav);
    
    const handleFavClick = (e) => {
        if (user) {
            e.stopPropagation();
            toggleFav(character);
            setFavState(!favState);
        } else {
            alert('Please log in using the Google button to add characters to your Team.')
        }
    };

    const teamIcon = (favState === true) ? ["fas", "user-check"] : ["far", "user"];

    return (
        <div className={styles.card}>
            <div className={styles.grid}>
                <h1>{name}</h1>
                <img src={image} />
                <span className={styles.iconCont} onClick={handleFavClick}>
                    <FontAwesomeIcon icon={teamIcon} className={styles.icon} />
                </span>
            </div>
            <div className={styles.bottom}>
                <div>
                    <p>Location</p>
                    <p>{origin.name}</p>
                </div>
                <p>{species}</p>
                <p>{gender}</p>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default CharacterCard;