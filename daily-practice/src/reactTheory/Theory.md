## _useEffect:_

- use to handle sideEffects
- useEffect is a hook hence it is a function
- useEffect also takes callBack function
- call the callBack function on every rendering
- useEffect always get the updated state values

  - summary: something which is outside of function it is impure , it effect the function behavior , sideEffects are something which is asychronous in nature ,
  - api call , timer , interaction with dom , event listener, cleaning of event are called as sideEffects.

---

## _propsDrilling:_

- Unnecessary flow of data to components under which child components are nested is called propsDrilling.
- Solutions 👍:
  - lifting of state
  - context Api
  - Redux
- _lifting of state :_ passing the callback, calling the callback and receiving the data
- _Redux :_

  - problems solved by redux 😄 :
    - overload of data
    - props drillings
  - why used :

    - code become clumsy
    - which context calling which component become confusing(complex)
    - causing problem becoz of multiple contextApi
    - very vast data emission

  - why not used 😠:
    - more line of code , time , more maintenance

---

## _Higher order components:_

- takes a component and return a component
- it is a pure function

---

##_this keyword:_

- the javascript this keyboard refers to the object it belong to
- it has different values depending on where it is used
- alone, this refers to the global object
- in a regular function this, keyword refers to the global object
- in a method, this refer to the owner object
- in a function , in strict mode , this is undefined
- arrow function reference to the environment
- normal function not reference to the environment up to it get called , ones it called it reference to the environment

---

## _classComponents:_

- necessary thing to create a class components:

  - render method is a required one
  - extends component from react component

- phases of life cycle of a component:
  - 1> creation phase / mounting phase
  - 2> updation phase
  - 3> removal phase /deletion phase / unmounting phase
