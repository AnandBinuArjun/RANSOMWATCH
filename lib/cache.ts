import { createClient } from 'redis';

const redis = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redis.on('error', (err) => console.log('Redis Client Error', err));

if (process.env.REDIS_URL) {
    redis.connect();
}

export async function cached<T>(key: string, ttlSeconds: number, fn: () => Promise<T>): Promise<T> {
    if (!process.env.REDIS_URL) {
        // Fallback if no Redis is configured
        return await fn();
    }

    try {
        const hit = await redis.get(key);
        if (hit) return JSON.parse(hit);

        const data = await fn();
        await redis.set(key, JSON.stringify(data), { EX: ttlSeconds });
        return data;
    } catch (e) {
        console.warn("Redis cache failed, bypass:", e);
        return await fn();
    }
}
