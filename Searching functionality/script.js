const nameListItems = [
  "Arun",
  "Rohan",
  "Abhishek",
  "Rahul",
  "Yogendra",
  "Siddharth",
];

let searchBox = document.getElementById("searchBox");

let nameList = document.getElementById("nameList");


// intial display of names

nameListItems.forEach(names=>{
    let li = document.createElement("li")
    li.textContent = names
    nameList.appendChild(li)
})

searchBox.addEventListener("input", function(){

    let typedText = searchBox.value.toLowerCase()

    let liItems = document.querySelectorAll("li")

    liItems.forEach(li=>{
        avaliableText = li.textContent.toLowerCase()

        li.style.display= avaliableText.includes(typedText)?"block":"none"
    })
})
