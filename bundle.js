(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addNote.js
  var require_addNote = __commonJS({
    "addNote.js"(exports, module) {
      addNote = (title2, content2) => {
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
      module.exports = addNote;
    }
  });

  // index.js
  var addNote2 = require_addNote();
  var title = document.querySelector("#title");
  var content = document.querySelector("#content");
  var button = document.querySelector("#button");
  button.addEventListener("click", () => {
    addNote2(title.value, content.value);
  });
})();
