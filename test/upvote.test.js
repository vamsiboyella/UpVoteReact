import { render, screen, fireEvent } from "@testing-library/react";
import UpvoteList from "../src/components/upvoteList";
import React from 'react';
import { UpvoteProvider } from '../src/contexts/upVoteContext';

test("should toggle upvote state when clicked", () => {
  render(<UpvoteProvider><UpvoteList listId="list1" /></UpvoteProvider>);
  
  const upvoteButton = screen.getAllByRole("button")[0];
  fireEvent.click(upvoteButton);
  expect(upvoteButton).toHaveStyle("background-color: rgb(37, 60, 242)");
  
//   fireEvent.click(upvoteButton);
//   expect(upvoteButton).toHaveStyle("background-color: rgb(37, 60, 242)");
});
