import React, { useState, useEffect } from "react";
import styles from "./Team.module.scss";
import { firestore } from "../../firebase";
import CharacterList from "../../components/CharacterList/CharacterList";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel.jsx";

const Team = (props) => {
    const [favourites, setFavourites] = useState([]);
    const { user, toggleFav } = props;

    const fetchTeam = () => {
        firestore
            .collection("characters")
            .get()
            .then((querySnapshot) => {
                const favourites = querySnapshot.docs
                    .filter((doc) => doc.data().uid === user.uid)
                    .map((doc) => doc.data());
                    setFavourites(favourites)})
                    .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchTeam();
    })
    
    const contentJsx = favourites.length ? (
        <CharacterList characters={favourites} toggleFav={toggleFav} user={user} />
        ) : (
        <FeedbackPanel
          header="No characters"
          text="Try going back to Characters and choosing your Team."
        />
    );
    
    return (
        <section className={styles.Team}>{contentJsx}</section>
    );
};

export default Team;