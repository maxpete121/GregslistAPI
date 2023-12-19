import { jobService } from "../services/JobService.js";
import BaseController from "../utils/BaseController.js";




export class JobsController extends BaseController{
    constructor(){
        super('api/jobs')
        this.router
        .get('', this.getJobs)
        .get('/find/:jobId', this.findJob)
        .put('/:jobId', this.updateJob)
        .post('', this.postJob)
        .delete('/:jobId', this.deleteJob)
    }

    async postJob(request, response, next){
        try {
            const jobData = request.body
            const job = await jobService.postJob(jobData)
            response.send(job)
        } catch (error) {
            next(error)
        }
    }

    async findJob(request, response, next){
        try {
            const jobId = request.params.jobId
            const found = await jobService.findJob(jobId)
            response.send(found)
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

    async deleteJob(request, response, next){
        try {
            const jobId = request.params.jobId
            const deleteJob = await jobService.deleteJob(jobId)
            response.send(deleteJob)
        } catch (error) {
            next(error)
        }
    }

    async updateJob(request, response, next){
        try {
            const jobId = request.params.jobId
            const jobUpdate = request.body
            const updated = jobService.updateJob(jobId, jobUpdate)
            response.send(updated)
        } catch (error) {
            
        }
    }
}