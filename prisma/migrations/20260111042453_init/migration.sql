-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "iso2" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "riskIndex" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RansomwareGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "RansomwareGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sector" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "Sector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Victim" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "sectorId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "dataType" TEXT NOT NULL,
    "impactScore" DOUBLE PRECISION NOT NULL,
    "discoveredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "proofUrl" TEXT,
    "confidence" TEXT NOT NULL DEFAULT 'LOW',
    "verifiedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),

    CONSTRAINT "Victim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "victimId" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_iso2_key" ON "Country"("iso2");

-- CreateIndex
CREATE UNIQUE INDEX "RansomwareGroup_name_key" ON "RansomwareGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sector_name_key" ON "Sector"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Victim_slug_key" ON "Victim"("slug");

-- AddForeignKey
ALTER TABLE "Victim" ADD CONSTRAINT "Victim_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Victim" ADD CONSTRAINT "Victim_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "Sector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Victim" ADD CONSTRAINT "Victim_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "RansomwareGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_victimId_fkey" FOREIGN KEY ("victimId") REFERENCES "Victim"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
