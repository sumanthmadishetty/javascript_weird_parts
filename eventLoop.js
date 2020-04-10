// https://www.youtube.com/watch?v=8aGhZQkoFbQ

// https://medium.com/@jitubutwal144/javascript-how-is-callback-execution-strategy-for-promises-different-than-dom-events-callback-73c0e9e203b1

// Browser repaints the screen every 16.6 milli seconds
// Callback queue and render queue

// render queue has higher priority

// All the JS is excuted in a callstack

// so when a function is executed, the function is pushed to call stack and later it is popped out after execution

// For async tasks  will have task queue and micro task queue

// When a call stack is empty, event loop will check if the micro task queue is empty, if not 
// it will execute all the tasks in the microtask queue and after all the micro task queues are finished, it will take
// the oldest task in task queue and it will continue

// the following function depcits the execution of task queue

eventLoop = {
  taskQueues: {
      events: [], // UI events from native GUI framework
      parser: [], // HTML parser
      callbacks: [], // setTimeout, requestIdleTask
      resources: [], // image loading
      domManipulation[]
  },

  microtaskQueue: [
  ],

  nextTask: function() {
      // Spec says:
      // "Select the oldest task on one of the event loop's task   queues"
      // Which gives browser implementers lots of freedom
      // Queues can have different priorities, etc.
      for (let q of taskQueues)
          if (q.length > 0)
              return q.shift();
      return null;
  },

  executeMicrotasks: function() {
      if (scriptExecuting)
          return;
      let microtasks = this.microtaskQueue;
      this.microtaskQueue = [];
      for (let t of microtasks)
          t.execute();
  },

  needsRendering: function() {
      return vSyncTime() && (needsDomRerender() || hasEventLoopEventsToDispatch());
  },

  render: function() {
      dispatchPendingUIEvents();
      resizeSteps();
      scrollSteps();
      mediaQuerySteps();
      cssAnimationSteps();
      fullscreenRenderingSteps();

      animationFrameCallbackSteps();


      while (resizeObserverSteps()) {
          updateStyle();
          updateLayout();
      }
      intersectionObserverObserves();
      paint();
  }
}

while(true) {
  task = eventLoop.nextTask();
  if (task) {
      task.execute();
  }
  eventLoop.executeMicrotasks();
  if (eventLoop.needsRendering())
      eventLoop.render();
}

// Functions that come under microtaskqueue are

// // 
// Promises (resolve(), reject())
// - Browser observers (Mutation observer, Intersection Observer, Performance Observer, Resize Observer)


// According to the standard specification, callback handlers of following events are queued in Task queue
// - DOM/Web events (onclick, onkeydown, XMLHttpRequest etc)
// - Timer events (setTimeout(…), setInterval(…))

// Callbacks queued in task queue are executed in first-come-first-service order and browser may render between them (Eg. DOM manipulation, changing html styles etc).
// Callbacks queued in Micro task queue are executed in first-come-first-service order, but at the end of every task from the task queue (only if call stack is empty).
//    As mentioned above in the event loop’s pseudo code, Micro tasks are processed at the end of each task.
while(true) {
  // Each iteration of this loop is called an event loop 'tick'
  task = eventLoop.nextTask();
  
  if (task) {
   // First: A task from the Task queue is executed
      task.execute();
  }
  
  // Second: All the tasks in the Micro task queue are executed
  eventLoop.executeMicrotasks();
  
  // Third: It will check if there is someting to render, eg. DOM changes, request animation frame etc
  // and renders in browser if required
  if (eventLoop.needsRendering())
      eventLoop.render();
}

// For example consider

// var button = document.querySelector(".button");

// // First click listener
// button.addEventListener("click", function CB1() {
//   console.log("Listener 1");
  
//   setTimeout(function ST1() {
//     console.log("Settimeout 1");  
//   }, 0);
  
//   Promise.resolve().then(function P1() {
//         console.log("Promise 1");
//   });  
// });

// // Second click listener
// button.addEventListener("click", function CB2() {
//   console.log("Listener 2");
  
//   setTimeout(function ST2() {
//     console.log("Settimeout 2");  
//   }, 0);

//   Promise.resolve().then(function P2() {
//         console.log("Promise 2");
//   });
// });

// when JS engine encounters first button.addEventListener(...), it assigns responsibility to handle click callback to runtime (Browser). 
// Similarly, it does the same stuff for second button event listener.
// Because we have two click listener for a single button, whenever button is clicked, two callbacks( CB1, CB2) are queued in Task queue sequentially
//  as shown in the diagram below
// When call stack is empty, event loop picks up CB1 to execute. First console.log(“Listener 1 ”) is executed, 
// then callback of setTimeout(…) is queued in Task queue as ST1 and callback of promise 1 is queued in Micro task queue as shown in the diagram below