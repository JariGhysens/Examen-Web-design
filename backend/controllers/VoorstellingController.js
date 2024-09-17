const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const VoorstellingController = {
    getAllVoorstellingen: async (req, res) => {
        try {
            console.log("Fetching all voorstellingen");
            const voorstellingen = await prisma.voorstelling.findMany({
                select: {
                    id: true,
                    film: {
                        select: {
                            titel: true,
                        },
                    },
                    datum: true,
                    tijd: true,
                    zaal: {
                        select: {
                            naam: true,
                            schermType: true,
                        },
                    },
                },
            });
            console.log("Voorstellingen fetched successfully");
            res.json(voorstellingen);
        } catch (error) {
            console.error("Error fetching voorstellingen:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getVoorstellingById: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Fetching voorstelling with ID: ${id}`);
            const voorstelling = await prisma.voorstelling.findUnique({
                where: {
                    id: Number(id),
                },
                select: {
                    id: true,
                    film: {
                        select: {
                            titel: true,
                        },
                    },
                    datum: true,
                    tijd: true,
                    zaal: {
                        select: {
                            naam: true,
                            schermType: true,
                        },
                    },
                },
            });
            console.log("Voorstelling fetched successfully");
            res.json(voorstelling);
        } catch (error) {
            console.error("Error fetching voorstelling:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = VoorstellingController;