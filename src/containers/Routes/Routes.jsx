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
        if (user) {
            if (favourites.length >= 6) {
                alert('You are only allowed a maximum of 6 characters in your team.')
            } else {
                firestore
                .collection("teams")
                .doc(user.uid + character.id)
                .set({...character, uid: user.uid})
                .catch((err) => console.error(err));
            }
        } else {
            alert('Please log in using the Google button to add characters to your Team.')
        };
    };

    const removeFromTeam = (character) => {
        const query = firestore
            .collection("teams")
            .where("id", "==", character.id)
            .where("uid", "==", user.uid);
            query.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => doc.ref.delete());
        });
    };

    useEffect(() => {
        const fetchTeam = () => {
            if (user) {
                firestore
                .collection("teams")
                .get()
                .then((querySnapshot) => {
                    const favourites = querySnapshot.docs
                        .filter((doc) => doc.data().uid === user.uid)
                        .map((doc) => doc.data());
                    setFavourites(favourites)
                })
                .catch((err) => console.error(err));
            }
        }
        fetchTeam()
    }, [user, favourites]);

    return (
        <Router>
            <Dashboard
                path="/"
                characters={characters}
                addToTeam={addToTeam}
            />
            <Team
                path="/my-team"
                favourites={favourites}
                removeFromTeam={removeFromTeam}
            />
            <NotFound default />
        </Router>
    );
};

export default Routes;