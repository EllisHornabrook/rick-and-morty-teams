import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "../CharacterList/CharacterList.module.scss";

const CharacterList = (props) => {
  const { characters, toggleFav } = props;

  const characterMap = () => characters.map(character => {
    return (
      <CharacterCard key={character.id} character={character} toggleFav={toggleFav} />
    );
  });

  const characterRender = characters ? characterMap() : null;

  return (
    <div className={styles.content}>
      <section className={styles.grid}>
        {characterRender}
      </section>
    </div>
  );
};

export default CharacterList;