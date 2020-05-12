/*
 <span class="tooltipText">Text tooltipa</span>
 */
let tooltips = document.querySelectorAll('.tooltip');
console.log(tooltips);
for (let i =0; i<tooltips.length;i++){
    tooltips[i].addEventListener('mouseover',function(){
       let newTooltip = document.createElement('span');
       newTooltip.classList.add('tooltipText');
       newTooltip.innerText = this.dataset.text;
       this.appendChild(newTooltip);
    });
    tooltips[i].addEventListener('mouseout',function(){
       let newTooltip = document.querySelector('.tooltipText');
       newTooltip.remove();
   });
}