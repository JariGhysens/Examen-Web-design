-- CreateTable
CREATE TABLE `Gebruiker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `voornaam` VARCHAR(191) NOT NULL,
    `achternaam` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `wachtwoord` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Gebruiker_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Film` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titel` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `speelduur` INTEGER NOT NULL,
    `beschrijving` VARCHAR(191) NOT NULL,
    `releasedatum` DATETIME(3) NOT NULL,
    `cast` VARCHAR(191) NOT NULL,
    `thumbnail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Voorstelling` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `filmId` INTEGER NOT NULL,
    `datum` DATETIME(3) NOT NULL,
    `tijd` VARCHAR(191) NOT NULL,
    `zaalId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `voorstellingId` INTEGER NOT NULL,
    `gebruikerId` INTEGER NOT NULL,
    `zitplaatsen` VARCHAR(191) NOT NULL,
    `totalePrijs` DOUBLE NOT NULL,
    `aankoopdatum` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Zaal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `naam` VARCHAR(191) NOT NULL,
    `capaciteit` INTEGER NOT NULL,
    `schermType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Voorstelling` ADD CONSTRAINT `Voorstelling_filmId_fkey` FOREIGN KEY (`filmId`) REFERENCES `Film`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Voorstelling` ADD CONSTRAINT `Voorstelling_zaalId_fkey` FOREIGN KEY (`zaalId`) REFERENCES `Zaal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_voorstellingId_fkey` FOREIGN KEY (`voorstellingId`) REFERENCES `Voorstelling`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_gebruikerId_fkey` FOREIGN KEY (`gebruikerId`) REFERENCES `Gebruiker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
