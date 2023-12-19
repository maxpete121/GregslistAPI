import { dbContext } from "../db/DbContext.js"





class JobService{

    async postJob(jobData){
        let newJob = await dbContext.Jobs.create(jobData)
        return newJob
    }

    async getJobs(){
        const allJob = await dbContext.Jobs.find()
        return allJob
    }
}


export const jobService = new JobService()