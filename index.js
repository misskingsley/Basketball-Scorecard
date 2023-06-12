let homeScoreNum = 0
let guestScoreNum = 0
const home = document.getElementById("homeScore")
const guest = document.getElementById("guestScore")

home.textContent = homeScoreNum
guest.textContent = guestScoreNum

function add1Home() {
    /*let btnID = event.target.id
    console.log(btnID)*/
    homeScoreNum += 1
    home.textContent = homeScoreNum
}

function add2Home() {
    homeScoreNum += 2
    home.textContent = homeScoreNum
}

function add3Home() {
    homeScoreNum += 3
    home.textContent = homeScoreNum
}

function add1Guest() {
    /*let btnID = event.target.id
    console.log(btnID)*/
    guestScoreNum += 1
    guest.textContent = guestScoreNum
}

function add2Guest() {
    guestScoreNum += 2
    guest.textContent = guestScoreNum
}

function add3Guest() {
    guestScoreNum += 3
    guest.textContent = guestScoreNum
}