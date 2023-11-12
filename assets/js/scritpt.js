
 const url = "https://api.noroff.dev/api/v1/rainy-days/";


const t_function= async(url)=>{
    try{
        const response = await fetch(url);

  // do some check (error handling)
  if (response.ok){
    const data = await response.json();
    return data;
  }else{
   throw new Error("network response was not ok");
  }
    }catch(error){
        console.log(error)

    }
}


async function renderData(){
    const data = await t_function(url);
    const container = document.querySelector("#container");
    container.innerHTML = "";
    data.forEach(element=>{
        const card = createCard(element)
        container.append(card)       
    });
}
renderData()


function createCard(element){
    const {title, description, id ,image}= element

    if(!id || !description || !title ){
        const errormsage= new Error("Invalid information. Please check the ${json.stringify(element)}")
        console.log(errormsage)
        return;
    }
    const divElement = document.createElement("div");
    const h2Element = document.createElement("h2");
    const pElement = document.createElement("p");
    const imageElement = document.createElement("img");
    imageElement.src= image;
    imageElement.classList.add("card-image")
    divElement.classList.add("card");
    divElement.id = element.id;
    divElement.addEventListener("click", ()=>{
        document.location.href=`./prodetails.html?id=${element.id}`
    })
    h2Element.textContent=element.title;
    pElement.textContent=element.description;
    divElement.append(h2Element, pElement, imageElement)
    return divElement
}




