import React, { useState } from 'react';

const Context = React.createContext()

function ContextProvider({ children }) { // children refers to: <App />, from main.jsx
    // variables: 

    // functions: 
    function test() {
        console.log("context")
    }

    // state: 
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [apiData, setApiData] = useState('')
    const [id, setId] = useState('ptobCLHPk5dzuBEIjWumAw')

    return (
        <Context.Provider value={{
            // insert functions/variables/state you want to use in other components/files:
            test,
            location,
            setLocation,
            category,
            setCategory,
            apiData,
            setApiData,
            id,
            setId,
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }

/*  

    to access Context from a component, use 'import { Context } from context path'

    function ComponentName() {
        const { variables/functions from Context.jsx } = useContext(Context)

        return (
            jsx here: 
        )
    }

*/