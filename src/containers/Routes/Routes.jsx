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
            .collection("teams")
            .doc(user.uid + character.id)
            .set({...character, uid: user.uid})
            .then(fetchTeam())
            .catch((err) => console.error(err));
        };
    };

    const removeFromTeam = (character) => {
        const query = firestore
            .collection("teams")
            .where("id", "==", character.id)
            .where("uid", "==", user.uid);
  
        query.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => doc.ref.delete());
            fetchTeam();
        });
    };

    const fetchTeam = () => {
        firestore
            .collection("teams")
            .get()
            .then((querySnapshot) => {
                const favourites = querySnapshot.docs
                    .filter((doc) => doc.data().uid === user.uid)
                    .map((doc) => doc.data());
                setFavourites(favourites)
                checkTeam()
            })
            .catch((err) => console.error(err));
    };

    const toggleFav = (character) => {
        if (user) {
            character.isFav = !character.isFav;
            character.isFav ? addToTeam(character) : removeFromTeam(character);
        } else {
            alert('Please log in using the Google button to add characters to your Team.')
        };
    };
    
    const checkTeam = () => {
        characters.forEach((character) => {
            const favArr = favourites.filter((favourite) => {
                return favourite.name === character.name
            });
            if (favArr.length) character.isFav = true;
            else character.isFav = false;
        });
    };

    useEffect(() => {
        fetchTeam();
    }, []);

    useEffect(() => {
        checkTeam();
    }, [characters, favourites]);

    return (
        <Router>
            <Dashboard
                path="/"
                characters={characters}
                toggleFav={toggleFav}
            />
            <Team
                path="/my-team"
                user={user}
                toggleFav={toggleFav}
                favourites={favourites}
            />
            <NotFound default />
        </Router>
    );
};

export default Routes;