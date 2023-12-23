let inputName = document.querySelector(".inputName")
let inputUrl = document.querySelector(".inputUrl")
let formulario = document.querySelector(".formulario")
let reset = document.querySelector(".reset")
let container = document.querySelector(".linksContainer")

function printLinks() {

    let link = {
        title: inputName.value,
        url: `https://${inputUrl.value}`
    };

    let links = JSON.parse(localStorage.getItem('links')) || [];
    links.push(link);
    localStorage.setItem('links', JSON.stringify(links));

    mostrarEnlaces(links);

}
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!(inputUrl.value.includes("."))) {
        window.alert("Esto no es una web")
    } else {
        printLinks()
    }

})
function mostrarEnlaces(links) {

    container.innerHTML = '';

    links.forEach((link, i) =>{
        let linkItem = document.createElement('div');
        linkItem.className = 'linkItem';

        let linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.title;
        linkItem.appendChild(linkElement);

        deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick =  ()=> {
            eliminarLink(i);
        };
        linkItem.appendChild(deleteButton);

        container.appendChild(linkItem);
    });
}

const eliminarLink = (i)=> {
    let links = JSON.parse(localStorage.getItem('links')) || [];
    links.splice(i, 1);
    localStorage.setItem('links', JSON.stringify(links));
    mostrarEnlaces(links);
}

const cargarLinks = () =>{
    let links = JSON.parse(localStorage.getItem('links')) || [];
    mostrarEnlaces(links);
}
document.addEventListener('DOMContentLoaded', cargarLinks);