import React from "react";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";
import Dashboard from "../Dashboard";
import Team from "../Team";
import NotFound from "../../containers/NotFound";

const Routes = (props) => {
    const { characters, user } = props;

    const addToTeam = (character) => {
        // checkTeamMax();
        firestore
            .collection("characters")
            .doc(user.uid + character.id)
            .set({...character, uid: user.uid})
    };

    const removeFromTeam = (character) => {
        firestore
          .collection("characters")
          .doc(user.uid + character.id)
          .delete()
          .catch((err) => console.log(err));
    };

    const toggleFav = (character) => {
        character.isFav = !character.isFav;
        character.isFav ? addToTeam(character) : removeFromTeam(character);
    };
    
    // const checkTeamMax = (characters) => {
    //     if (characters >= 6) {

    //     } else {
    //         alert("You've got a full squad.")
    //     }
    // }

    return (
        <Router>
            <Dashboard path="/" characters={characters} user={user} toggleFav={toggleFav} />
            <Team path="/my-team" user={user} toggleFav={toggleFav} />
            <NotFound default />
        </Router>
    );
};

export default Routes;