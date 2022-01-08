const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');
const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector('[data-list-count]');
const tasksContainer = document.querySelector('[data-tasks]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

//allows for a list to be selected
listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
})

deleteListButton.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
})

//add list item to the list of lists (my lists)
newListForm.addEventListener('submit', e => {
  e.preventDefault(); //prevent page from automatically reloading
  const listName = newListInput.value;
  if (listName == null || listName === '') return  //make sure the user actually typed something
  const list = createList(listName);
  newListInput.value = null;  //clear form
  lists.push(list);  //add user input to list of lists 
  saveAndRender();
})

//create item in the list of lists (my lists)
function createList(name) {
  return {id: Date.now().toString(), name: name, tasks: []};
}

function saveAndRender() {
  save();
  render();
}

//save user information in local storage, like key value pair
function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

//renders list of lists and list/task container
function render() {
  clearElement(listsContainer);
  renderLists();
  
  const selectedList = lists.find(list => list.id === selectedListId);
  
  if (selectedListId == null) {  //if no list is selected, the task container doesn't show up
    listDisplayContainer.style.display = 'none';  
  }
  else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
  }
}

function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.
}

//creates list of lists (my list), refreshes after a new item is added
function renderLists() {
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add('active-list');
    } 
    listsContainer.appendChild(listElement);
  })
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();