const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const FilmController = {
    getAllFilms: async (req, res) => {
        try {
            console.log("Fetching all films");
            const films = await prisma.film.findMany({
                select: {
                    id: true,
                    titel: true,
                    beschrijving: true,
                    releasedatum: true,
                    thumbnail: true,
                    cast: true,
                    genre: true,
                    speelduur: true
                }
            });
            console.log("Films fetched successfully");
            res.json(films);
        } catch (error) {
            console.error("Error fetching films:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getFilmById: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Fetching film with ID: ${id}`);
            const film = await prisma.film.findUnique({
                where: {
                    id: Number(id),
                },
                select: {
                    id: true,
                    titel: true,
                    beschrijving: true,
                    releasedatum: true,
                    thumbnail: true,
                    cast: true,
                    genre: true,
                    speelduur: true
                }
            });
            console.log("Film fetched successfully");
            res.json(film);
        } catch (error) {
            console.error("Error fetching film:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = FilmController;