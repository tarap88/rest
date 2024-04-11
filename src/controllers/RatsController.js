import { Auth0Provider } from "@bcwdev/auth0provider";
import { missionsService } from "../services/MissionsServices.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";


export class RatsController extends BaseController {
    constructor() {
        super('/api/rats')
        this.router
            .get('', this.getRats)
            .get('/:ratId/missions', this.getRatsMission)
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
    async getRatsMission(request, response, next) {
        try {
            const ratId = request.params.ratId
            const missions = await missionsService.getRatsMission(ratId)
            response.send(missions)
        }
        catch (error) {
            next(error)
        }
    }
}