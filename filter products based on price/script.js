

let products = [
  { name: "Laptop", price: 500 },
  { name: "Mobile", price: 1000 },
  { name: "Headphones", price: 300 },
  { name: "Smartwatch", price: 2000 },
  { name: "Tablet", price: 1500 },
];


let minVal = document.getElementById("minval")
let maxVal = document.getElementById("maxval")

let searchBtn = document.getElementById("btn")

let list = document.getElementById("list")

// initial display

products.forEach(p=>{
    let li = document.createElement("li")

    li.textContent = `${p.name} -- ${p.price}`

    list.appendChild(li)
})

function displayFilteredProducts(p){

    list.innerHTML = ""


    p.forEach(p=>{

        let li = document.createElement("li");

           


        li.textContent = `${p.name} -- ${p.price}`;

        list.appendChild(li);
    })





}
searchBtn.addEventListener("click",function filterProducts(){


    let minval = Number(minVal.value)||0
    let maxval = Number(maxVal.value)||Infinity

    let filteredProducts = products.filter(p=>p.price>=minval&&p.price<=maxval)

      



displayFilteredProducts(filteredProducts)

   



})