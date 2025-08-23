const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
const input = document.getElementById("input")

const maxSymbols = 10

input.addEventListener("input", () => {
  let symbols = input.value.length
  let left = maxSymbols - symbols
  
  if (symbols <= maxSymbols) {
    h1.textContent = input.value
    h2.innerHTML = `Символів залишилось: ${left}`

    if (left <= 5) {
      h2.style.color = "red"
    } else {
      h2.style.color = "green"
    }
  } else {
    input.value = input.value.slice(0, maxSymbols)
    alert("Занадто багато символів")
  }
})
