import { prisma } from '../lib/db';

async function main() {
    console.log("Generating Monthly Report...");

    const topCountries = await prisma.victim.groupBy({
        by: ['countryId'],
        _count: {
            id: true,
        },
        orderBy: {
            _count: {
                id: 'desc',
            }
        },
        take: 10,
    });

    // In a real implementation, we would use ChartJS-node-canvas to generate PNGs
    // here we just log the data structure which would be passed to the renderer.

    console.log("Top Impacted Countries Data:", JSON.stringify(topCountries, null, 2));
    console.log("Report generation logic specific to PDF rendering would go here.");
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
