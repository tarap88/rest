import { missionsService } from "../services/MissionsServices.js";
import BaseController from "../utils/BaseController.js";


export class MissionsController extends BaseController {
    constructor() {
        super('/api/missions')
        this.router
            .get('', this.getMissions)
    }


    async getMissions(request, response, next) {
        try {
            const missions = await missionsService.getMissions()
            response.send(missions)
            console.log('missions working');
        } catch (error) {
            next(error)
        }
    }

}