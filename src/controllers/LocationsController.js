import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsServices.js";



export class LocationsController extends BaseController {
    constructor() {
        super('api/locations')
        this.router
            .get('', this.getLocations)
            .get('/:locationId/missions', this.getMissionsByLocation)

    }

    async getLocations(request, response, next) {
        try {
            const locations = await locationsService.getLocations()
            response.send(locations)
            console.log('locations working');
        } catch (error) {
            next(error)
        }
    }

    async getMissionsByLocation(request, response, next) {
        try {
            const locationId = request.params.locationId
            const missions = await missionsService.getMissionsByLocation(locationId)
            response.send(missions)
        }
        catch (error) {
            next(error)
        }
    }

}