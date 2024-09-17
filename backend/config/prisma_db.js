const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log("Verbonden met de database"))
  .catch((error) => console.error("Fout bij verbinden met de database:", error));


// Sluit de databaseverbinding af als het proces wordt afgesloten
process.on('beforeExit', async () => {
  await prisma.$disconnect();
  console.log("Databaseverbinding afgesloten");
});

module.exports = prisma;

