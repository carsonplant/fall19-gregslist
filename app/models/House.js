
export default class House {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 5000)
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.stories = data.stories
    this.squarefootage = data.squarefootage
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `<div class="col-4 border">
    <h2>Price: ${this.price}</h2>
    <h3>Sq. Feet: ${this.squarefootage}</h3>
    <h3>Year: ${this.year}</h3>
    <img src="${this.imgUrl}" alt="">
    <p>Stories: ${this.stories}</p>
    <p>Beds: ${this.bedrooms}</p>
    <p>Baths: ${this.bathrooms}</p>
    <button class="btn btn-danger" onclick="app.controllers.houseController.deleteHouse(${this._id})">Delete House</button>
    </div>
    `
  }
}