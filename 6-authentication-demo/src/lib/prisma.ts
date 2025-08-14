// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // This prevents multiple PrismaClient instances in dev mode
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'error'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
