import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const contextValue = {
        loading,
        setLoading,
        error,
        setError
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}