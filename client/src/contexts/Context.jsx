import React, { useState, createContext } from 'react';

const Context = createContext()

const ContextProvider = ({ children }) => {
    // children refers to: <App />, from main.jsx
    // variables:

    // functions:

    // state:
    const [resultsList, setResultsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [resultsTitle, setResultsTitle] = useState('')
    const [hasBeenCalled, setHasBeenCalled] = useState(false)

    const resetState = () => {
        setResultsList([])
        setIsLoading(false)
        setResultsTitle('')
        setHasBeenCalled(false)
    }

    return (
        <Context.Provider
            value={{
                // insert functions/variables/state you want to use in other components/files:
                resultsList,
                setResultsList,
                isLoading,
                setIsLoading,
                resultsTitle,
                setResultsTitle,
                hasBeenCalled,
                setHasBeenCalled,
                resetState,
            }}
        >
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
