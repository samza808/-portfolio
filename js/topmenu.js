
const menuBar = document.querySelector('#topmenu > div');
console.log(menuBar);

console.log(menuBar.children[0]);

for (let a = 0; a < menuBar.children.length; a++) {
  menuBar.children[a].style.cursor = 'pointer';
}