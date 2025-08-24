const list = document.getElementById("list")
const inputAdd = document.getElementById("inputAdd")
const inputSearch = document.getElementById("inputSearch")
const buttonAdd = document.getElementById("buttonAdd")
const buttonDel = document.getElementById("buttonDel")
const buttonSearch = document.getElementById("buttonSearch")
const totalCount = document.getElementById("totalCount")
const items = document.getElementsByTagName("p")
const clearIcon = document.getElementById("clearIcon")

let count = 0

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



//стилізувати checkbox yes
//зробити так, щоб при наведенні на item, крім бордера також червоною ставала іконка смітника yes
//змінити px на rem
//навести лад у scss