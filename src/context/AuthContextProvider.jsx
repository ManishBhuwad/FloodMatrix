import { useContext, useState } from "react";
import { AuthContext } from "./authContext";

const AuthContextProvider = ({children})=>{

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>
}


export const useAuthContext =  ()=>{
    return useContext(AuthContext)
}

export default AuthContextProvider