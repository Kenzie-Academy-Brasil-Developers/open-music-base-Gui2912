/* Desenvolva sua lógica aqui ... */
let genreChoose = document.querySelector(".genere-choose")
let rendCard = document.getElementById("rend-card")

function render(array){
  array.forEach((elemente)=>{
    let cardRenderization = cardRender(elemente)
    rendCard.appendChild(cardRenderization)
  })
}

function buttonMaker(element){
  let buttonGenre = document.createElement("button")
  buttonGenre.classList.add("filtered-item")
  buttonGenre.innerText = element
  genreChoose.appendChild(buttonGenre)
  
  return genreChoose
}



categories.forEach(buttonMaker)

function cardRender(element){
  let card = document.createElement("li")
  card.classList = "container-ul"

  let figure= document.createElement("figure")

  let img = document.createElement("img")
  img.src = element.img

  let cardMain = document.createElement("section")
  cardMain.classList = "card-main"

  let cardHeader = document.createElement("div")
  cardHeader.classList = "header-albun flex space-between"

  let band = document.createElement("p")
  band.innerText = element.band

  let year = document.createElement("span")
  year.innerText = element.year

  let title = document.createElement("h3")
  title.innerText = element.title

  let footerCard = document.createElement("div")
  footerCard.classList = "footer-album flex space-between"

  let price = document.createElement("p")
  price.innerText = `R$ ${element.price.toFixed(2)}`

  let buy = document.createElement("button")
  buy.innerText = "Comprar"

  figure.appendChild(img)
  cardHeader.append(band,year)
  footerCard.append(price, buy)
  cardMain.append(cardHeader, title,footerCard )
  card.append(figure, cardMain)

  return card
}

render(products)


function getSlider(array){
let slider = document.querySelector("#slider")
let priceDefined = document.querySelector("#price-defined")

slider.addEventListener("input", ()=>{
  rendCard.innerHTML = ''
  let armazen = array.filter((elemente)=>elemente.price <= slider.value)
  console.log(armazen);

  render(armazen)
  priceDefined.innerText = `R$ ${slider.value}`
})
}


getSlider(products)





