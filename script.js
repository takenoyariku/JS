function getElement () {
  elements = document.querySelectorAll('li');
  let len = elements.length;
  for (let i = 0; i < len; i++) {
    console.log(elements.item(i).textContent);
  }
}