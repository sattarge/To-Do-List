let input = document.querySelector(".input");
let button = document.querySelector(".button");
let listTask = document.querySelector(".task");
let text = document.querySelector(".tesk li");


button.addEventListener("click", () =>{
    const newOption = document.createElement("li");
    text = newOption;
    if(input.value === ''){
        alert("Please input some Task ");
    }
    else{
    newOption.innerHTML = input.value;
    listTask.appendChild(newOption);
    let img = document.createElement("img");
    img.src = `close-x-svgrepo-com.svg`
    newOption.append(img);
    }
    input.value = "";
    saveData()
})

listTask.addEventListener("click",function(e){
      if(e.target.tagName === "LI")
      {
        e.target.classList.toggle("item");
        saveData()
      }
      else if(e.target.tagName ==="IMG")
      {
        e.target.parentElement.remove();
        saveData()
      }
},false);

function saveData(){
    localStorage.setItem("data",listTask.innerHTML);
}
function store(){
    listTask.innerHTML = localStorage.getItem("data");
}
store();