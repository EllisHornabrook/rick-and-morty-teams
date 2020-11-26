import React, { useState } from "react";
import styles from "../Sidebar/Sidebar.module.scss"
import Search from "../../components/Search/Search"
import Filters from "../../components/Filters/Filters"
import { Link } from "@reach/router";

const Sidebar = (props) => {
    const { searchFetch, filterFetch, user } = props;
    const [isOnPage, setIsOnPage] = useState(false);
  
    const pageChange = isOnPage ? (
        <Link to="/" className={styles.link}>
            <span>Characters</span>
        </Link>
        ) : (
        <Link to="/my-team" className={styles.link}>
            <span>My Team</span>
        </Link>
    );

    const search = (searchInput) => {
        searchFetch(searchInput);
    };

    const filter = (filterInput) => {
        filterFetch(filterInput);
    };

    return (
        <aside className={styles.sidebar}>
            <Search search={search} />
            <Filters filter={filter} />
            {(user == null) ? (null) : (
                <span className={styles.team} onClick={() => setIsOnPage(!isOnPage)}>
                    {pageChange}
                </span>
            )}
        </aside>
    );
};

export default Sidebar;
