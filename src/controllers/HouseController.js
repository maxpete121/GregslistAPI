import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";





export class HouseController extends BaseController{
    constructor(){
        super('api/houses')
        this.router
        .get('', this.getHouses)
        .post('', this.makeHouse)
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
            
        }
    }
}