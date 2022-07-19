let body = document.querySelector('body')
let bigDiv = document.createElement('div')
bigDiv.className = 'bigDiv'
let heading = document.createElement('h1')
heading.classList.add('heading')
heading.innerText = '🕺🏾🕺🏾 Disco Grid 🕺🏾🕺🏾'
body.append(heading, bigDiv)

let allBox = []

for (let i = 1; i <= 480; i++) {
  allBox.push(document.createElement('div'))
}

function rendomColor() {
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  let color = `rgb(${red},${green},${blue})`
  return color
}

function generateBox() {
  allBox.forEach((elm) => {
    var smalldiv = elm
    smalldiv.classList.add('smalldiv')
    smalldiv.innerText = Math.floor(Math.random() * 500)
    smalldiv.style.background = rendomColor()
    bigDiv.append(smalldiv)
  })
}

allBox.forEach((elm) => {
  elm.addEventListener('mousemove', (event) => {
    generateBox()
  })
})

generateBox()
