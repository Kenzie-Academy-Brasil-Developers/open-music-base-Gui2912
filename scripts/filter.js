function eventFilter(){
  let filteredItem = document.querySelectorAll(".filtered-item")
  console.log(filteredItem);
  //rendCard
  //pra cada um dos botões eu vou fazer uma função que vai ler o seu innerText e fazer uma comparação pra achar os elementos correspondentes do meu array principal
  filteredItem.forEach((element)=>{
    element.addEventListener("click", ()=>{
      rendCard.innerHTML = ''
      const filter = element.innerText
  
      if(filter == "Todos"){
        render(products)
        getSlider(products)
      }else{

      const filteredProducts = filterProduct(filter)

      render(filteredProducts)

      getSlider(filteredProducts)
      }
    })
  })

}

function filterProduct(text){
  const productFilter = products.filter((element)=> element.category.includes(text))

  return productFilter
}

eventFilter()