let form = document.querySelector("form")
let input = document.querySelector("input")
let textarea = document.querySelector("textarea")

form.addEventListener("submit" , sendMsg)

function sendMsg(e){
    e.preventDefault()
    let number = input.value
    let msg = textarea.value
    window.location.href = `https://api.whatsapp.com/send/?phone=91${number}&text=${msg}`
}