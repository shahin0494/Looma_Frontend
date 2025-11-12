import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const searchJobContext = createContext("")
export const userUpdateContext = createContext("")
export const adminUpdateContext = createContext("")

function ContextShare({ children }) {
    const [searchKey, setSearchKey] = useState("")
    const [userEditResponse, setUserEditResponse] = useState({})
    const [adminEditResponse, setAdminEditResponse] = useState([])
    return (

        <searchJobContext.Provider value={{ searchKey, setSearchKey }}>
            <userUpdateContext.Provider value={{ userEditResponse, setUserEditResponse }}>
                <adminUpdateContext.Provider value={{ adminEditResponse, setAdminEditResponse }}>
                    {children}
                </adminUpdateContext.Provider>
            </userUpdateContext.Provider>
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
