let chekboxes = document.querySelectorAll('input');
let button = document.querySelector('button');
let submitMsg = document.querySelector('.page-info');
let totalPrice = document.querySelector('span');
button.addEventListener('click', function (e) {
   e.preventDefault();
   submitMsg.innerText = 'Do zapłaty ' + totalPrice.value +"zł";
});
for (let i = 0; i < chekboxes.length; i++) {
   chekboxes[i].addEventListener('click', function () {
       if (i === 0) {
           chkAllchkboxes();
           let sum = 0;
           for (j = 1; j < chekboxes.length - 1; j++) {
               sum += Number(chekboxes[j].dataset.price)
           }
           totalPrice.value = sum;
           totalPrice.innerText = totalPrice.value + "zł"
       }
       if (i === 6) {
           unchkAllchkboxes();
           totalPrice.value = 0;
           totalPrice.innerText = totalPrice.value + "zł"
       }
       if (i > 0 && i < 6) {
           if (chekboxes[i].checked != false) {
               totalPrice.value += Number(this.dataset.price);
               totalPrice.innerText = totalPrice.value + "zł"
           } else {
               totalPrice.value -= Number(this.dataset.price);
               totalPrice.innerText = totalPrice.value + "zł"
           }
       }
   })
}
function chkAllchkboxes() {
   for (let i = 1; i < chekboxes.length; i++) {
       chekboxes[i].checked = true;
   }
}
function unchkAllchkboxes() {
   for (let i = 0; i < chekboxes.length - 1; i++) {
       chekboxes[i].checked = false;
   }
}