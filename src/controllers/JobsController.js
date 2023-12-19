import { jobService } from "../services/JobService.js";
import BaseController from "../utils/BaseController.js";




export class JobsController extends BaseController{
    constructor(){
        super('api/jobs')
        this.router
        .get('', this.getJobs)
        .post('', this.postJob)
    }

    async postJob(request, response, next){
        try {
            const jobData = request.body
            const job = jobService.postJob(jobData)
            response.send(job)
        } catch (error) {
            next(error)
        }
    }


    async getJobs(request, response, next){
        try {
            const jobs = await jobService.getJobs()
            response.send(jobs)
        } catch (error) {
            next(error)
        }
    }
}