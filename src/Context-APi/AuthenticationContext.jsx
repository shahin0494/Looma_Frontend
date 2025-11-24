import React, { createContext, useEffect, useState } from 'react'

export const userAuthContext = createContext("")

function AuthenticationContext({ children }) {
    // FIX 1: Lazy initialization. Check storage immediately.
    const [role, setRole] = useState(() => {
        if (sessionStorage.getItem("user")) {
            return JSON.parse(sessionStorage.getItem("user")).role
        }
        return ""
    })

    const [authorisedUser, setAuthorisedUser] = useState(() => {
        return !!sessionStorage.getItem("token") // Returns true if token exists
    })

    // FIX 2: You still keep useEffect to sync state if storage changes elsewhere, 
    // but remove 'role' and 'authorisedUser' from dependencies to avoid infinite loops.
    useEffect(() => {
        if (sessionStorage.getItem("user") && sessionStorage.getItem("token")) {
            const user = JSON.parse(sessionStorage.getItem("user"))
            // Only update if state doesn't match storage (prevents loops)
            if (user.role !== role) setRole(user.role)
            if (!authorisedUser) setAuthorisedUser(true)
        }
    }, []) // Empty dependency array or listen to a specific login trigger

    return (
        <userAuthContext.Provider value={{ role, authorisedUser, setAuthorisedUser, setRole }}>
            {children}
        </userAuthContext.Provider>
    )
}

export default AuthenticationContext