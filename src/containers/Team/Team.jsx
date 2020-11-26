import React from "react";
import styles from "./Team.module.scss";
import CharacterList from "../../components/CharacterList/CharacterList";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel.jsx";

const Team = (props) => {
    const { favourites, removeFromTeam } = props;
    
    const contentJsx = favourites.length ? (
        <CharacterList characters={favourites} toggleFav={removeFromTeam} teamIcon={["fas", "user-minus"]} />
    ) : (
        <FeedbackPanel
            header="No team members"
            text="Try going back to Characters and choosing your Team"
        />
    )
            
    return (
        <section className={styles.Team}>{contentJsx}</section>
    );
};

export default Team;