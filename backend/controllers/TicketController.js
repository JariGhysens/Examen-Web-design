const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const TicketController = {
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Fetching ticket with ID: ${id}`);
            const ticket = await prisma.ticket.findUnique({
                where: {
                    id: Number(id),
                },
                select: {
                    id: true,
                    gebruiker: {
                        select: {
                            id: true,
                            voornaam: true,
                            achternaam: true,
                        },
                    },
                    voorstelling: {
                        select: {
                            id: true,
                            datum: true,
                            film: {
                                select: {
                                    id: true,
                                    titel: true,
                                },
                            },
                            zaal: {
                                select: {
                                    id: true,
                                    naam: true,
                                },
                            },
                        },
                    },
                    zitplaatsen: true,
                    totalePrijs: true,
                    aankoopdatum: true,
                    voorstellingsDatum: true,
                },
            });
            console.log("Ticket fetched successfully");
            res.json(ticket);
        } catch (error) {
            console.error("Error fetching ticket:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    createTicket: async (req, res) => {
        try {
            const { gebruikerId, voorstellingId, zitplaatsen, totalePrijs, aankoopdatum, voorstellingsDatum } = req.body;
            console.log(`Creating ticket with gebruikerId: ${gebruikerId} and voorstellingId: ${voorstellingId}`);

            // Controleer of de voorstellingId overeenkomt met een bestaande Voorstelling
            const voorstellingExists = await prisma.voorstelling.findUnique({
                where: {
                    id: voorstellingId
                }
            });

            if (!voorstellingExists) {
                return res.status(404).json({ error: "Voorstelling niet gevonden" });
            }

            // Maak het ticket aan
            const ticket = await prisma.ticket.create({
                data: {
                    gebruiker: {
                        connect: {
                            id: gebruikerId,
                        },
                    },
                    voorstelling: {
                        connect: {
                            id: voorstellingId,
                        },
                    },
                    zitplaatsen,
                    totalePrijs,
                    aankoopdatum,
                    voorstellingsDatum,
                },
                select: {
                    id: true,
                    gebruiker: {
                        select: {
                            voornaam: true,
                            achternaam: true,
                        },
                    },
                    voorstelling: {
                        select: {
                            datum: true,
                            film: {
                                select: {
                                    titel: true,
                                },
                            },
                            zaal: {
                                select: {
                                    naam: true,
                                },
                            },
                        },
                    },
                    zitplaatsen: true,
                    totalePrijs: true,
                    aankoopdatum: true,
                    voorstellingsDatum: true,
                },
            });
            console.log("Ticket created successfully");
            res.json(ticket);
        } catch (error) {
            console.error("Error creating ticket:", error);
            res.status(500).json({ error: 'Interne serverfout' });
        }
    },
};

module.exports = TicketController;
