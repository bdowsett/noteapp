const addNote = require('./addNote')

const title = document.querySelector('#title')
const content = document.querySelector('#content')
const button = document.querySelector('#button')

button.addEventListener("click", () => {
       
       addNote(title.value, content.value)

})