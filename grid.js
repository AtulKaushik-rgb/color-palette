let a = document.querySelectorAll('.inner');

let selectedColor = null;

let list = [...a];

let handler = (e) => {

 //   console.log(e.target)
  //  console.log(e.target.style.backgroundColor)

    let colors = localStorage.getItem('currentColor')
    console.log('value recieved from local storage is ',colors)

    if (e.target.style.backgroundColor !== colors || colors !== null) {
        e.target.style.backgroundColor = colors
    }
    else
        e.target.style.backgroundColor = white

}
let selectorHandler = (e) => {

    if (e.target.className === 'selector') {
        selectedColor = e.target.style.backgroundColor;
        localStorage.setItem('currentColor',selectedColor);
        handler(e);
        //console.log('value store in localstorage is '+selectedColor)
    }
}

let b = document.querySelectorAll('.selector');
let titles = document.querySelector('.title');

if(localStorage.getItem('currentColor') == null)
titles.textContent = 'Please select a color from palette';
else
titles.textContent = 'Current Selection is '+localStorage.getItem('currentColor');
console.log(titles);


for(let i = 0;i<b.length;i++)
{
    b[i].style.backgroundColor = b[i].id
}

for (let i = 0; i < b.length; i++) {
    b[i].addEventListener('click', selectorHandler)
}


for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', handler)
}

const beforeUnloadListener = () =>{
    localStorage.removeItem('currentColor');
}



addEventListener("beforeunload", beforeUnloadListener);