-- AlterTable
ALTER TABLE `User` ADD COLUMN `emailNotifications` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `language` VARCHAR(191) NOT NULL DEFAULT 'en',
    ADD COLUMN `smsNotifications` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `theme` VARCHAR(191) NOT NULL DEFAULT 'light';
