# front-end-test
Front End Code Test.  Bring it!

## Technologies you will use
  - nodejs
  - D3, if you find an svg charting library that uses D3 and makes it easier to work with that's fine as well.  Just don't give me a canvas based graph.
  - nouislider
  - React
  - Whatever CSS framework you like, or make a custom one.

## What you are going to build.
  A page which will get a fresh set of 100 random numbers from an express route using a gaussian model, or you can do it right in the page javascript.  Take these 100 numbers and display 35 of them in time series bar chart.  Allow the user to move the window of 35 numbers displayed within the 100 created by 'grabbing' a bar and dragging it left or right.  See the attached pdf for a more detailed description of this. The parameters for the random set are on a set of sliders that go from 0 to 10.  Any movement of these sliders regenerates the numbers and refreshes the graph (hint, react should be able to handle the re-render on state change of the underlying set of random numbers).
  
## inventory of items i'd expect to see
 - html page with react components to deal separately with the interactive graph and the controls to rerun the graph with new numbers.
 - either a nodejs route or if you want to do server side...which generates a fresh set of 100 random numbers.
 
## How will your project be judged?
I'm going to bring it up on an ipad and try to grab the bars with my finger and move the set within the window!  If it works, I will call you back.
