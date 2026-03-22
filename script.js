async function hackerMan(){
    let P1 = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Initializing Hack Program...")
        },1000)
    })

    let P2 = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Hacking Rahul's username...")
        },3000)
    })
    let P3 = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Username found Rahul202.....")
        }, 5000)
    })
    let P4 = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Connecting to  Instagram account.....")
        }, 7000)
    })
    let container = document.getElementById("container")
    let card = document.createElement("div")
    card.class = "terminal"
    let init = document.getElementById("Init")
    let hack = document.getElementById("Hack")
    let user = document.getElementById("User")
    let connect = document.getElementById("Connect")
    let P11= await P1;
    init.innerHTML=`
    <p id="Init">${P11}</p>`
    
    let P22= await P2;
     hack.innerHTML=`
    <p id="Hack">${P22}</p>`
    
    let P33= await P3;
    user.innerHTML=`
    <p id="User">${P33}</p>`
    
    let P44= await P4;
    connect.innerHTML=`
    <p id="Connect">${P44}</p>`
    
    container.appendChild(card)
}
hackerMan()

