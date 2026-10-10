const timer = document.querySelector(".timer")
const startBtn = document.querySelector(".start")

let time = 30000
let intervalId = null

startBtn.addEventListener("click", () => {
  if (intervalId !== null) {
    return
}
  time = 30000
  startBtn.disabled = true

  intervalId = setInterval(() => {
    time -= 10

    let minutes = Math.floor(time / 60000)
    let seconds = Math.floor((time % 60000) / 1000)
    let ms = Math.floor((time % 1000) / 10)
    timer.textContent = minutes + ":" + seconds + ":" + ms

    if (time <= 10000) {
      timer.classList.add("animation")
    }

    if (time <= 0) {
      clearInterval(intervalId)
      intervalId = null
      timer.textContent = "00:00:00"
      timer.classList.remove("animation")
      startBtn.disabled = false
      startBtn.textContent = "again"
    }
  }, 10)
})