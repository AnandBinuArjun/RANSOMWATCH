export const SECTOR_WEIGHTS: Record<string, number> = {
    Healthcare: 5,
    Government: 5,
    Education: 4,
    Logistics: 4,
    Finance: 3,
    Energy: 4,
    "Critical Infrastructure": 5,
    Manufacturing: 3,
    Retail: 2,
    Technology: 3,
};

export const DATA_SENSITIVITY: Record<string, number> = {
    Medical: 5,
    Financial: 4,
    Academic: 3,
    Personal: 3,
    Government: 5,
    Other: 2,
};

export function computeImpact(
    sectorName: string,
    dataType: string,
    population: number,
    previousAttacks: number,
    daysSinceAttack: number
): number {
    const sectorWeight = SECTOR_WEIGHTS[sectorName] || 2;
    const dataSensitivity = DATA_SENSITIVITY[dataType] || 2;
    const populationExposure = Math.log10(population + 1);
    const recurrence = 1 + previousAttacks * 0.4;
    const timeDecay = 1 + daysSinceAttack / 30;

    const rawScore = (sectorWeight * populationExposure * dataSensitivity * recurrence) / timeDecay;

    return parseFloat(rawScore.toFixed(2));
}

export function getImpactColor(score: number): string {
    if (score >= 80) return "text-rose-600 dark:text-rose-500";
    if (score >= 60) return "text-red-500 dark:text-red-400";
    if (score >= 40) return "text-amber-500 dark:text-amber-400";
    return "text-cyan-500 dark:text-cyan-400";
}

export function getImpactBg(score: number): string {
    if (score >= 80) return "bg-rose-500/10 border-rose-500/20";
    if (score >= 60) return "bg-red-500/10 border-red-500/20";
    if (score >= 40) return "bg-amber-500/10 border-amber-500/20";
    return "bg-cyan-500/10 border-cyan-500/20";
}
