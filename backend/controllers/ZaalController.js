const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ZaalController = {
    // get all zaals
    getAllZaals: async (req, res) => {
        try {
            console.log("Fetching all zaals");
            const zaals = await prisma.zaal.findMany({
                select: {
                    id: true,
                    naam: true,
                    capaciteit: true,
                    schermType: true,
                    voorstellingen: true,
                },
            });
            console.log("Zaals fetched successfully");
            res.json(zaals);
        } catch (error) {
            console.error("Error fetching zaals:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Fetching zaal with ID: ${id}`);
            const zaal = await prisma.zaal.findUnique({
                where: {
                    id: Number(id),
                },
                select: {
                    id: true,
                    naam: true,
                    capaciteit: true,
                    schermType: true,
                    voorstellingen: true,
                },
            });
            console.log("Zaal fetched successfully");
            res.json(zaal);
        } catch (error) {
            console.error("Error fetching zaal:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

};
module.exports = ZaalController;
