import React, { useState } from "react";
import styles from "./Filters.module.scss";

const Filters = ({filter}) => {
    const [gender, setGender] = useState();
    const [status, setStatus] = useState();
    const [species, setSpecies] = useState();

    const handleGender = (e) => setGender(e.target.value)
    const handleStatus = (e) => setStatus(e.target.value)
    const handleSpecies = (e) => setSpecies(e.target.value)

    const handleFilter = () => {
        const filterInfo = `gender${gender}&status${status}&species${species}`;
        filter(filterInfo);
    }

    return (
        <div className={styles.filters}>
            <h2>Gender</h2>
            <ul onChange={handleGender}>
                <li>
                    <p>All</p>
                    <input type="radio" name="gender" value="" defaultChecked />
                </li>
                <li>
                    <p>Male</p>
                    <input type="radio" name="gender" value="=male" />
                </li>
                <li>
                    <p>Female</p>
                    <input type="radio" name="gender" value="=female" />
                </li>
                <li>
                    <p>Genderless</p>
                    <input type="radio" name="gender" value="=genderless" />
                </li>
                <li>
                    <p>Unknown</p>
                    <input type="radio" name="gender" value="=unknown" />
                </li>
            </ul>

            <h2>Status</h2>
            <ul onChange={handleStatus}>
                <li>
                    <p>All</p>
                    <input type="radio" name="status" value="" defaultChecked />
                </li>
                <li><p>Alive</p>
                    <input type="radio" name="status" value="=alive" />
                </li>
                <li>
                    <p>Dead</p>
                    <input type="radio" name="status" value="=dead" />
                </li>
                <li>
                    <p>Unknown</p>
                    <input type="radio" name="status" value="=unknown" />
                </li>
            </ul>
            
            <h2>Species</h2>   
            <ul onChange={handleSpecies}>
                <li>
                    <p>All</p>
                    <input type="radio" name="species" value="" defaultChecked />
                </li>
                <li>
                    <p>Human</p>
                    <input type="radio" name="species" value="=human" />
                </li>
                <li>
                    <p>Alien</p>
                    <input type="radio" name="species" value="=alien" />
                </li>
            </ul>
            <button onClick={handleFilter}>FILTER</button>
        </div>
    );
};

export default Filters;
