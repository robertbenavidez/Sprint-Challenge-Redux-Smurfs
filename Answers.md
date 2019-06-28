1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map, .filter, and .reduce are three methods that don't produce side-effect.
    .assign is a method used to creat a new object that exends the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    A store is the single object that contains the entire state of the application.

    Actions in Redux are packets of information that contain an action type and some data that we want associated with that action type.

    Reducers take the previous state object in that is in the store and the Action object and produce a new object representing the current state of the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    The Application state is the global state of the app while component state is the state that resides localing in an object component.

1.  What is middleware?

    Middleware is tool that is injected into a program that intercepts a process, runs a function at the intercept point, then continues the process. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?


    Redux Thunk allow us to change the synchronous nature of redux and make it flow flow asynchronously the allow us make API calls from our action creators.


1.  Which `react-redux` method links up our `components` with our `redux store`?

        connect