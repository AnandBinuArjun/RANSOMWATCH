import { PrismaClient } from '@prisma/client'
import { computeImpact } from '../lib/impactEngine'

const prisma = new PrismaClient()

async function main() {
    console.log("Starting seed...")

    // Clean up
    try {
        await prisma.alert.deleteMany()
        await prisma.victim.deleteMany()
        await prisma.sector.deleteMany()
        await prisma.ransomwareGroup.deleteMany()
        await prisma.country.deleteMany()
    } catch (e) {
        console.log("Cleanup failed (might be first run):", e)
    }

    // Seed Countries
    const us = await prisma.country.create({ data: { id: "US", name: "United States", iso2: "US", population: 331000000 } })
    const uk = await prisma.country.create({ data: { id: "UK", name: "United Kingdom", iso2: "GB", population: 67000000 } })
    const de = await prisma.country.create({ data: { id: "DE", name: "Germany", iso2: "DE", population: 83000000 } })
    const ind = await prisma.country.create({ data: { id: "IN", name: "India", iso2: "IN", population: 1380000000 } })
    const br = await prisma.country.create({ data: { id: "BR", name: "Brazil", iso2: "BR", population: 212000000 } })

    // Seed Sectors
    const health = await prisma.sector.create({ data: { name: "Healthcare", weight: 5 } })
    const govt = await prisma.sector.create({ data: { name: "Government", weight: 5 } })
    const finance = await prisma.sector.create({ data: { name: "Finance", weight: 3 } })
    const tech = await prisma.sector.create({ data: { name: "Technology", weight: 3 } })
    const energy = await prisma.sector.create({ data: { name: "Energy", weight: 4 } })

    // Seed Groups
    const lockbit = await prisma.ransomwareGroup.create({ data: { name: "LockBit" } })
    const alphv = await prisma.ransomwareGroup.create({ data: { name: "ALPHV" } })
    const cl0p = await prisma.ransomwareGroup.create({ data: { name: "Cl0p" } })

    // Seed Victims
    const victims = [
        { name: "City General Hospital", country: us, sector: health, group: lockbit, dataType: "Medical", population: 500000, date: new Date() },
        { name: "Ministry of Transport", country: uk, sector: govt, group: alphv, dataType: "Government", population: 65000000, date: new Date(Date.now() - 3600000 * 2) },
        { name: "TechFlow Systems", country: de, sector: tech, group: cl0p, dataType: "Personal", population: 1000, date: new Date(Date.now() - 3600000 * 5) },
        { name: "State Power Grid", country: br, sector: energy, group: lockbit, dataType: "Financial", population: 20000000, date: new Date(Date.now() - 3600000 * 12) },
    ]

    for (const v of victims) {
        const cis = computeImpact(v.sector.name, v.dataType, v.population, 0, 0)
        await prisma.victim.create({
            data: {
                name: v.name,
                slug: v.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, ''),
                countryId: v.country.id,
                sectorId: v.sector.id,
                groupId: v.group.id,
                dataType: v.dataType,
                impactScore: cis,
                discoveredAt: v.date
            }
        })
    }

    console.log("Seeding completed.")
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
