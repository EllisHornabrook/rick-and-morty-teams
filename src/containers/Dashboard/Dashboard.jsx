import React from "react";
import styles from "./Dashboard.module.scss";
import { firestore } from "../../firebase";
import CharacterList from "../../components/CharacterList/CharacterList";

const Dashboard = (props) => {
    const { characters, addToTeam, user } = props;

    const toggleFav = (character) => {
        if (user) {
            character.isFav = !character.isFav;
            character.isFav ? addToTeam(character) : removeFromTeam(character);
        } else {
            alert('Please log in using the Google button to add characters to your Team.')
        };
    };

    const removeFromTeam = (character) => {
        firestore
            .collection("characters")
            .doc(user.uid + character.id)
            .delete()
            .catch((err) => console.log(err));
    };

    return (
        <div className={styles.dashboard}>
            <CharacterList characters={characters} toggleFav={toggleFav} />
        </div>
    );
};

export default Dashboard;