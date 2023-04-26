let timerCount = 0
let timer = setInterval(() => {
  try {
    new TC_ChatBot('CP303284@CB87358406')
    clearInterval(timer)
  } catch {}

  timerCount++
  if (timerCount > 100) {
    clearInterval(timer)
  }
}, 1000)
