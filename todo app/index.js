const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("addbtn");
const ulEl = document.getElementById("ul");

function addTask(label) {
  // for text

  let li = document.createElement("li");

  let span = document.createElement("span");

  span.textContent = label;

  li.appendChild(span);

  // add  delete  button

  let dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete";
  li.appendChild(dltBtn);

  // edit button

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  li.appendChild(editBtn);

  ulEl.appendChild(li)
}


function deleteTask(itemEl){
    itemEl.parentNode.removeChild(itemEl)
    // ul.remove(li)
}

function  editTask(itemEl){
    let span = itemEl.querySelector("span")
    let oldText = span.textContent

    let input = document.createElement("input")

    input.type = "text"
    input.value = oldText

    itemEl.replaceChild(input,span)
    input.focus()

    input.addEventListener("keydown",(e)=>{
        if(e.key==="Enter"){
            let newSpan = document.createElement("span")
            newSpan.textContent = input.value
            itemEl.replaceChild(newSpan,input)
        }
    })
}

buttonEl.addEventListener("click", () => {
  let inpVal = inputEl.value.trim();

  if (inpVal !== "") {
    addTask(inpVal);
    inputEl.value = "";
  }
});


ulEl.addEventListener("click",(e)=>{
    let itemEl = e.target.parentNode // iska matlab li hain 

    if(e.target.textContent==="Delete"){
        deleteTask(itemEl)
    }

    if(e.target.textContent==="Edit"){
        editTask(itemEl)
    }
})
