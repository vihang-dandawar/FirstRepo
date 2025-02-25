import React, { useContext } from "react"
 export const ThemeContext=React.createContext({
themeMode:"light",
darkTheme:()=>{},
lightTheme:()=>{},



});




 export const ThemeContextprovider=ThemeContext.Provider



   export default function useTheme()
   {
    return useContext(ThemeContext)
   }




