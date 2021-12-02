(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // postNote.js
  var require_postNote = __commonJS({
    "postNote.js"(exports, module) {
      postNote = (title2, content2) => {
        const object = { title: title2, content: content2 };
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(object)
        }).then((response) => response.json()).then((data) => {
          console.log("Success:", data);
        }).catch((error) => {
          console.error("Error:", error);
        });
      };
      module.exports = postNote;
    }
  });

  // index.js
  var addNote = require_postNote();
  var title = document.querySelector("#title");
  var content = document.querySelector("#content");
  var button = document.querySelector("#button");
  button.addEventListener("click", () => {
    postNote(title.value, content.value);
  });
})();
