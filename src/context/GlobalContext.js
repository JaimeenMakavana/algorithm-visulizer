'use client'
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const Value = { count, setCount }

    return (
        <GlobalContext.Provider value={Value}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
