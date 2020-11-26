import React from "react";
import styles from "./Dashboard.module.scss";
import CharacterList from "../../components/CharacterList/CharacterList";

const Dashboard = (props) => {
    const { characters, addToTeam } = props;

    return (
        <div className={styles.dashboard}>
            <CharacterList characters={characters} toggleFav={addToTeam} teamIcon={["fas", "user-plus"]} />
        </div>
    );
};

export default Dashboard;