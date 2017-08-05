// scripts.js

var list = document.getElementById('list');
console.log(list);
var add = document.getElementById('addElem');
console.log(add);
add.addEventListener('click', function(element) {
  
  var element = document.createElement('li');
  
  
  var itemsByTagName = document.getElementsByTagName('li');
  console.log(itemsByTagName.length);
  element.innerHTML = 'item' + itemsByTagName.length;
 

    list.appendChild(element);
  });
  
 













  
 








