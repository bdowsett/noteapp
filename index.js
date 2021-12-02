const addNote = require('./postNote')

const title = document.querySelector('#title')
const content = document.querySelector('#content')
const button = document.querySelector('#button')

button.addEventListener("click", () => {
       
       postNote(title.value, content.value)

})