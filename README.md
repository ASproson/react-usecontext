# React useContext

Basic React app to understand useContext

1. Create a context folder
2. Inside that directory export a yContext using createContext()
3. As above, export a component called nProvider
4. In App.js wrap the primary div in the nProvider
5. The page is now blank as we need to call { children } via props and render it inside of our yContext.nProvider
6. We can set state inside of nProvider and pass it down like so: `<UserContext.Provider value={{ user, setUser }}`
7. Then we can create a separate component to consume our context, `const { user, setUser } = useContext(UserContext);`
8. We can then render/set the state inside of the new component `{user.name}`
9. Now we can call the consuming component inside of App.js and have access to this global context as needed