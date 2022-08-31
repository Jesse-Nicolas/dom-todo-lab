//cached elemtn references
const input = document.getElementById('entry')
const button = document.getElementById('submit-button')
const clearButton = document.getElementById('clear-button')
const list = document.getElementById('todo-list')

button.addEventListener('click', function(evt)  {
  if (input.value)  {
    const li = document.createElement('li')
    li.textContent = input.value
    document.querySelector('ul').appendChild(li)
    input.value = ''
  }   else  {
    alert(`type a list item to add!`)
  }
})

clearButton.addEventListener('click', function(evt)  {
  while (list.firstChild)  {
    list.removeChild(list.lastChild)
  }
})

