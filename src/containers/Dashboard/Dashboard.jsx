import React from "react";
import styles from "./Dashboard.module.scss";
import CharacterList from "../../components/CharacterList/CharacterList";

const Dashboard = (props) => {
    const { characters, toggleFav, user } = props;

    return (
        <div className={styles.dashboard}>
            <CharacterList characters={characters} toggleFav={toggleFav} user={user} />
        </div>
    );
};

export default Dashboard;