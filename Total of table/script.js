const mainTable = document.getElementById("groceryTable");
const btn = document.getElementById("btn");
let prices = document.querySelectorAll(".prices");

btn.addEventListener("click", () => {
  // calculate the total

  let total = 0;

  prices.forEach((p) => {
    //console.log(p)
    total += Number(p.textContent);
  });

  // create new row with content

  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.textContent = `Total price : ${total}`;
  td.setAttribute("colspan", "2");

  tr.appendChild(td);

  mainTable.appendChild(tr);
});
