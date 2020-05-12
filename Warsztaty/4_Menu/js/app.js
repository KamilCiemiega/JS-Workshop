let li = document.querySelectorAll("div > ul > li");
console.log(li);

for(i = 0; i < li.length; i++){
    li[i].addEventListener("mouseover", function(){
        let ul = this.querySelector("ul");
        if(ul != null){
            ul.style.display = "block";
        }
    });
    
    li[i].addEventListener("mouseout", function(){
    
    let ul = this.querySelector("ul");
    if(ul != null){
        ul.style.display = "none";
        }
    });
}