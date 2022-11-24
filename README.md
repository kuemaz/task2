# Getting Started with React App

The Dashboard project was implemented using React js

For the navigation from one page to another we used react-router-dom version 6

In this project I made use of window.localstorage in order to store the state of the pinned and unpinned boxes on the different pages. 
These states are stored across the different pages.

I made use of the useState and useEffect. The useState for the page1 and page2.js was to fetch the current state( whether box1 was pinned or unpinned) of the local storage. The useEffect i used it to ensure that when the box is unpinned that state is updated on the localstorage.

