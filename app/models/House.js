
export default class House {
  constructor(data) {
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.stories = data.stories
    this.squarefootage = data.squarefootage
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get Template{
    return `<div class="col-4 border">
    <h1>${this.price}</h1>
    <h3>${this.squarefootage}</h3>
    <h3>${this.year}</h3>
    <img src="${this.imgUrl}" alt="">
    <p>${this.stories}</p>
    <p>${this.bedrooms}</p>
    <p>${this.bathrooms}</p>
    <button class="btn btn-danger" onclick="">Delete House</button>
    </div>
    `
  }
}