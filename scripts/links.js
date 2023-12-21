let inputName = document.querySelector(".inputName")
let inputUrl = document.querySelector(".inputUrl")
let formulario = document.querySelector(".formulario")
let reset = document.querySelector(".reset")
let container = document.querySelector(".linksContainer")

let borrarLink = ()=>{
 console.log("hola")
}



const printLinks = () => {
    let li = document.createElement("li")
    li.innerHTML = `<a href="https://${inputUrl.value}"target= blank class="link">${inputName.value}</a> <button onclick="borrarLink()">X</button> `
    container.appendChild(li)

}

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!(inputUrl.value.includes("."))) {
        window.alert("Esto no es una web")
    } else {
        printLinks()
    }
    console.log("hola")
})
