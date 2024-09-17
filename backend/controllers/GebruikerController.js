const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const prisma = new PrismaClient();

const gebruikerController = {
    loginGebruiker: async (req, res) => {
        try {
            console.log('Logging gebruiker');
            const { email, wachtwoord } = req.body;
            const gebruiker = await prisma.gebruiker.findUnique({
                where: { email }
            });

            if (!gebruiker) {
                return res.status(404).json({ error: "Gebruiker niet gevonden" });
            }

            const passwordMatch = await bcrypt.compare(wachtwoord, gebruiker.wachtwoord);
            console.log("password match is uitgevoerd", passwordMatch);

            if (passwordMatch) {
                const token = jwt.sign(
                    {
                        id: gebruiker.id,
                        voornaam: gebruiker.voornaam,
                        achternaam: gebruiker.achternaam,
                        email: gebruiker.email
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '24h'
                    }
                );
                console.log("WW komt overeen");

                res.cookie('token', token, { httpOnly: true });
                res.json({ gebruiker, token });
            } else {
                return res.status(401).json({ error: "Ongeldige gebruikersnaam of wachtwoord" });
            }
        } catch (error) {
            console.log("Error logging gebruiker", error);
            return res.status(500).json({ error: "Error logging gebruiker" });
        }
    }
};

module.exports = gebruikerController;
