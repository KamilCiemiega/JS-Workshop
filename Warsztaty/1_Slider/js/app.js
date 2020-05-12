let buntons = document.querySelectorAll('button');
let itemsList = document.querySelectorAll('li');
let currentPictureIndex = 0;
itemsList[0].className = 'visible';
buntons[0].addEventListener('click', function () {
   itemsList[currentPictureIndex].className = '';
   currentPictureIndex--;
   if (currentPictureIndex < 0) {
       currentPictureIndex = 0;
   }
   itemsList[currentPictureIndex].className = 'visible';
});
buntons[1].addEventListener('click', function () {
   itemsList[currentPictureIndex].className = '';
   currentPictureIndex++;
   if(currentPictureIndex>=itemsList.length){
       currentPictureIndex = itemsList.length-1;
   }
   itemsList[currentPictureIndex].className = 'visible';
});