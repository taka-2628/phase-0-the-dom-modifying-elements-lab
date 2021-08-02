// Write your code here!

//remove <main id="main"></main>
main.remove();

//add new header <h1>
const newHeader = document.createElement ('h1');
document.body.appendChild(newHeader);
//add an id 'victory' to <hi>
newHeader.setAttribute("id", "victory");
//add "YOUR-NAME is the champion" to <h1>
newHeader.innerHTML = "YOUR-NAME is the champion";