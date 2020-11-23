import React from "react";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";
import Dashboard from "../Dashboard";
import Team from "../Team";
import NotFound from "../../containers/NotFound";

const Routes = (props) => {
    const { characters, user } = props;

    const addToTeam = (character) => {
            firestore
            .collection("characters")
            .doc(user.uid + character.id)
            .set({...character, uid: user.uid})
            .catch((err) => console.error(err));
    };

    return (
        <Router>
            <Dashboard
                path="/"
                characters={characters}
                user={user}
                addToTeam={addToTeam}
            />
            <Team
                path="/my-team"
                user={user}
            />
            <NotFound default />
        </Router>
    );
};

export default Routes;
