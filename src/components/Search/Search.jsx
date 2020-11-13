import React from "react";
import styles from "./Search.module.scss"

const Search = ({search}) => {

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search" onInput={(e) => search(e.target.value)} />
        </div>
    );
};

export default Search;