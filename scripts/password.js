const btn = document.querySelector(".btnPass")
const passLengthContainer = document.getElementById("passLength")
const contraseña = document.querySelector(".password")
let password

const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minus = "abcdefghijklmnopqrstuvwxyz"
const nums = "0123456789"
const simbols = "!@#$%^&*()-_=+"

const arrMayus = mayus.split("")
const arrMinus = minus.split("")
const arrNums = nums.split("")
const arrSimbols = simbols.split("")
const fontElements = [...arrMayus, ...arrMinus, ...arrNums, ...arrSimbols];
let stringFont = mayus + minus + nums + simbols

const passCreator = () => {
    if (passLengthContainer.value <= 11 || passLengthContainer.value >= 50) {
        window.alert(`Subribete a premium para esa longitud de contraseñas`)
    } else {
        for (let i = 0; i < passLengthContainer.value; i++) {
            const element = stringFont[i];
            let randomElement = Math.floor(Math.random() * stringFont.length)
            password += stringFont.charAt(randomElement);
            contraseña.innerHTML = ` ${password} <button onclick="copyText()">Copy</button>`
        }
    }
}

function copyText() {
    navigator.clipboard.writeText(contraseña.textContent)
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    password = ""
    passCreator()
})

