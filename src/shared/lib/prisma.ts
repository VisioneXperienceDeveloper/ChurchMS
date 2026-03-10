import { PrismaClient } from '@/shared/generated/prisma';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

if (!process.env.DATABASE_URL && !process.env.DIRECT_URL) {
  process.env.DATABASE_URL = "postgresql://dummy:dummy@localhost:5432/dummy";
}

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ log: ['error', 'warn'] });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
