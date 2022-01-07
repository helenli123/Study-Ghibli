const listsContainer = document.querySelector('[data-lists]');

let lists = [];

function render() {
  clearElement(listsContainer);
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.classList.add("list-name");
  })
}

function clearElement(element) {

}