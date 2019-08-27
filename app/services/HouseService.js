import House from "../models/House.js";

let _state = {
  house: [new House({
    year: 2012,
    bedrooms: 4,
    bathrooms: 3.5,
    price: 472000,
    squarefootage: 5000,
    stories: 2,
    imgUrl: "https://i2.wp.com/maggieoverbystudios.com/wp-content/uploads/2013/10/front-2.jpg"
  })]
}

export default class HouseService {
  addHouse(newHouse) {
    _state.house.push(new House(newHouse))
  }

  deleteHouse(id) {
    _state.house.forEach((house, i) => {
      if (house._id == id) {
        _state.house.splice(i, 1)
      }
    })
  }

  get House() {
    return _state.house.map(house => new House(house))
  }

}