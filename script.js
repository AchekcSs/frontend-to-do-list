const list = document.getElementById("list")
const inputAdd = document.getElementById("inputAdd")
const buttonAdd = document.getElementById("buttonAdd")
const buttonDel = document.getElementById("buttonDel")

const createItem = (value) => {
  const item = document.createElement("li")
  const itemInput = document.createElement("input")
  const itemText = document.createElement("p")
  const itemButton = document.createElement("button")
  const itemIcon = document.createElement("img")

  item.classList.add("todo__item")
  itemInput.classList.add("todo__item-check")
  itemText.classList.add("todo__item-text")
  itemButton.classList.add("todo__item-delete")

  itemInput.setAttribute("type", "checkbox")
  itemIcon.setAttribute("src", "/images/remove-icon.svg")

  itemText.textContent = value

  list.appendChild(item)
  item.appendChild(itemInput)
  item.appendChild(itemText)
  item.appendChild(itemButton)
  itemButton.appendChild(itemIcon)

  itemButton.addEventListener("click", () => {
    item.remove()
  })

  itemInput.addEventListener("click", () => {
    if (itemInput.checked) {
      itemText.style.textDecoration = "line-through"
    } else {
      itemText.style.textDecoration = "none"
    }
  })
  
}

buttonAdd.addEventListener("click", () => {
  if (!isNaN(inputAdd.value)) {
    alert("Вводьте не лише числа!")
    inputAdd.value = ""
    console.log("hellow")
  } else if (inputAdd.value === "") {
    alert("Введіть щось, перед тим як записувати!")
  } else {
    createItem(inputAdd.value)
    inputAdd.value = ""
  }
})

buttonDel.addEventListener("click", () => {
  const items = document.getElementsByClassName("todo__item")

  Array.from(items).forEach((item) => {
    item.remove()
  })
})