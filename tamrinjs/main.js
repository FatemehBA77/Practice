const listUl = document.querySelector(".list-style");
const array = ["apple", "banana", "tomato"];
array.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  listUl.appendChild(li);
});
