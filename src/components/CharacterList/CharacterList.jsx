import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "../CharacterList/CharacterList.module.scss";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel.jsx";

const CharacterList = (props) => {
  const { characters, toggleFav, teamIcon } = props;

  const characterMap = () => characters.map(character => {
    return (
      <CharacterCard key={character.id} character={character} toggleFav={toggleFav} teamIcon={teamIcon} />
    );
  });

  const characterRender = characters ? (
      characterMap()
    ) : (
      <FeedbackPanel
        header="No results"
        text="There are no matching characters in the database"
      />
  )

  return (
    <div className={styles.content}>
      <section className={styles.grid}>
        {characterRender}
      </section>
    </div>
  );
};

export default CharacterList;