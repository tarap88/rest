import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";


export class RatsController extends BaseController {
    constructor() {
        super('/api/rats')
        this.router
            .get('', this.getRats)
    }

    async getRats(request, response, next) {
        try {
            let rats = await ratsService.getRats()
            response.send(rats)
            console.log('rats working');
        } catch (error) {
            next(error)
        }
    }
}