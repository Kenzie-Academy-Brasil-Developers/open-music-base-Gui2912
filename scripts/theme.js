let html = document.querySelector("html")
let buttonDarkMode = document.querySelector("#button-dk")
let dkIcon = document.querySelector("#dkIcon")
let darkMode;
const theme = "dark-mode"

const iconTheme = ["assets/img/moon.svg", "assets/img/sun.svg"]

buttonDarkMode.addEventListener("click", changeTheme)

function changeTheme(){
  darkMode = !darkMode

  html.classList.toggle("dark-mode")

  localStorage.setItem(theme, darkMode)

  themeChangeIcon(dmIcon)
  
}

function themeChangeIcon(buttonElement){
  darkMode? buttonElement.src = iconTheme[1]: buttonElement.src = iconTheme[0]
}

function themePreferenceAnalysis(){
  darkMode = JSON.stringify(localStorage.getItem(theme))

  if(darkMode){
    html.classList.add(theme)
    themeChangeIcon(dmIcon)
    }
  // else{
  //   themeChangeIcon(dmIcon)
  // }
}

themePreferenceAnalysis()