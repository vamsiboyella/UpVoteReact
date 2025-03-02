import React from "react";
import { UpvoteProvider } from "./contexts/upVoteContext";
import UpvoteList from "./components/upvoteList";

const App = () => {
  return (
    <UpvoteProvider>
      <div style={{ padding: '20px', border:"lightgray solid 2px", borderRadius :"5%" }}>
      {/* <UpvoteList /> */}
      <UpvoteList listId="list1" />
        <UpvoteList listId="list2" />
        <UpvoteList listId="list3" />
      </div>
    </UpvoteProvider>
  );
};

export default App;
