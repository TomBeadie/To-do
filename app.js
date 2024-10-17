const items_container = document.getElementById("items");
const item_template = document.getElementById("itemTemplate");
const add_btn = document.getElementById("add");

let items = getItems();

function getItems() {
  const value = localStorage.getItem("todo") || "[]";

  return JSON.parse(value);
}

console.log(items);
