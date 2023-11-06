import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';

export const App = () => {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
    </div>
  );
}