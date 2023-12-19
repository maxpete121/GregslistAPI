import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";



export class CarsController extends BaseController{
  constructor(){
    super('api/cars')
    this.router
      .post('', this.createCar)
      .get('', this.getCars)
      .get('/searchEngine/:engine', this.searchCars)
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

  async searchCars(request, response, next){
    try {
      const searchEngine = request.params.engine
      const cars = await carsService.searchCars(searchEngine)
        response.send(cars)
    } catch (error) {
      next(error)
    }
  }
}
