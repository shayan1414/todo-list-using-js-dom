let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText= inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn)
    ul.appendChild(item);
    inp.value="";

});

ul.addEventListener("click",function(event){
    // console.log("button clicked");
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove()
        console.log("delted")
    }
})
