var container = document.createElement("div");
container.setAttribute("class","container");
var row = document.createElement("div");
row.classList.add("row","row-md-4");
container.append(row);
async function foo(){
    var res = await fetch("https://api.chucknorris.io/jokes/random")
    var res1 = await res.json();
    console.log(res1);
    var div = document.createElement("div")
    div.innerHTML+=`
    <div class=" col col-md-4"></div>
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header">Categories</div>
    <div class="card-body text-success">
    <h5 class="card-title">Created_at :${res1.created_at}</h5>
    <h5 class="card-title">Value :${res1.value}</h5>
      <h5 class="card-title">I'd :${res1.id}</h5>
      <h5 class="card-title">Updated_at :${res1.updated_at}</h5>
    </div>
  </div>`
    document.body.append(div);
}
foo();