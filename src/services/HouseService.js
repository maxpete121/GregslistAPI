import { dbContext } from "../db/DbContext.js"



class HouseService{

    async makeHouse(houseData){
        const house = await dbContext.Houses.create(houseData)
        return house
    }


    async getHouses(){
        const houses = await dbContext.Houses.find()
        return houses
    }

    async deleteHouse(houseId){
        const houseToRemove = await dbContext.Houses.findById(houseId)
        if(!houseToRemove){
            throw new Error(`Cant find house with id ${houseId}`)
        }
        await houseToRemove.remove()
        return`House Removed.`
    }
}


export const houseService = new HouseService()