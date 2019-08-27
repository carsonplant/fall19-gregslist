import HouseService from "../services/HouseService.js";


let _houseService = new HouseService()


function _draw() {
  let template = ''
  let house = _houseService.House

  house.forEach((house, index) => {
    template += house.Template
  })

  document.querySelector("#house").innerHTML = template

}

export default class HouseController {
  constructor() {
    _draw()
  }

  deleteHouse(id) {
    _houseService.deleteHouse(id)
    _draw
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target

    let newHouse = {
      price: form.price.value,
      squarefootage: form.squarefootage.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value,
      stories: form.stories.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
    }

    _houseService.addHouse(newHouse)
    _draw()

  }

}