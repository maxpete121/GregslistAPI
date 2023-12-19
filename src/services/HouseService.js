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

    async findHouse(houseId){
        const houseFound = await dbContext.Houses.findById(houseId)
        if(!houseFound){
            throw new Error('No house at that ID')
        }
        return houseFound
    }

    async updateHouse(houseId, houseUpdate){
        const originalHouse = await dbContext.Houses.findById(houseId)
        originalHouse.bedroom = houseUpdate.bedroom ? houseUpdate.bedroom : originalHouse.bedroom
        originalHouse.bathroom = houseUpdate.bathroom ? houseUpdate.bathroom : originalHouse.bathroom
        originalHouse.price = houseUpdate.price ? houseUpdate.price : originalHouse.price
        originalHouse.imgUrl = houseUpdate.imgUrl ? houseUpdate.imgUrl : originalHouse.imgUrl
        originalHouse.description = houseUpdate.description ? houseUpdate.description : originalHouse.description
        await originalHouse.save()
        return originalHouse
    }
}


export const houseService = new HouseService()