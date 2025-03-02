// // src/components/UpvoteList.js
// import React, { useState } from 'react';
// import Upvote from './upvote';

// const UpvoteList = () => {
//   const [upvotes, setUpvotes] = useState([false]); // Starts with 1 unselected upvote

//   const toggleUpvoteState = (index) => {
//     const newUpvotes = [...upvotes];
//     newUpvotes[index] = !newUpvotes[index]; // Toggle the state
//     setUpvotes(newUpvotes);
//   };

//   const addUpvote = () => {
//     setUpvotes([...upvotes, false]); // Add a new unselected upvote
//   };

//   return (
//     <div>
//       <div style={{ marginBottom: '10px' }}>
//         {upvotes.map((selected, index) => (
//           <Upvote
//             key={index}
//             selected={selected}
//             toggleState={() => toggleUpvoteState(index)} // Pass toggle function
//           />
//         ))}
//       </div>
//       <button
//         onClick={addUpvote}
//         style={{
//           padding: '10px 20px',
//           backgroundColor: '#253CF2',
//           color: 'white',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default UpvoteList;

// src/components/UpvoteList.js
import React from 'react';
import { useUpvote } from '../contexts/upVoteContext';
import Upvote from './upvote';

const UpvoteList = ({ listId }) => {
  const { upvotes, toggleUpvoteState, addUpvote } = useUpvote();
  
  const listUpvotes = upvotes[listId] || []; // Get the upvote state for this list (default to empty array)

  return (
    <div>
      <h3>Upvote List {listId}</h3>
      <div style={{ marginBottom: '10px', display: 'inline-block', border: 'lightgray solid 2px', borderRadius:'2%'}}>
      {listUpvotes.map((selected, index) => (
        <Upvote
          key={index}
          selected={selected}
          toggleState={() => toggleUpvoteState(listId, index)} // Pass listId to toggle
        />
      ))}
    </div><button
      onClick={() => addUpvote(listId)}
      style={{
        padding: '10px 20px',
        backgroundColor: '#253CF2',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'inline-block',
        margin: '5px 15px'
      }}
    >
        +
      </button>
    </div>
  );
};

export default UpvoteList;
