const timer = document.querySelector(".timer")
const strBtn = document.querySelector(".start")
const txt = document.querySelector(".txt")

let minuts = 60
let intervalId = null

strBtn.addEventListener("click", () => {
  if (intervalId !== null) {
    return
  }

  intervalId = setInterval(() => {
    minuts -=1

    timer.textContent = `${minuts}:00`

    if (minuts === 30) {
      txt.textContent = "залишилось 30 хв"
    }

    if (minuts === 0) {
      clearInterval(intervalId)
      intervalId = null
      txt.textContent = "час вийшов"
    }
  }, 60000)
})

////////завдання 2




