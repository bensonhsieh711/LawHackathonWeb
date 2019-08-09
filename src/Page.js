import React from 'react';
import SearchPage from './Componet/SearchPage'

/**
 * These are root pages
 */
const Index = () => {
    // return <h1 className="py-3">Home</h1>;
    return <SearchPage />;
};

const Search = () => {
    return <SearchPage />;
};

export { Index, Search };