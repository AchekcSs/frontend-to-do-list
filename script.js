const list = document.getElementById("list"),
  inputAdd = document.getElementById("inputAdd"),
  inputSearch = document.getElementById("inputSearch"),
  buttonAdd = document.getElementById("buttonAdd"),
  buttonDel = document.getElementById("buttonDel"),
  buttonSearch = document.getElementById("buttonSearch"),
  totalCount = document.getElementById("totalCount"),
  items = document.getElementsByTagName("p"),
  clearIcon = document.getElementById("clearIcon")

let count = 0

const createItem = (value) => {
  const item = document.createElement("li"),
    itemInput = document.createElement("input"),
    itemText = document.createElement("p"),
    itemButton = document.createElement("button"),
    itemIcon = document.createElement("img")

  item.classList.add("todo__item")
  itemInput.classList.add("todo__item-check")
  itemText.classList.add("todo__item-text")
  itemButton.classList.add("todo__item-delete")

  itemInput.setAttribute("type", "checkbox")
  itemIcon.setAttribute("src", "/images/delete-icon.svg")

  itemText.textContent = value

  list.appendChild(item)
  item.appendChild(itemInput)
  item.appendChild(itemText)
  item.appendChild(itemButton)
  itemButton.appendChild(itemIcon)

  itemButton.addEventListener("click", () => {
    item.remove()
    count--
    totalCount.textContent = count
  })

  itemInput.addEventListener("click", () => {
    if (itemInput.checked) {
      itemText.style.textDecoration = "line-through"
      itemText.style.color = "#9d9d9d"
    } else {
      itemText.style.textDecoration = "none"
    }
  })

  item.addEventListener("mouseover", () => {
    itemIcon.setAttribute("src", "/images/red-delete-icon.svg")
  })

  item.addEventListener("mouseout", () => {
    itemIcon.setAttribute("src", "/images/delete-icon.svg")
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
    count++
    totalCount.textContent = count
    inputAdd.value = ""
  }
})

buttonDel.addEventListener("click", () => {
  const items = document.getElementsByClassName("todo__item")

  Array.from(items).forEach((item) => {
    item.remove()
  })

  count = 0
  totalCount.textContent = count
})

inputAdd.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    buttonAdd.click()
  }
})

inputSearch.addEventListener("input", (e) => {
  const currValue = e.target.value.toLowerCase()
  Array.from(items).forEach(item => {
    if (item.textContent.toLowerCase().includes(currValue)) {
      item.parentNode.style.display = "flex"
    } else {
      item.parentNode.style.display = "none"
    }
  })
})

buttonSearch.addEventListener("click", () => {
  inputSearch.value = ""
})

buttonSearch.addEventListener("mouseover", () => {
  clearIcon.setAttribute("src", "/images/red-clear-icon.svg")
})

buttonSearch.addEventListener("mouseout", () => {
  clearIcon.setAttribute("src", "/images/clear-icon.svg")
})