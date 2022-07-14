
const menuBar = document.querySelector('#topmenu > div');
console.log(menuBar);

menuBar.style.width = '900px';
menuBar.style.height = '30px';
menuBar.style.display = 'flex';
menuBar.style.justifyContent = 'space-between';
menuBar.style.alignItems = 'center';

console.log(menuBar.children[0]);

console.dir(menuBar.children[0].style);

let hover = true;

for (let a = 0; a < menuBar.children.length; a++) {
  menuBar.children[a].style.cursor = 'pointer';
  menuBar.children[a].style.width = '154px';
  menuBar.children[a].style.height = '100%';
  menuBar.children[a].style.fontSize = '24px';
  menuBar.children[a].style.fontWeight = 'bold';
  menuBar.children[a].style.display = 'flex';
  menuBar.children[a].style.justifyContent = 'center';
  menuBar.children[a].style.fontFamily = 'Balsamiq Sans, cursive';

  menuBar.children[a].addEventListener('mouseover', function(event) {
    event.target.style.color = '#4F9CAA';
  } );

  menuBar.children[a].addEventListener('mouseout', function(event) {
    event.target.style.color = '#484848';
  } );

}
