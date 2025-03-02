

import React, { createContext, useContext, useState, useEffect } from 'react';

const UpvoteContext = createContext();

export const useUpvote = () => {
   return useContext(UpvoteContext);
}

export const UpvoteProvider = ({ children }) => {
  const [upvotes, setUpvotes] = useState({}); // Store state for multiple lists using their listId

  // Load saved state from localStorage
  useEffect(() => {
    const savedUpvotes = JSON.parse(localStorage.getItem('upvotes'));
    if (savedUpvotes) {
      setUpvotes(savedUpvotes);
    }
  }, []);

  // Update state and persist in localStorage
  useEffect(() => {
    if (Object.keys(upvotes).length > 0) {
      localStorage.setItem('upvotes', JSON.stringify(upvotes));
    }
  }, [upvotes]);

  const toggleUpvoteState = (listId, index) => {
    const newUpvotes = { ...upvotes };
    if (!newUpvotes[listId]) {
      newUpvotes[listId] = [];
    }
    newUpvotes[listId][index] = !newUpvotes[listId][index];
    setUpvotes(newUpvotes);
  };

  const addUpvote = (listId) => {
    const newUpvotes = { ...upvotes };
    if (!newUpvotes[listId]) {
      newUpvotes[listId] = [];
    }
    newUpvotes[listId].push(false); // Add a new unselected upvote
    setUpvotes(newUpvotes);
  };

  return (
    <UpvoteContext.Provider value={{ upvotes, toggleUpvoteState, addUpvote }}>
      {children}
    </UpvoteContext.Provider>
  );
};

