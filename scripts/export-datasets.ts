import { prisma } from '../lib/db';
import fs from 'fs';
import path from 'path';

async function main() {
    console.log("Starting dataset export...");

    // In real app, filter by date and confidence
    const data = await prisma.victim.findMany({
        where: { confidence: "HIGH" },
        include: { country: true, sector: true, group: true }
    });

    const csvRows = [
        "id,name,country,sector,group,impactScore,date,proofUrl"
    ];

    for (const v of data) {
        csvRows.push(
            `${v.id},"${v.name}",${v.country.iso2},${v.sector.name},${v.group.name},${v.impactScore},${v.discoveredAt.toISOString()},${v.proofUrl || ''}`
        );
    }

    const outputDir = path.join(process.cwd(), 'datasets');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    fs.writeFileSync(path.join(outputDir, 'victims_export_latest.csv'), csvRows.join('\n'));
    console.log(`Exported ${data.length} records to datasets/victims_export_latest.csv`);
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
