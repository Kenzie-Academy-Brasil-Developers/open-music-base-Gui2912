/* Desenvolva sua lógica aqui ... */
function darkModeToggle(){
let html = document.querySelector("html")
let buttonDK = document.getElementById("button-dk")
let dkIcon = document.querySelector("#dmIcon")

buttonDK.addEventListener("click", ()=>{
  html.classList.toggle("dark-mode")
  dkIcon.classList.toggle('text-white')
  
  let dmPref = localStorage.getItem("darkmode")

  if(!dmPref){
    localStorage.setItem("darkmode", true)
  }

  else {
    localStorage.removeItem("darkmode")
  }

   if(dkIcon.classList.contains('text-white')) {
      dkIcon.src = 'assets/img/sun.svg'
  } else {
      dkIcon.src = 'assets/img/moon.svg'
  }

})

}

darkModeToggle()

