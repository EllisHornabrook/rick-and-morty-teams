import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "../CharacterList/CharacterList.module.scss";

const CharacterList = (props) => {
  const { characters, toggleFav } = props;

  const characterMap = (character) => (
      <CharacterCard key={character.id} character={character} toggleFav={toggleFav} />
  );

  return (
    <div className={styles.content}>
      <section className={styles.grid}>
        {characters.map(characterMap)}
      </section>
    </div>
  );
};

export default CharacterList;