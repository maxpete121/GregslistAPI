import { dbContext } from "../db/DbContext.js"





class JobService{

    async postJob(jobData){
        let newJob = await dbContext.Jobs.create(jobData)
        return newJob
    }

    async findJob(jobId){
        const foundJob = await dbContext.Jobs.findById(jobId)
        if(foundJob == undefined){
            throw new Error('Cant find job at that Id')
        }
        return foundJob
    }

    async getJobs(){
        const allJob = await dbContext.Jobs.find()
        return allJob
    }

    async deleteJob(jobId){
        const foundJob = await dbContext.Jobs.findById(jobId)
        await foundJob.remove()
        return`Job listing removed`
    }

    async updateJob(jobId, jobUpdate){
        const originalJob = await dbContext.Jobs.findById(jobId)
        originalJob.wage = jobUpdate.wage ? jobUpdate.wage : originalJob.wage
        originalJob.hours = jobUpdate.hours ? jobUpdate.hours : originalJob.hours
        originalJob.employer = jobUpdate.employer ? jobUpdate.employer : originalJob.employer
        originalJob.description = jobUpdate.description ? jobUpdate.description : originalJob.description
        await originalJob.save()
        return originalJob
    }
}


export const jobService = new JobService()