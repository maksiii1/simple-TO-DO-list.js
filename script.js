document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const content = document.getElementById("text").value;
  const todoContent = document.getElementById("todo__list");

  if (content.trim() !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");

    li.textContent = content;
    button.textContent = "Delete";

    button.addEventListener("click", () => {
      todoContent.removeChild(li);
    });

    todoContent.appendChild(li);
    li.appendChild(button);

    document.getElementById("text").value = "";
  }
});

document.getElementById("text").addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    document.getElementById("form").dispatchEvent(new Event("submit"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("text").focus();
});
