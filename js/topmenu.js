
const menuBar = document.querySelector('#topmenu > div');
console.log(menuBar);

menuBar.style.width = '900px';
menuBar.style.height = '30px';
menuBar.style.display = 'flex';
menuBar.style.justifyContent = 'space-between';
menuBar.style.alignItems = 'center';

console.log(menuBar.children[0]);

for (let a = 0; a < menuBar.children.length; a++) {
  menuBar.children[a].style.cursor = 'pointer';
}