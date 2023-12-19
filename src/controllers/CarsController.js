import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";



export class CarsController extends BaseController{
  constructor(){
    super('api/cars')
    this.router
      .post('', this.createCar)
      .get('', this.getCars)
      .get('/:carId', this.getOneCar)
      .get('/searchEngine/:engine', this.searchCars)
      .delete('/:carId', this.removeCar)
      .put('/:carId', this.updateCar)
  }

  async createCar(request, response, next){
    try {
      const carData = request.body
      const car = await carsService.createCar(carData)
      response.send(car)
    } catch (error) {
      next(error)
    }
  }

  async getCars(request, response, next){
    try {
      const cars = await carsService.getCars()
      response.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async getOneCar(request, response, next){
    try {
      const carId = request.params.carId
      const car = await carsService.getOneCar(carId)
      response.send(car)
    } catch (error) {
      next(error)
    }
  }

  async searchCars(request, response, next){
    try {
      const searchEngine = request.params.engine
      const cars = await carsService.searchCars(searchEngine)
        response.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async removeCar(request, response, next){
    try {
      const carId = request.params.carId
      const message = await carsService.removeCar(carId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }

  async updateCar(request, response, next){
    try {
      const carId = request.params.carId
      const updateData = request.body
      const car = await carsService.updateCar(carId, updateData)
      response.send(car)
    } catch (error) {
      next(error)
    }
  }
}
