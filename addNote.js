addNote = (title, content) => {
    const object = {title: title, content: content}
    fetch('http://localhost:3000/notes', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

}

module.exports = addNote