import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";
import Dashboard from "../Dashboard";
import Team from "../Team";
import NotFound from "../../containers/NotFound";

const Routes = (props) => {
    const [favourites, setFavourites] = useState([]);
    const { characters, user } = props;

    const addToTeam = (character) => {
        if (favourites.length >= 6) {
            alert('You are only allowed a maximum of 6 characters in your team.')
        } else {
            firestore
            .collection("characters")
            .doc(user.uid + character.id)
            .set({...character, uid: user.uid})
            .then(() => fetchTeam())
            .catch((err) => console.error(err));
        }
    };

    const removeFromTeam = (character) => {
        firestore
          .collection("characters")
          .doc(user.uid + character.id)
          .delete()
          .then(() => fetchTeam())
          .catch((err) => console.log(err));
    };

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
    }, [])

    const toggleFav = (character) => {
        character.isFav = !character.isFav;
        character.isFav ? addToTeam(character) : removeFromTeam(character);
    };

    return (
        <Router>
            <Dashboard path="/" characters={characters} user={user} toggleFav={toggleFav} />
            <Team path="/my-team" user={user} toggleFav={toggleFav} favourites={favourites} />
            <NotFound default />
        </Router>
    );
};

export default Routes;