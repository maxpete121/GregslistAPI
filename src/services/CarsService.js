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
  async getOneCar(carId) {
    const car = await dbContext.Cars.findById(carId)
    if(!car){// NULL check
      throw new Error(`Could not get, no car at id: ${carId}`)
    }
    return car
  }
  async searchCars(searchEngine) {
    const cars = await dbContext.Cars.find({engineType: searchEngine}) // in this case it is matching the objects available properties to documents in the database that have the same value. ex {engineType: 'v6'} will bring back any car that has the engineType with the 'v6' value.
    return cars
  }
  async removeCar(carId) {
    // await dbContext.Cars.findByIdAndRemove(carId) // This will not tell you if there ISN'T a car here
    const carToRemove = await dbContext.Cars.findById(carId)
    if(!carToRemove){ //verifies were deleting a car that does exist in the data base, and the id isn't bad
      throw new Error(`OOPS something went wrong, Could not delete, no cat id: ${carId}`)
    }
    await carToRemove.remove() // if we didn't hit the error then we do have a car, and we can tell the car to remove itself from the database
    return `${carToRemove.make} ${carToRemove.model} was removed.`
  }
  async updateCar(carId, updateData) {
    const originalCar = await this.getOneCar(carId)
    // NOTE by re-using get one car, we can rely on it's null check to verify the carid, and get the car back in the process
    // await dbContext.Cars.findByIdAndUpdate(carId, updateData) // this works in pinch but is a bad practice, we wont have control over the edit
    originalCar.make = updateData.make != undefined ? updateData.make : originalCar.make
    originalCar.model = updateData.model ? updateData.model : originalCar.model
    originalCar.year = updateData.year ? updateData.year : originalCar.year
    // originalCar.price = updateData.price ? updateData.price : originalCar.price if you don't want them to be able to update a property of your model, then don't include it here
    originalCar.imgUrl = updateData.imgUrl ? updateData.imgUrl : originalCar.imgUrl
    originalCar.description = updateData.description ? updateData.description : originalCar.description
    originalCar.engineType = updateData.engineType ? updateData.engineType : originalCar.engineType
    await originalCar.save()
    return originalCar
  }
}

export const carsService = new CarsService()
