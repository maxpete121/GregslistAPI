import { dbContext } from "../db/DbContext.js"




class CarsService{
  async createCar(carData) {
    const car = await dbContext.Cars.create(carData) // create inserts the data into the db
    return car
  }

  async getCars() {
    const cars = await dbContext.Cars.find() // find returns all docs that match the filter, in this case, there is no filter so it will find everything in the Cars collection
    return cars
  }
  async searchCars(searchEngine) {
    const cars = await dbContext.Cars.find({engineType: searchEngine}) // in this case it is matching the objects available properties to documents in the database that have the same value. ex {engineType: 'v6'} will bring back any car that has the engineType with the 'v6' value.
    return cars
  }
}

export const carsService = new CarsService()
