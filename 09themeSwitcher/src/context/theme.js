import { createContext, useContext } from "react";

//step 1

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: {},
  lightTheme: {},
});
// context pn ikdech ahe

export const ThemeProvider = ThemeContext.Provider;
// provider pn ikdech ahe
//ThemeContext should have camel casing
//ThemeContext.Provider is like a radio tower which is used at the top level of my component tree usually in App.jsx or main.jsx its only job is to broadcast the data to everyone inside it

export default function useTheme() {
  return useContext(ThemeContext);
}

//custom hook pn ikdech ahe
//We use this custom hook inside any specific component (like a button or a card) that needs to actually read or change the theme
//Like in minicontext aplyala 2 file banvaiche garaj nahi, context and provider doni eka file madhe deu shakto

//add darkmode:"class"  in the tailwind.config file
