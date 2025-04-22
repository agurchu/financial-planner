import react, { createContext,useContext, useState } from "react";

const ModeContext = createContext();

// Provider Component
export function ModeProvider({children}) {
    const [mode,setMode] = useState("light");

    const toggleMode = () => setMode((preMode) => (preMode == "light" ? "dark": "light"));
    return(
        <ModeProvider.Provider value={{mode, toggleMode}} >
        {children}
        </ModeProvider.Provider>
    );
}

//  Custom Hook to Access context
export function useMode(){
    const context = useContext(ModeContext);
    if (!context) {
        throw new Error("useMode must be used  within aa ModeProvider");
    }
    return context;
}
