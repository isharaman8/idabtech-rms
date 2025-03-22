import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const filePath = path.join(__dirname, '../json/plans.json');

  let data: any;
  try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading plans.json:', error);
    process.exit(1);
  }

  await prisma.plan.deleteMany();
  console.log('Plans deleted successfully');

  await prisma.plan.createMany({
    data,
    skipDuplicates: true,
  });

  console.log('Plans seeded successfully');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
