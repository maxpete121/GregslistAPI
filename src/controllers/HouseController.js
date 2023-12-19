import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";





export class HouseController extends BaseController{
    constructor(){
        super('api/houses')
        this.router
        .get('', this.getHouses)
        .get('/find/:houseId', this.findHouse)
        .post('', this.makeHouse)
        .put('/:houseId', this.updateHouse)
        .delete('/:houseId', this.deleteHouse)
    }

    async makeHouse(request, response, next){
        try {
            const houseData = request.body
            const newHouse = await houseService.makeHouse(houseData)
            response.send(newHouse)
        } catch (error) {
            next(error)
        }
    }

    async getHouses(request, response, next){
        try {
            const houses = await houseService.getHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async deleteHouse(request, response, next){
        try {
            const houseId = request.params.houseId
            const houses = await houseService.deleteHouse(houseId)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async findHouse(request, response, next){
        try {
            const houseId = request.params.houseId
            const found = await houseService.findHouse(houseId)
            response.send(found)
        } catch (error) {
            next(error)
        }
    }

    async updateHouse(request, response, next){
        try {
            const houseId = request.params.houseId
            const houseUpdate = request.body
            const house = await houseService.updateHouse(houseId, houseUpdate)
            response.send(house)
        } catch (error) {
            
        }
    }
}