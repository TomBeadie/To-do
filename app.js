const items_container = document.getElementById("items");
const item_template = document.getElementById("itemTemplate");
const add_btn = document.getElementById("add");

let items = getItems();

function getItems() {
  const value = localStorage.getItem("todo") || "[]";

  return JSON.parse(value);
}

function setItems(items){
    const itemsJson = JSON.stringify(items)
    localStorage.setItem('todo', itemsJSON)
}

function addItem(){
    items.unshift({
        description: '',
        completed: false
    })
    setItems(items)
    refreshList()
}

function refreshList(){
    items_container.innerHTML  = ''
    for (const item of items){
        const itemElement = item.item_template.content.cloneNode(true)
        const descriptionInput = itemElement.querySelector('.item-description')
        const completedInput = itemElement.querySelector('.item-completed')

        descriptionInput.value = item.description
        completedInput.checked = item.completed

    }
}

console.log(items);
