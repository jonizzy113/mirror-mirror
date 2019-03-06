let message = document.getElementById("message")
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")

message.addEventListener("keyup", function (event) {
    message.innerHTML = event.target.value
    box1.innerHTML= event.target.value
    box2.innerHTML= event.target.value
    console.log(message)
})