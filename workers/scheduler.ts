import { Queue, Worker } from 'bullmq';
import { runLockbitCrawler } from './lockbit.worker';

// Redis connection
const connection = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
};

const crawlerQueue = new Queue('crawler-queue', { connection });

export async function scheduleCrawlers() {
    // Add periodic jobs
    await crawlerQueue.add('lockbit', {}, { repeat: { every: 3600000 } }); // Every hour
    console.log("Crawlers scheduled");
}

// Worker Instance
const worker = new Worker('crawler-queue', async job => {
    console.log(`Processing job ${job.name}`);
    if (job.name === 'lockbit') {
        await runLockbitCrawler();
    }
}, { connection });

worker.on('completed', job => {
    console.log(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
    console.log(`${job?.id} has failed with ${err.message}`);
});
