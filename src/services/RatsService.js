import { dbContext } from "../db/DbContext.js"

class RatService {

    async getRats(searchQuery) {
        const rats = await dbContext.Rat.find(searchQuery)
        return rats
    }

}

export const ratsService = new RatService()