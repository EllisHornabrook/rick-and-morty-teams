import React from "react";
import styles from "./CharacterCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterCard = (props) => {
    const { character, toggleFav, teamIcon } = props;
    const { name, image, status, species, gender, origin } = character;

    const handleFavClick = () => {
        toggleFav(character);
    };

    return (
        <div className={styles.card}>
            <div className={styles.grid}>
                <h1>{name}</h1>
                <img src={image} alt="character" />
                <span className={styles.iconCont}>
                    <FontAwesomeIcon icon={teamIcon} className={styles.icon} onClick={handleFavClick} />
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