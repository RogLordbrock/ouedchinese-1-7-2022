var titles = ["car", "car but tesla", "car but apple (no motor)", "car but samsung (come with a blanket)", "harbil", "moto", "vilo","hilicopter", "apyi"]
var prices = [50, 30, 1500, 60, 50, 50, 50, 50, 0]
var descriptions = ["simple car", "electric car (so iconic)", "super expeive", "extra stuff to seduce you", "typical harbil", "to impress highschool girls", "poor guy", "fly", "hhhhhhhhhhh"]
var images = ["images/car.jpg", "images/tesla.jpg", "images/apple.jpg", "images/samsung.jpg", "images/harbil.jpg", "images/moto.jpg", "images/vilo.jpg", "images/hilicopter.jpg", "images/legs.jpg"]
var products = []
var carts = []
var displayHtml = ""

for (let index = 0; index < titles.length; index ++) {
    const title = titles[index];
    const price = prices[index];
    const description = descriptions[index];
    const image = images[index];
    var product = {
        id: index,
        title: title,
        price: price,
        description: description,
        image: image,
    }
    products.push(product)

/*this is the html*/
displayHtml += `
<div class="col-4">
<div class="card" style="width: 18rem;">
  <img src=${image} class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <h6 class="price">${price}$</h6>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
</div>`
}

document.getElementById("productcard").innerHTML = displayHtml