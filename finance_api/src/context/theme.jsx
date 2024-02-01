import React, { useState } from 'react'
import { createContext, useContext } from "react";

export const ThemeContext = createContext({})

export default function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const darkModeColors={
        background: '#121212',
        text: '#fff',
        primary: '#fff',
        secondary: '#fff'
    }
    const lightModeColors={
        background: '#fff',
        text: '#121212',
        primary: '#121212',
        secondary: '#121212'
    }
    const [selectedTheme, setSelectedTheme]=useState(lightModeColors)
    const toggleDarkMode = () => {
        setSelectedTheme(isDarkMode? lightModeColors : darkModeColors)
        setIsDarkMode(!isDarkMode)
    }
  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode, selectedTheme, setSelectedTheme, toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}
