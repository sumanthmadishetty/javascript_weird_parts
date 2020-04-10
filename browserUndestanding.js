// In this we talk about how rendering actually occurs in browser

// First javascript will get the html file from server

// Then, first

// When the browser reads HTML code, whenever it encounters an HTML element like html, body, div etc.,
// it creates a JavaScript object called as Node. Eventually, all HTML elements will be converted to JavaScript objects.
//  Since every different HTML element has different properties, the Node object will be created from different classes (constructor functions).
// For example, the Node object for the div element is created from HTMLDivElement which inherits Node class.

// After the browser has created Nodes from the HTML document,
// it has to create a tree-like structure of these node objects.
// Since our HTML element will be nested inside each other, browser needs to replicate that but using Node objects it has previously created.
// This will help the browser efficiently render and manage the webpage through its lifecycle.

// Then All out CSS is taken to form CSSOM(CSS Object Model)

// here all the useragent style sheets etc are taken in to account

// CSSOM is nothing but a tree just like DOMTree.

// Then CSSOM and DOMTree will be combined to form a render Tree

// LAYOUT OPERATION:

// The first browser creates the layout of each individual Render-Tree node.
// The layout consists of the size of each node in pixels and where (position) it will be printed on the screen.
// This process is also called as reflow or browser reflow and it can also occur when you scroll, resize the window or manipulate DOM elements. Here is a list of events which can trigger reflow of the elements.

// After the LAyout operation is completed for whole render tree browser starts rendering based on the layout that it has created
// Browser renders everything as a layyer(in z axis, that is where z-index comes into picture)
// Refer to https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path
