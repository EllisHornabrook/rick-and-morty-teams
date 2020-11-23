import React, { useState, useEffect } from "react";
import styles from "./Team.module.scss";
import { firestore } from "../../firebase";
import CharacterList from "../../components/CharacterList/CharacterList";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel.jsx";

const Team = (props) => {
    const { user } = props;
    const [favourites, setFavourites] = useState([]);

    const fetchTeam = () => {
        firestore
            .collection("characters")
            .get()
            .then((querySnapshot) => {
                const favourites = querySnapshot.docs
                .filter((doc) => doc.data().uid === user.uid)
                .map((doc) => doc.data());
                setFavourites(favourites)
            })
            .catch((err) => console.error(err));
    };

    const removeCharacter = (character) => {
        firestore
            .collection("characters")
            .doc(user.uid + character.uid)
            .delete()
            .then(console.log('I have deleted the character'))
            .catch((err) => console.error(err));
    };
    
    useEffect(() => {
        fetchTeam();
    }, [])
    
    const teamContent = favourites.length ? (
        <CharacterList characters={favourites} toggleFav={removeCharacter} />
        ) : (
        <FeedbackPanel
          header="No characters"
          text="Try going back to Characters and choosing your Team."
        />
    );
    
    return (
        <section className={styles.Team}>{teamContent}</section>
    );
};

export default Team;


// if (favourites.length >= 6) {
//     alert('You are only allowed a maximum of 6 characters in your team.')
// } else {