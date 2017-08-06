/// scripts.js
var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
  var element = document.createElement('li');
  var itemsByTagName = list.getElementsByTagName('li');
  element.innerHTML = 'item ' + itemsByTagName.length;
  list.appendChild(element);
});













  
 








