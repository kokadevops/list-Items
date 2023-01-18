import React from "react";

const SearchItem = ({ search, setSearch }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="searchForm">
            <label htmlFor="searchForm">search</label>
            <input
                value={search}
                type="text"
                placeholder="search"
                id="searchForm"
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};

export default SearchItem;
