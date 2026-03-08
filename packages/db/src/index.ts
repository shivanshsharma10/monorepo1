import { PrismaClient } from "./generated/prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Stable Prisma 6 initialization: works perfectly with Render
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Export everything from the client so you get all your 'Member' types automatically
export * from "./generated/prisma/client";