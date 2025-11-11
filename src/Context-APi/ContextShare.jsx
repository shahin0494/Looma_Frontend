import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const searchJobContext = createContext("")

function ContextShare({ children }) {
    const [searchKey, setSearchKey] = useState("")
    return (
        
            <searchJobContext.Provider value={{ searchKey, setSearchKey }}>
                {children}
            </searchJobContext.Provider>
        
    )
}

export default ContextShare


// import { createContext, useState } from "react";

// export const searchJobContext = createContext();

// export const SearchJobProvider = ({ children }) => {
//   const [searchKey, setSearchKey] = useState("");

//   return (
//     <searchJobContext.Provider value={{ searchKey, setSearchKey }}>
//       {children}
//     </searchJobContext.Provider>
//   );
// };
