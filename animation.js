let hovers = document.querySelector('.hover')
let hover2 = document.querySelector('.hover2')
let hover3 = document.querySelector('.hover3')

hovers.addEventListener("mouseenter", RespondMouseOver)
hovers.addEventListener("mouseout", RespondMouseOut)
hover2.addEventListener("mouseenter", RespondMouseOverHover2)
hover2.addEventListener("mouseout", RespondMouseOutHover2)
hover3.addEventListener("mouseenter", RespondMouseOverHover3)
hover3.addEventListener("mouseout", RespondMouseOutHover3)

function RespondMouseOver() {
    hovers.classList.add('addGreyscale')
}
function RespondMouseOut() {
    hovers.classList.remove('addGreyscale')
}
function RespondMouseOverHover2() {
    hover2.classList.add('addGreyscale')
}
function RespondMouseOutHover2() {
    hover2.classList.remove('addGreyscale')
}
function RespondMouseOverHover3() {
    hover3.classList.add('addGreyscale')
}
function RespondMouseOutHover3() {
    hover3.classList.remove('addGreyscale')
}
