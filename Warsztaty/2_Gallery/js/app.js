/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

let itemsList = document.querySelectorAll('img');
let body = document.querySelector('body');

console.log(itemsList);
console.log(body);

for (let i =0;i<itemsList.length;i++){
  itemsList[i].addEventListener('click',function(){

    console.log(this.getAttribute('src'));

    let fullScreen = document.createElement('div');
    fullScreen.classList.add('fullScreen');

    let img = document.createElement('img');
    img.setAttribute('src',this.getAttribute('src'));
     
    let btn = document.createElement('button');
    btn.classList.add('close');
    btn.innerText = 'Close';

    fullScreen.appendChild(img);
    fullScreen.appendChild(btn);
    body.appendChild(fullScreen);

    btn.addEventListener ('click',function(){
      this.parentElement.parentElement.removeChild(fullScreen);
    })
  })
}
