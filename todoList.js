const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

const LOCAL_STORAGF
let lists = [];

//add list item to the list of lists (my lists)
newListForm.addEventListener('submit', e => {
  e.preventDefault(); //prevent page from automatically reloading
  const listName = newListInput.value;
  if (listName == null || listName === '') return  //make sure the user actually typed something
  const list = createList(listName);
  newListInput.value = null;  //clear form
  lists.push(list);  //add user input to list of lists 
  render();
})

//create item in the list of lists (my lists)
function createList(name) {
  return {id: Date.now().toString(), name: name, tasks: []};
}

//creates list of lists (my list), refreshes after a new item is added
function render() {
  clearElement(listsContainer);
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    listsContainer.appendChild(listElement);
  })
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();